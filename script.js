const submitBtn = document.getElementById("submitBtn");
const loadingScreen = document.getElementById("loadingScreen");
const checkmark = document.getElementById("checkmarkContainer");
const finalForm = document.getElementById("finalForm");

submitBtn.addEventListener("click", () => {

    // Show loading
    loadingScreen.classList.remove("hidden");

    // Step 1: Show verifying for 5 seconds
    setTimeout(() => {
        loadingScreen.classList.add("hidden");
        checkmark.classList.remove("hidden");

        // Step 2: Hide checkmark after animation
        setTimeout(() => {
            checkmark.classList.add("hidden");

            // Step 3: Show final form
            finalForm.classList.remove("hidden");

        }, 2000); // checkmark displays for 2 seconds
        
    }, 5000); // verifying for 5 seconds
});

const notification = document.getElementById("notification");

// Random usernames AI-created
const usernames = [
    "SABGAGGOD124",
    "TungTungTung_12",
    "GrowAGardenMaster47",
    "Meowel_sab16",
    "MrBrainrot145",
    "GAGRacoon1",
    "StealABrainrot123",
    "FreeTungSahur4",
    "MutatedNoobini23",
    "Noobini_pizzanini12"
];

// Random flag emojis
const flags = ["🇺🇸","🇬🇧","🇫🇷","🇩🇪","🇮🇹","🇨🇦","🇦🇺","🇧🇷","🇯🇵","🇪🇸","🇲🇽","🇮🇳"];

function showNotification() {
    let user = usernames[Math.floor(Math.random() * usernames.length)];
    let flag = flags[Math.floor(Math.random() * flags.length)];

    notification.innerHTML = `User <strong>${user}</strong> Claimed! ${flag}`;

    // Slide in
    notification.classList.add("show");
    notification.classList.remove("hidden");

    // Fade + slide out after 2 seconds
    setTimeout(() => {
        notification.classList.remove("show");
        notification.classList.add("hidden");
    }, 2000);
}

