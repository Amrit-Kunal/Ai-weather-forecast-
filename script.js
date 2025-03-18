function checkWeather() {
    let location = document.getElementById("location").value;
    let result = document.getElementById("result");

    if (location.trim() === "") {
        result.innerText = "Please enter a location!";
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
    alert(randomResponses[randomIndex]);
}
