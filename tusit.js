document.addEventListener(
    "DOMContentLoaded", async function (event) {
    var calendar = document.getElementById("calendar");
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const calendarId = urlParams.get('id')
    // var hash = location.hash.replace("#", "");
    // location.hash = "";
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
