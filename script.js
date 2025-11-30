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
