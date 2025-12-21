document.addEventListener(
    "DOMContentLoaded", async function (event) {
    var calendar = document.getElementById("open-web-calendar");
    const url = new URL(window.location.href);
    const calendarId = url.searchParams.get("gde");
    if (calendarId != null)
    {
        calendar.src += calendarId;
        calendar.src += '_7A%3D%3D';
        // calendar.contentWindow.location.reload();

        // Remove gde from the URL shown in the address bar (no reload)
        url.searchParams.delete("gde");
        // If you want to also drop the trailing "?" when no params remain, URL handles it.
        window.history.replaceState({}, document.title, url.toString());
    }
    else
    {
        calendar.remove();
    }
})
