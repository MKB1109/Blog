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


document.addEventListener("DOMContentLoaded", function() {
  // Get the language switcher button
  var langSwitcher = document.getElementById("lang-switcher");
  
  // Add click event listener
  langSwitcher.addEventListener("click", function() {
    // Get the current URL
    var currentUrl = window.location.href;
    
    // Check if the URL contains "/EN.md/" or "/FR.md/"
    if (currentUrl.includes("/EN.md/")) {
      // Replace "/EN.md/" with "/FR.md/" to switch to French
      var otherUrl = currentUrl.replace("/EN.md/", "/FR.md/");
    } else if (currentUrl.includes("/FR.md/")) {
      // Replace "/FR.md/" with "/EN.md/" to switch to English
      var otherUrl = currentUrl.replace("/FR.md/", "/EN.md/");
    } else {
      // Default to switching to the French version if the language is not detected
      var otherUrl = currentUrl.replace(".md", "-FR.md");
    }
    
    // Redirect to the other language page
    window.location.href = otherUrl;
  });
});

