const fs = require('fs/promises');
const path = require('path');
const { spawnSync } = require('child_process');

function runGit(args, cwd) {
  const result = spawnSync('git', args, { cwd, stdio: 'inherit' });
  if (result.error) {
    throw result.error;
  }
  if (result.status !== 0) {
    throw new Error(`git ${args.join(' ')} failed with exit code ${result.status}`);
  }
}

async function main() {
  const root = process.cwd();
  const buildDir = path.join(root, 'build');
  const tempDir = path.join(root, '.gh-pages-temp');

  try {
    const stats = await fs.stat(buildDir);
    if (!stats.isDirectory()) {
      throw new Error('Build directory exists but is not a directory.');
    }
  } catch (err) {
    throw new Error('Build directory not found. Run `npm run build` first.');
  }

  const remoteResult = spawnSync('git', ['config', '--get', 'remote.origin.url'], {
    cwd: root,
    encoding: 'utf8',
  });
  if (remoteResult.error) {
    throw remoteResult.error;
  }
  if (remoteResult.status !== 0 || !remoteResult.stdout.trim()) {
    throw new Error('Failed to read git remote origin URL.');
  }

  const remoteUrl = remoteResult.stdout.trim();

  await fs.rm(tempDir, { recursive: true, force: true });
  await fs.mkdir(tempDir, { recursive: true });
  await fs.cp(buildDir, tempDir, { recursive: true });
  await fs.writeFile(path.join(tempDir, '.nojekyll'), '');
  await fs.writeFile(path.join(tempDir, 'CNAME'), 'terlickaplachta.cz');

  runGit(['init'], tempDir);
  runGit(['checkout', '--orphan', 'gh-pages'], tempDir);
  runGit(['add', '--all'], tempDir);
  runGit(['commit', '-m', 'Deploy to GitHub Pages'], tempDir);
  runGit(['remote', 'add', 'origin', remoteUrl], tempDir);
  runGit(['push', '--force', 'origin', 'gh-pages'], tempDir);

  await fs.rm(tempDir, { recursive: true, force: true });

  console.log('Deployment complete.');
}

main().catch((error) => {
  console.error('Deployment failed:', error.message || error);
  process.exit(1);
});
