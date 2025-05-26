document.addEventListener("DOMContentLoaded", function() {
      const buttons = document.querySelectorAll("nav button");
      const sections = document.querySelectorAll("section");

      function clearActive() {
        buttons.forEach(btn => btn.classList.remove("active"));
        sections.forEach(sec => sec.classList.remove("active"));
      }

      buttons.forEach(button => {
        button.addEventListener("click", () => {
          clearActive();
          button.classList.add("active");
          const className = button.classList[0];
          const sectionToShow = document.querySelector("section." + className);
          if (sectionToShow) {
            sectionToShow.classList.add("active");
          }
        });
      });
    });