let deferredPrompt;

window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredPrompt = event;

    // Ensure button exists before trying to modify it
    const installButton = document.getElementById("installButton");
    if (installButton) {
        installButton.style.display = "block";

        installButton.addEventListener("click", () => {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === "accepted") {
                    console.log("User installed the app");
                }
                deferredPrompt = null;
            });
        });
    }
});

// Ensure button is visible even if event was missed
document.addEventListener("DOMContentLoaded", () => {
    const installButton = document.getElementById("installButton");
    if (installButton) {
        installButton.style.display = "block";
    }
});
