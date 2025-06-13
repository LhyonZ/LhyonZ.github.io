(function() {
    'use-strict'
    const bDownload = document.getElementsByClassName('buttons')[0];
    const element = document.getElementsByTagName('a')[0];
    bDownload.addEventListener('click', function() {
        window.location.href = element.getAttribute('href');
    });
})();