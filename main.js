<script>
  // *** Background Music Code Removed ***
  // The background music initialization and toggle code referencing bgMusic has been removed.

  // Dark/Light Mode Toggle
  const modeToggle = document.getElementById("modeToggle");
  modeToggle.addEventListener("click", function() {
    document.body.classList.toggle("light-mode");
    modeToggle.innerHTML = document.body.classList.contains("light-mode") ? "&#9790;" : "☀";
  });

  // Extended Typewriter Animation
  (function () {
    const codeLines = [
      'const arlo = new DiscordBot();',
      'arlo.initialize({ economy: true, shop: true });',
      'if(user.balance > 1000){',
      '    console.log("Top spender unlocked premium rewards!");',
      '} else {',
      '    console.log("Keep climbing the leaderboard!");',
      '}',
      'arlo.startDailyRewards();',
      'console.log("Welcome to the Arlo experience!");'
    ];
    const container = document.getElementById("codeAnimation");
    const typingSpeed = 80;
    const deletingSpeed = 40;
    const pauseAfterTyping = 1500;
    const pauseAfterDeleting = 500;
    let lineIndex = 0, charIndex = 0;
    let currentLine = "";
    let isDeleting = false;
    function typeWriter() {
      const fullText = codeLines[lineIndex];
      if (!isDeleting) {
        currentLine = fullText.substring(0, charIndex + 1);
        charIndex++;
        container.textContent = currentLine;
        if (charIndex === fullText.length) {
          setTimeout(() => { isDeleting = true; typeWriter(); }, pauseAfterTyping);
          return;
        }
      } else {
        currentLine = fullText.substring(0, charIndex - 1);
        charIndex--;
        container.textContent = currentLine;
        if (charIndex === 0) {
          isDeleting = false;
          lineIndex = (lineIndex + 1) % codeLines.length;
          setTimeout(typeWriter, pauseAfterDeleting);
          return;
        }
      }
      setTimeout(typeWriter, isDeleting ? deletingSpeed : typingSpeed);
    }
    typeWriter();
  })();

  // Back to Top Button
  const backToTopBtn = document.getElementById("backToTop");
  window.addEventListener("scroll", function () {
    backToTopBtn.style.display = window.pageYOffset > 300 ? "block" : "none";
  });
  backToTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Button Hover Effects
  const buttons = document.querySelectorAll(".button");
  buttons.forEach(function (btn) {
    btn.addEventListener("mouseenter", function () {
      btn.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.4)";
    });
    btn.addEventListener("mouseleave", function () {
      btn.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.3)";
    });
  });

  // Particle Background Animation
  (function () {
    const canvas = document.getElementById("particleCanvas");
    const ctx = canvas.getContext("2d");
    let particlesArray = [];
    const numberOfParticles = 100;
    function initCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", initCanvas);
    initCanvas();
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas.width) this.speedX = -this.speedX;
        if (this.y < 0 || this.y > canvas.height) this.speedY = -this.speedY;
      }
      draw() {
        ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    function initParticles() {
      particlesArray = [];
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    }
    initParticles();
    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesArray.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(animateParticles);
    }
    animateParticles();
  })();

  // Random Tip Modal
  (function () {
    const tips = [
      "Tip: Use !help for assistance with commands.",
      "Did you know? You can play slots with !slots!",
      "Tip: Check your balance with !balance.",
      "Did you know? Upgrade your shop using !upgrade.",
      "Tip: Explore new features with !features."
    ];
    const tipBtn = document.getElementById("randomTipBtn");
    const tipModal = document.getElementById("tipModal");
    const tipText = document.getElementById("tipText");
    const closeTipBtn = document.getElementById("closeTipBtn");
    function showRandomTip() {
      const randomIndex = Math.floor(Math.random() * tips.length);
      tipText.textContent = tips[randomIndex];
      tipModal.style.display = "flex";
    }
    function closeTipModal() {
      tipModal.style.display = "none";
    }
    tipBtn.addEventListener("click", showRandomTip);
    closeTipBtn.addEventListener("click", closeTipModal);
    window.addEventListener("click", function (e) {
      if (e.target === tipModal) {
        closeTipModal();
      }
    });
  })();

  // FAQ Accordion Functionality
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      item.classList.toggle('active');
    });
  });

  // Quote of the Day
  const quotes = [
    "The best way to predict the future is to create it. – Peter Drucker",
    "Innovation distinguishes between a leader and a follower. – Steve Jobs",
    "Do not wait to strike till the iron is hot; but make it hot by striking. – William Butler Yeats",
    "Success is not the key to happiness. Happiness is the key to success. – Albert Schweitzer",
    "The secret of getting ahead is getting started. – Mark Twain"
  ];
  function setQuoteOfTheDay() {
    const quoteEl = document.getElementById("quoteOfTheDay");
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteEl.textContent = quotes[randomIndex];
  }
  setQuoteOfTheDay();

  // Bot Info Panel: Date
  const currentDateEl = document.getElementById("currentDate");
  function updateBotInfo() {
    const now = new Date();
    currentDateEl.textContent = "Date: " + now.toLocaleDateString();
  }
  setInterval(updateBotInfo, 1000);
  updateBotInfo();

  // Real-Time Digital Clock
  function updateClock() {
    const clockEl = document.getElementById("clock");
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    clockEl.textContent = `Current Time: ${hours}:${minutes}:${seconds}`;
  }
  setInterval(updateClock, 1000);
  updateClock();

  // Scroll Fade Animation using IntersectionObserver
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  });
  document.querySelectorAll('.fade-on-scroll').forEach((el) => {
    observer.observe(el);
  });

  // Scroll Progress Bar Functionality
  const progressBar = document.getElementById("progressBar");
  window.addEventListener("scroll", function() {
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = scrollPercent + "%";
  });

  // Fun Fact Modal Functionality
  (function () {
    const funFacts = [
      "Honey never spoils.",
      "Bananas are berries, but strawberries aren't.",
      "A group of flamingos is called a flamboyance.",
      "There are more stars in the universe than grains of sand on Earth.",
      "Octopuses have three hearts."
    ];
    const profileImage = document.querySelector(".profile");
    const funFactModal = document.getElementById("funFactModal");
    const funFactText = document.getElementById("funFactText");
    const closeFunFactBtn = document.getElementById("closeFunFactBtn");
    profileImage.addEventListener("click", function() {
      const randomIndex = Math.floor(Math.random() * funFacts.length);
      funFactText.textContent = funFacts[randomIndex];
      funFactModal.style.display = "flex";
    });
    closeFunFactBtn.addEventListener("click", function() {
      funFactModal.style.display = "none";
    });
    window.addEventListener("click", function (e) {
      if (e.target === funFactModal) {
        funFactModal.style.display = "none";
      }
    });
  })();
</script>
