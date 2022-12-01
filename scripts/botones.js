(function() {
    'use-strict'

    const bHome = document.getElementsByTagName('li')[0];
    const bCommands = document.getElementsByTagName('li')[1];
    const bStore = document.getElementsByTagName('li')[2];
    const bApps = document.getElementsByTagName('li')[3];

    bHome.addEventListener('click', function() {
        window.location.href = '/';
    });

    bCommands.addEventListener('click', function() {
        window.location.href = '/commands';
    });

    bStore.addEventListener('click', function() {
        window.location.href = '/store';
    });

    bApps.addEventListener('click', function() {
        window.location.href = '/apps';
    });
})();