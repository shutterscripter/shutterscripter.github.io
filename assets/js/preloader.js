// Preloader management
class PreloaderManager {
  constructor() {
    this.preloader = document.getElementById("preloader");
    this.progressBar = document.querySelector(".progress-bar");
    this.loadingSteps = 0;
    this.totalSteps = 5; // Adjust based on loading steps
    this.isComplete = false;
  }

  updateProgress(step) {
    this.loadingSteps = Math.min(step, this.totalSteps);
    const percentage = (this.loadingSteps / this.totalSteps) * 100;
    this.progressBar.style.width = `${percentage}%`;
    this.progressBar.style.opacity = "1";
  }

  complete() {
    if (this.isComplete) return;
    this.isComplete = true;

    // Ensure we're at 100%
    this.updateProgress(this.totalSteps);

    // Wait a moment then start the reveal
    setTimeout(() => {
      // Fade out preloader
      this.preloader.classList.add("fade-out");

      // Fade in main content
      document.body.classList.remove("loading");
      document.body.classList.add("loaded");

      // Remove preloader from DOM after animation
      setTimeout(() => {
        this.preloader.style.display = "none";
      }, 1000);
    }, 1500);
  }
}

// Initialize preloader when DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  const preloader = new PreloaderManager();

  // Simulate loading steps
  preloader.updateProgress(1);

  // Step 2: Fonts loaded
  document.fonts.ready.then(() => {
    preloader.updateProgress(2);
  });

  // Step 3: Images loading simulation
  setTimeout(() => {
    preloader.updateProgress(3);
  }, 500);

  // Step 4: Additional resources
  setTimeout(() => {
    preloader.updateProgress(4);
  }, 1000);

  // Step 5: Complete
  window.addEventListener("load", () => {
    preloader.updateProgress(5);
    setTimeout(() => {
      preloader.complete();
    }, 500);
  });
});
