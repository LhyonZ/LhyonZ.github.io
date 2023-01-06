function idioma(lan) {
    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {
        if(ajax.readyState == 4 && ajax.status == 200) {
            const datos = ajax.responseXML.getElementsByTagName("texts").item(0);
            const util = datos.getElementsByTagName("util").item(0).getElementsByTagName("p");
            const titles = datos.getElementsByTagName("titles").item(0).getElementsByTagName("title");
            const home = datos.getElementsByTagName("home").item(0).getElementsByTagName("p");
            const commands = datos.getElementsByTagName("commands").item(0).getElementsByTagName("p");
            const store = datos.getElementsByTagName("store").item(0).getElementsByTagName("p");
            const apps = datos.getElementsByTagName("apps").item(0).getElementsByTagName("p");
            const lans = datos.getElementsByTagName("lans").item(0).getElementsByTagName("lan");

            const lTitle = document.getElementsByTagName("title").item(0);
            const lLhyon = document.getElementsByTagName("p").item(0);
            const menuI = document.getElementsByTagName("p").item(1);
            const menuII = document.getElementsByTagName("p").item(2);
            const menuIII = document.getElementsByTagName("p").item(3);
            const menuIV = document.getElementsByTagName("p").item(4);
            const bLan = document.getElementsByClassName("button").item(0);

            lTitle.innerText = titles.item(0).firstChild.nodeValue;
            lLhyon.innerText = util.item(1).firstChild.nodeValue;
            menuI.innerText = titles.item(0).firstChild.nodeValue;
            menuII.innerText = titles.item(1).firstChild.nodeValue;
            menuIII.innerText = titles.item(2).firstChild.nodeValue;
            menuIV.innerText = titles.item(3).firstChild.nodeValue;
            bLan.innerText = lans.item(0).firstChild.nodeValue;

            const ps = document.getElementsByTagName("p");
            if(document.documentURI.includes("Inicio")) {
                ps.item(5).innerText = home.item(0).firstChild.nodeValue;
                ps.item(6).innerText = home.item(1).firstChild.nodeValue;
                ps.item(7).innerText = util.item(2).firstChild.nodeValue;
            }else if(document.documentURI.includes("Comandos")) {
                ps.item(5).innerText = commands.item(0).firstChild.nodeValue;
                ps.item(6).innerText = commands.item(1).firstChild.nodeValue;
                ps.item(7).innerText = commands.item(2).firstChild.nodeValue;
                ps.item(8).innerText = commands.item(3).firstChild.nodeValue;
                ps.item(9).innerText = commands.item(4).firstChild.nodeValue;
                ps.item(10).innerText = commands.item(5).firstChild.nodeValue;
            }else if(document.documentURI.includes("Store")) {
                ps.item(5).innerText = store.item(0).firstChild.nodeValue;
                ps.item(6).innerText = store.item(1).firstChild.nodeValue;
                ps.item(7).innerText = store.item(2).firstChild.nodeValue;
                ps.item(8).innerText = store.item(3).firstChild.nodeValue;
                ps.item(9).innerText = store.item(4).firstChild.nodeValue;
                ps.item(10).innerText = store.item(5).firstChild.nodeValue;
                ps.item(11).innerText = store.item(6).firstChild.nodeValue;
                ps.item(12).innerText = store.item(7).firstChild.nodeValue;
                ps.item(13).innerText = store.item(8).firstChild.nodeValue;
                ps.item(14).innerText = store.item(9).firstChild.nodeValue;
                ps.item(15).innerText = store.item(10).firstChild.nodeValue;
            }else if(document.documentURI.includes("Apps")) {
                const hTitles = document.getElementsByTagName("h1");
                const hSubTles = document.getElementsByTagName("h3");
                const buttons = document.getElementsByClassName("buttons");

                ps.item(5).innerText = apps.item(0).firstChild.nodeValue;
                hTitles.item(0).innerText = apps.item(1).firstChild.nodeValue;
                hSubTles.item(0).innerText = apps.item(2).firstChild.nodeValue;
                ps.item(6).innerText = apps.item(3).firstChild.nodeValue;
                ps.item(7).innerText = apps.item(4).firstChild.nodeValue;
                ps.item(8).innerText = apps.item(5).firstChild.nodeValue;
                buttons.item(0).innerText = util.item(0).firstChild.nodeValue;
                
                hTitles.item(1).innerText = apps.item(6).firstChild.nodeValue;
                hSubTles.item(1).innerText = apps.item(7).firstChild.nodeValue;
                ps.item(9).innerText = apps.item(8).firstChild.nodeValue;
                ps.item(10).innerText = apps.item(9).firstChild.nodeValue;
                buttons.item(1).innerText = util.item(0).firstChild.nodeValue;

                hTitles.item(2).innerText = apps.item(10).firstChild.nodeValue;
                hSubTles.item(2).innerText = apps.item(11).firstChild.nodeValue;
                ps.item(11).innerText = apps.item(12).firstChild.nodeValue;
                ps.item(12).innerText = apps.item(13).firstChild.nodeValue;
                buttons.item(2).innerText = util.item(0).firstChild.nodeValue;

                hTitles.item(3).innerText = apps.item(14).firstChild.nodeValue;
                hSubTles.item(3).innerText = apps.item(15).firstChild.nodeValue;
                ps.item(13).innerText = apps.item(16).firstChild.nodeValue;
                buttons.item(3).innerText = util.item(0).firstChild.nodeValue;

                hTitles.item(4).innerText = apps.item(17).firstChild.nodeValue;
                hSubTles.item(4).innerText = apps.item(18).firstChild.nodeValue;
                ps.item(14).innerText = apps.item(19).firstChild.nodeValue;
                ps.item(15).innerText = apps.item(20).firstChild.nodeValue; 
                buttons.item(4).innerText = util.item(0).firstChild.nodeValue;

                hTitles.item(5).innerText = apps.item(21).firstChild.nodeValue;
                hSubTles.item(5).innerText = apps.item(22).firstChild.nodeValue;
                ps.item(16).innerText = apps.item(23).firstChild.nodeValue;
                ps.item(17).innerText = apps.item(24).firstChild.nodeValue;
                ps.item(18).innerText = apps.item(25).firstChild.nodeValue; 
                buttons.item(5).innerText = util.item(0).firstChild.nodeValue;

                hTitles.item(6).innerText = apps.item(26).firstChild.nodeValue;
                hSubTles.item(6).innerText = apps.item(27).firstChild.nodeValue;
                ps.item(19).innerText = apps.item(28).firstChild.nodeValue;
                buttons.item(6).innerText = util.item(0).firstChild.nodeValue;

                hTitles.item(7).innerText = apps.item(29).firstChild.nodeValue;
                hSubTles.item(7).innerText = apps.item(30).firstChild.nodeValue;
                ps.item(20).innerText = apps.item(31).firstChild.nodeValue;
                buttons.item(7).innerText = util.item(0).firstChild.nodeValue;

                hTitles.item(8).innerText = apps.item(32).firstChild.nodeValue;
                hSubTles.item(8).innerText = apps.item(33).firstChild.nodeValue;
                ps.item(21).innerText = apps.item(34).firstChild.nodeValue;
                ps.item(22).innerText = apps.item(35).firstChild.nodeValue;
                buttons.item(8).innerText = util.item(0).firstChild.nodeValue; 

                hTitles.item(9).innerText = apps.item(36).firstChild.nodeValue;
                hSubTles.item(9).innerText = apps.item(37).firstChild.nodeValue;
                ps.item(23).innerText = apps.item(38).firstChild.nodeValue;
                ps.item(24).innerText = apps.item(39).firstChild.nodeValue; 
                buttons.item(9).innerText = util.item(0).firstChild.nodeValue; 
            }
        }
    }
    ajax.open("GET", lan, true);
    ajax.send();
}

(function() { idioma("/lan/ES.xml"); })();

const bLan = document.getElementsByClassName("button").item(0);

bLan.addEventListener('click', function click() {
    if(bLan.innerText == "Español") {
        idioma("/lan/ES.xml");
    }else { idioma("/lan/EN.xml"); }
});