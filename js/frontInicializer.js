function initFront()
{
    initLogo();
    initMenu();
    initFooter();
    prepareModal();
}
function initFooter()
{
    function createBottomLines(id, lines) {
        const container = document.createElement('div');
        container.id = id;
        container.className = 'bottom_lines';

        lines.forEach(line => {
            const div = document.createElement('div');
            div.className = line.className;
            div.innerHTML = line.content;
            container.appendChild(div);
        });

        return container;
    }

    const contentContainer = document.getElementById('footer');
    console.log(contentContainer);

    const coLines = [
        { className: 'bottom_line_nad', content: 'Co? Kdy? Kde?' },
        { className: 'bottom_line', content: '💡 Setkání plachetnic třídy NSS - A,B,C,RG-650' },
        { className: 'bottom_line', content: '🕘 26.9.-28.9.2023' },
        { className: 'bottom_line', content: '🗺 RS Vyhlídka Těrlicko' }
    ];
    const coSection = createBottomLines('Co', coLines);
    contentContainer.appendChild(coSection);

    const registraceLines = [
        { className: 'bottom_line_nad', content: 'Registrace' },
        { className: 'bottom_line', content: '🗈 <a href="propozice.pdf">Propozice</a>' },
        { className: 'bottom_line', content: '🗊 <a href="registrace.html">Registrační formulář</a>' }
    ];
    const registraceSection = createBottomLines('Registrace', registraceLines);
    contentContainer.appendChild(registraceSection);

    const kontaktLines = [
        { className: 'bottom_line_nad', content: 'Kontakt' },
        { className: 'bottom_line', content: '🖃 <a href="mailto:sebastian.walent@gmail.com">sebastian.walent@gmail.com</a>' },
        { className: 'bottom_line', content: '🖃 <a href="mailto:modelari.slezsko@gmail.com">modelari.slezsko@gmail.com</a>' }
    ];
    const kontaktSection = createBottomLines('Kontakt', kontaktLines);
    contentContainer.appendChild(kontaktSection);
}
function initLogo()
{
    const logo = document.createElement('img');
    logo.src = './logos/logo.svg';
    logo.width = '100%';
    logo.id = 'logo';

    const mobileLogo = document.createElement('img');
    mobileLogo.src = './logos/logomobile.svg';
    mobileLogo.width = '100%';
    mobileLogo.id = 'mobile_logo';

    const imageContainer = document.getElementById('logo_block');
    imageContainer.appendChild(logo);
    imageContainer.appendChild(mobileLogo);
}
function initMenu()
{
    const menuItems = [
        { href: "./index.html", text: "Těrlická plachta 2025" },
        { href: "./historie.html", text: "Historie" },
        { href: "./registrace.html", text: "Registrace" },
        { href: "./kontakty.html", text: "Kontakt" }
    ];
    
    function createMenu(id, items, separator = " | ") {
        const menu = document.createElement("menu");
        menu.id = id;
    
        items.forEach((item, index) => {
        const link = document.createElement("a");
        link.href = item.href;
        link.textContent = item.text;
        menu.appendChild(link);
    
        if (separator && index < items.length - 1) {
            const sep = document.createTextNode(separator);
            menu.appendChild(sep);
        }
        });
    
        return menu;
    }
  
    document.getElementById("menu_block").appendChild(createMenu("menu_web", menuItems))
    document.getElementById("menu_block").appendChild(createMenu("menu_mob", menuItems, " "));
}

function prepareModal()
{
var modal = document.getElementById("myModal");
if(modal ==null)
{
    return;
}
var modalImg = document.getElementById("img01");
var pole_obrazku = document.getElementsByClassName("myImg");
for(var i=0;i<pole_obrazku.length;i++)
{
    pole_obrazku[i].onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        }
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
  }
}