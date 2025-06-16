(function() {
    'use-strict'
    const bSetUp = document.getElementsByClassName('buttons')[0];
    const bDownload = document.getElementsByClassName('buttons')[1];
    const element = document.getElementsByTagName('a')[0];
    bSetUp.addEventListener('click', function() {
        window.location.href = bSetUp.getAttribute('data-url');
    });
    bDownload.addEventListener('click', function() {
        window.location.href = element.getAttribute('href');
    });
})();