const pages = document.querySelectorAll(".page");
const navItems = document.querySelectorAll(".nav-item");

navItems.forEach(item => {
  item.addEventListener("click", () => {
    // active nav
    navItems.forEach(i => i.classList.remove("active"));
    item.classList.add("active");

    // show page
    const target = item.dataset.target;
    pages.forEach(page => {
      page.classList.remove("active");
      if (page.id === target) {
        page.classList.add("active");
      }
    });
  });
});
