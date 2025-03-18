document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loadingWindow").style.display = "block";
    
    let progress = document.querySelector(".progress");
    let width = 0;

    let interval = setInterval(function () {
        width += 10;
        progress.style.width = width + "%";

        if (width >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                document.getElementById("loadingWindow").style.display = "none";
                document.getElementById("weatherWindow").style.display = "block";
            }, 500);
        }
    }, 500);
});

function checkWeather() {
    let location = document.getElementById("location").value;
    
    if (!location.trim()) {
        return;
    }

    let randomResponses = [
        "Idk, just look outside.",
        "It's raining cats and dogs... or maybe just cats.",
        "100% chance of... I don't know, weather?",
        "AI is confused. Try later.",
        "Why do you need AI? Just open a window!"
    ];

    let randomIndex = Math.floor(Math.random() * randomResponses.length);
    
    document.getElementById("alertMessage").innerText = randomResponses[randomIndex];
    document.getElementById("alertBox").style.display = "block";
}

function closeAlert() {
    document.getElementById("alertBox").style.display = "none";
}
