const activeClass = "active";

export default function initTabNav() {
  const tabMenu = document.querySelectorAll("[data-tab='menu'] li");
  const tabContent = document.querySelectorAll("[data-tab='content'] section");

  if (tabMenu.length && tabContent.length) {
    //checking if tabMenu and tabContent exists to avoid errors.
    tabContent[0].classList.add(activeClass);

    function activeContent(index) {

      console.log(index)

      tabContent.forEach((content) => content.classList.remove(activeClass));

      const animeDirection = tabContent[index].dataset.anime
      console.log(animeDirection)

      tabContent[index].classList.add(activeClass, animeDirection);
    }

    tabMenu.forEach((item, index) =>item.addEventListener("click", () => activeContent(index)));
  }
}

