document.addEventListener("DOMContentLoaded", () => {
  fetch("navbar.html")
    .then(r => r.text())
    .then(html => {
      const mount = document.getElementById("navbar");
      if (mount) mount.innerHTML = html;

      const logo = document.querySelector(".logo");

      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              if (entry.target.classList.contains("light-page")) {
                document.body.classList.add("light-mode");
                if (logo) logo.src = "images/ProfilePicLogoTransparent.png";
              } else {
                document.body.classList.remove("light-mode");
                if (logo) logo.src = "images/CaucusFavicon.png";
              }
            }
          });
        },
        { threshold: 0.5 }
      );

      document.querySelectorAll(".page").forEach(sec => observer.observe(sec));

      const navbar = document.querySelector(".navbar-container");
      const eboard = document.getElementById("eboard");

      if (navbar && eboard) {
        const aboutObserver = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              navbar.classList.add("in-eboard");
            } else {
              navbar.classList.remove("in-eboard");
            }
          },
          {
            root: document.querySelector(".snap-container"),
            threshold: 0.7
          }
        );
        aboutObserver.observe(eboard);
      }
    });
});
