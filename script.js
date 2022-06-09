setInterval(script(), 1000);

function script()
{
    if (window.location.hostname == sessionStorage.getItem("link"))
    {
        let interval = sessionStorage.getItem("interval");
        setTimeout(() => window.location.reload(), interval);
    }
}