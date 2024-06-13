function initFront()
{
    initMenu();
}
function initMenu()
{
    // Vytvoření položek menu
    const menuItems = [
        { href: "./index.html", text: "Těrlická plachta 2024" },
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
    //document.body.appendChild(createMenu("menu_web", menuItems));
    //document.body.appendChild(createMenu("menu_mob", menuItems, " "));
  
    document.getElementById("menu_block").appendChild(createMenu("menu_web", menuItems))
    document.getElementById("menu_block").appendChild(createMenu("menu_mob", menuItems, " "));
}