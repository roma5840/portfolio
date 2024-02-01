function redirect(pageName) {
    var currentUrl = window.location.href;
    currentUrl = currentUrl.replace(/\/[^\/]+$/, '');
    if (currentUrl.indexOf(pageName) === -1) {
        if (currentUrl.charAt(currentUrl.length - 1) !== '/') {
            currentUrl += '/';
        }
        var newUrl = currentUrl + pageName;
        window.location.href = newUrl;
    }
}