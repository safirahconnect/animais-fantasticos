export default function initSmoothScroll() {
  const internalLinks = document.querySelectorAll("[data-menu='smooth'] a[href^='#'");

  function activeSmoothScroll(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const section = document.querySelector(href);

    //first option - 96.73% of usage
    /*
  window.scrollTo({
    top: section.offsetTop,
    behavior: "smooth",
  });*/

    //second option - 97.82% of usage
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  internalLinks.forEach((link) => {link.addEventListener("click", activeSmoothScroll);});
}
