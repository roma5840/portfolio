function redirect(pageName) {
    var currentUrl = new URL(window.location.href);
    currentUrl.pathname = '/portfolio/';
    var newUrl = currentUrl.href + pageName;
    window.location.href = newUrl;
}

function home() {
    var currentUrl = new URL(window.location.href);
    currentUrl.pathname = '/portfolio/';
    window.location.href = currentUrl.href;
}