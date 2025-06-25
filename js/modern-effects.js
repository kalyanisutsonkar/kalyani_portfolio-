// Cursor Bubble Effect
class CursorBubble {
  constructor() {
    this.bubbles = [];
    this.maxBubbles = 20;
    this.init();
  }

  init() {
    document.addEventListener("mousemove", (e) => this.createBubble(e));
    document.addEventListener("mouseleave", () => this.clearBubbles());
  }

  createBubble(e) {
    const bubble = document.createElement("div");
    bubble.className = "cursor-bubble";
    document.body.appendChild(bubble);

    const x = e.clientX;
    const y = e.clientY;

    bubble.style.left = `${x}px`;
    bubble.style.top = `${y}px`;

    this.bubbles.push(bubble);

    // Animate bubble
    setTimeout(() => {
      bubble.style.width = "0";
      bubble.style.height = "0";
      bubble.style.opacity = "0";
    }, 50);

    // Remove bubble after animation
    setTimeout(() => {
      if (bubble.parentNode) {
        bubble.parentNode.removeChild(bubble);
      }
      this.bubbles = this.bubbles.filter((b) => b !== bubble);
    }, 300);

    // Limit number of bubbles
    if (this.bubbles.length > this.maxBubbles) {
      const oldestBubble = this.bubbles.shift();
      if (oldestBubble.parentNode) {
        oldestBubble.parentNode.removeChild(oldestBubble);
      }
    }
  }

  clearBubbles() {
    this.bubbles.forEach((bubble) => {
      if (bubble.parentNode) {
        bubble.parentNode.removeChild(bubble);
      }
    });
    this.bubbles = [];
  }
}

// Dark Mode Toggle
class ThemeManager {
  constructor() {
    this.theme = localStorage.getItem("theme") || "light";
    this.init();
  }

  init() {
    // Set initial theme
    document.documentElement.setAttribute("data-theme", this.theme);

    // Create theme toggle button if it doesn't exist
    if (!document.getElementById("theme-toggle")) {
      const toggle = document.createElement("button");
      toggle.id = "theme-toggle";
      toggle.className = "theme-toggle glass";
      toggle.innerHTML = this.theme === "dark" ? "☀️" : "🌙";
      toggle.setAttribute("aria-label", "Toggle dark mode");
      document.body.appendChild(toggle);

      toggle.addEventListener("click", () => this.toggleTheme());
    }
  }

  toggleTheme() {
    this.theme = this.theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", this.theme);
    localStorage.setItem("theme", this.theme);

    const toggle = document.getElementById("theme-toggle");
    if (toggle) {
      toggle.innerHTML = this.theme === "dark" ? "☀️" : "🌙";
    }
  }
}

// Scroll Animations
class ScrollAnimator {
  constructor() {
    this.init();
  }

  init() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    // Observe elements with animation classes
    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });
  }
}

// Initialize all effects
document.addEventListener("DOMContentLoaded", () => {
  new CursorBubble();
  new ThemeManager();
  new ScrollAnimator();
});
