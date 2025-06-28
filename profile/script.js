var typed = new Typed(".typed-text", {
  strings: [
    " Một Sinh viên CNTT",
    "Web Developer",
    "Một Người Yêu công nghệ",
    "Người Thích sáng tạo",
  ],
  typeSpeed: 50,
  backSpeed: 25,
  backDelay: 1500,
  loop: true,
});

particlesJS("particles-js", {
  particles: {
    number: {
      value: 80,
      density: { enable: true, value_area: 800 },
    },
    color: { value: "#b74b4b" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
    },
    opacity: {
      value: 0.6,
      random: false,
      anim: { enable: false },
    },
    size: {
      value: 4,
      random: true,
      anim: { enable: false },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#b74b4b",
      opacity: 0.2,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      bounce: false,
      attract: { enable: false },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: false },
      resize: true,
    },
    modes: {
      grab: { distance: 140, line_linked: { opacity: 0.4 } },
    },
  },
  retina_detect: true,
});

// Active on click
const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((l) => l.classList.remove("active"));
    this.classList.add("active");
  });
});

// Active khi scroll
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.offsetHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});
const scrollBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

ScrollReveal().reveal(".scroll-reveal", {
  scale: 0.8, // Thu nhỏ lúc đầu
  opacity: 0, // Ẩn lúc đầu
  duration: 1000, // Thời gian hiệu ứng (ms)
  easing: "ease-in-out",
  interval: 150, // Delay giữa các thẻ
  reset: false, // Nếu muốn chỉ zoom 1 lần
});

document.addEventListener("DOMContentLoaded", function () {
  const zoomCards = document.querySelectorAll(".zoom-in");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = "running";
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  zoomCards.forEach((el) => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", () => {
  const progressBars = document.querySelectorAll(".progress-fill");

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const percent = entry.target.getAttribute("data-percent");
          entry.target.style.width = percent + "%";
          obs.unobserve(entry.target); // chỉ chạy 1 lần
        }
      });
    },
    {
      threshold: 0.4,
    }
  );

  progressBars.forEach((bar) => observer.observe(bar));
});

const slides = document.querySelectorAll(".project-slide");
const current = document.querySelector(".carousel-indicator .current");
const total = document.querySelector(".carousel-indicator .total");
const prevBtn = document.getElementById("prevSlide");
const nextBtn = document.getElementById("nextSlide");

let index = 0;
total.textContent = slides.length.toString().padStart(2, "0");

function showSlide(i) {
  slides.forEach((s, idx) => s.classList.toggle("active", idx === i));
  current.textContent = (i + 1).toString().padStart(2, "0");

  // Reset gallery inside the shown slide
  const gallery = slides[i].querySelector(".project-gallery");
  if (gallery) {
    const images = gallery.querySelectorAll("img");
    images.forEach((img) => img.classList.remove("active"));
    if (images.length > 0) {
      images[0].classList.add("active");
    }
  }
}

prevBtn.onclick = () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
};

nextBtn.onclick = () => {
  index = (index + 1) % slides.length;
  showSlide(index);
};

showSlide(index);

// Gallery switch without slide animation
function scrollGallery(button, direction) {
  const container = button.closest(".project-gallery-container");
  const gallery = container.querySelector(".project-gallery");
  const images = gallery.querySelectorAll("img");

  let currentIndex = [...images].findIndex((img) =>
    img.classList.contains("active")
  );
  if (currentIndex === -1) currentIndex = 0;

  images[currentIndex].classList.remove("active");

  let nextIndex = currentIndex + direction;
  if (nextIndex < 0) nextIndex = images.length - 1;
  if (nextIndex >= images.length) nextIndex = 0;

  images[nextIndex].classList.add("active");
}
