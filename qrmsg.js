function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
document.addEventListener(
    "DOMContentLoaded", async function (event) {
    var hash = location.hash.replace("#", "");
    if (hash == "542682682671425983496170299327846139320006572014088004853299981082597329525262038170730673351778672031929510766640001197621342594681362642852685015852317683042815355513512111948063992085192687842853333298270282")
    {
        location.hash = "";
        var qrmsg = document.getElementById("qrmsg");
        qrmsg.innerHTML = "Nice QR code, innit?";
        qrmsg.classList.toggle("u-hide");
        await sleep(2000);
        qrmsg.classList.toggle("u-hide");
    }
})
