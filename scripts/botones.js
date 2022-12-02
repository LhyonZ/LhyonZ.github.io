(function() {
    'use-strict'

    const bHome = document.getElementsByTagName('li')[0];
    const bCommands = document.getElementsByTagName('li')[1];
    const bStore = document.getElementsByTagName('li')[2];
    const bApps = document.getElementsByTagName('li')[3];

    bHome.addEventListener('click', function() {
        window.location.href = '/views/Inicio.html';
    });

    bCommands.addEventListener('click', function() {
        window.location.href = '/views/Comandos.html';
    });

    bStore.addEventListener('click', function() {
        window.location.href = '/views/Store.html';
    });

    bApps.addEventListener('click', function() {
        window.location.href = '/views/Apps.html';
    });
})();