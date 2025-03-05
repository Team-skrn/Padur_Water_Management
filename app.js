let deferredPrompt;

window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredPrompt = event;

    // Show install button on all pages
    document.querySelectorAll(".installButton").forEach((button) => {
        button.style.display = "block";
        button.addEventListener("click", async () => {
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            if (outcome === "accepted") {
                console.log("User installed the app");
                button.style.display = "none"; // Hide after install
            }
            deferredPrompt = null;
        });
    });
});

// Detect if app is already installed
window.addEventListener("appinstalled", () => {
    console.log("PWA was installed");
    document.querySelectorAll(".installButton").forEach((button) => {
        button.style.display = "none"; // Hide install button after installation
    });
});
