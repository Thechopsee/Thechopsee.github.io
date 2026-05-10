const historyData = [
    { year: 2025, results: { type: 'new', url: 'vysledky/newvysledky.html?soubor=2025' } },
    { year: 2024, results: { type: 'new', url: 'vysledky/newvysledky.html?soubor=2024' } },
    { year: 2023, results: { type: 'new', url: 'vysledky/newvysledky.html?soubor=2023' } },
    { year: 2022, results: { type: 'link', url: 'vysledky.html' } },
    { year: 2021, results: { type: 'download' }, imgExtensions: { 2: 'png' } },
    { year: 2020, results: { type: 'download' } },
    { year: 2019, results: { type: 'download' } },
    { year: 2018, results: { type: 'download' } },
    { year: 2017, results: { type: 'download' } },
    { year: 2016, results: { type: 'download' } },
    { year: 2015, results: { type: 'download' } },
    { year: 2014, results: { type: 'download' } },
    { year: 2013, results: { type: 'download' } },
    { year: 2012, results: { type: 'download' } },
    { year: 2011, results: { type: 'download' } },
];

function renderHistory() {
    const yearMenu = document.getElementById('yearmenu');
    const pcGalerie = document.getElementById('pc_galerie');

    if (!yearMenu || !pcGalerie) return;

    yearMenu.innerHTML = '';
    pcGalerie.innerHTML = '';

    historyData.forEach(data => {
        // Year Menu
        const yearLink = document.createElement('a');
        yearLink.href = `#${data.year}`;
        yearLink.className = 'his_nav_button';
        yearLink.textContent = data.year;
        yearMenu.appendChild(yearLink);

        // History Card
        const frame = document.createElement('div');
        frame.id = data.year;
        frame.className = 'fotky_frame';

        const h3 = document.createElement('h3');
        h3.textContent = data.year;
        frame.appendChild(h3);
        frame.appendChild(document.createElement('br'));

        // Top Gallery
        const topGallery = document.createElement('div');
        topGallery.className = 'top_galery';

        const leftDiv = document.createElement('div');
        leftDiv.className = 'main_left';
        leftDiv.appendChild(createHistoryImage(data.year, 1, data.imgExtensions && data.imgExtensions[1]));

        const rightDiv = document.createElement('div');
        rightDiv.className = 'main_right';
        rightDiv.appendChild(createHistoryImage(data.year, 2, data.imgExtensions && data.imgExtensions[2]));

        topGallery.appendChild(leftDiv);
        topGallery.appendChild(rightDiv);
        frame.appendChild(topGallery);

        // Bottom Gallery
        const bottomGallery = document.createElement('div');
        bottomGallery.className = 'bottom_galery';
        for (let i = 3; i <= 6; i++) {
            bottomGallery.appendChild(createHistoryImage(data.year, i, data.imgExtensions && data.imgExtensions[i]));
        }
        frame.appendChild(bottomGallery);

        // Links/Buttons
        const spacer = document.createElement('div');
        spacer.className = 'spacer galery_link';

        const btnClanky = document.createElement('button');
        btnClanky.className = 'galery_butt';
        btnClanky.id = `clanky-${data.year}`;
        btnClanky.onclick = function() { down_clanky(this); };
        btnClanky.innerHTML = 'Članky ↧';
        spacer.appendChild(btnClanky);

        const btnGalerie = document.createElement('button');
        btnGalerie.className = 'galery_butt';
        btnGalerie.id = `galerie-${data.year}`;
        btnGalerie.onclick = function() { down_galerie(this); };
        btnGalerie.innerHTML = 'Galerie ↧';
        spacer.appendChild(btnGalerie);

        const btnVysledky = document.createElement('button');
        btnVysledky.className = 'galery_butt';
        btnVysledky.id = `vysledky-${data.year}`;

        if (data.results.type === 'new' || data.results.type === 'link') {
            const a = document.createElement('a');
            a.href = data.results.url;
            a.innerHTML = 'Vysledky ↧';
            btnVysledky.appendChild(a);
            if (data.results.type === 'link') {
                btnVysledky.onclick = function() { down_vysledky(this); };
            }
        } else {
            btnVysledky.onclick = function() { down_vysledky(this); };
            btnVysledky.innerHTML = 'Vysledky ↧';
        }
        spacer.appendChild(btnVysledky);

        frame.appendChild(spacer);

        // Center / Place for articles
        const center = document.createElement('div');
        center.id = 'center';
        const place = document.createElement('div');
        place.id = `${data.year}place`;
        place.className = 'clanky_place';
        center.appendChild(place);
        frame.appendChild(center);

        pcGalerie.appendChild(frame);
    });
}

function createHistoryImage(year, index, ext) {
    const img = document.createElement('img');
    const extension = ext || 'jpg';
    img.src = `galerie/fotky/${year}/${year}_${index}.${extension}`;
    img.width = 100; // This will be overridden by CSS 100% anyway but matches original HTML width="100%"
    img.style.width = '100%';
    img.id = `myImg${index-1}`;
    img.className = 'myImg';
    img.loading = 'lazy';
    return img;
}
