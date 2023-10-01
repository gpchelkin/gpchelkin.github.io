document.addEventListener(
    "DOMContentLoaded", async function (event) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const calendarId = urlParams.get('id')
    // var hash = location.hash.replace("#", "");
    // location.hash = "";
    var calendar = document.getElementById("calendar");
    if (calendarId != null)
    {
        calendar.src += calendarId
        // calendar.contentWindow.location.reload();
    }
    else
    {
        calendar.remove();
    }
})
