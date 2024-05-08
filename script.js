function filterArticles(tag) {
  const articles = document.querySelectorAll(".article");

  articles.forEach((article) => {
    const articleTags = article.dataset.tags.split(",");

    if (articleTags[0].includes(tag)) {
      article.style.display = "block";
    } else {
      article.style.display = "none";
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("about-me-button")
    .addEventListener("click", function () {
      var aboutMeSection = document.getElementById("about-me-popup");

      if (aboutMeSection.style.display !== "block") {
        aboutMeSection.style.display = "block";
      } else {
        aboutMeSection.style.display = "none";
      }
    });

  document
    .getElementById("close-popup-btn")
    .addEventListener("click", function () {
      var aboutMeSection = document.getElementById("about-me-popup");
      aboutMeSection.style.display = "none";
    });

  document.getElementById("menu-btn").addEventListener("click", function () {
    var menu = document.getElementsByClassName("menu")[0];
    if (menu.style.display !== "block") {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  });
});



