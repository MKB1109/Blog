function filterArticles(tag) {
    const articlesContainer = document.getElementById('articles-container');
    articlesContainer.innerHTML = ''; // Clear existing articles
    
    // Filter articles based on the selected tag
    const filteredArticles = articles.filter(article => article.tags.includes(tag));
  
    // Display filtered articles
    filteredArticles.forEach(article => {
      const articleElement = document.createElement('div');
      articleElement.classList.add('article');
      articleElement.innerHTML = `
        <h2>${article.title}</h2>
        <p>${article.content}</p>
        <p class="username">Author: ${article.author}</p>
      `;
      articlesContainer.appendChild(articleElement);
    });
  }

  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('about-me-button').addEventListener('click', function() {
        var aboutMeSection = document.getElementById('about-me');
        if (aboutMeSection.style.display === 'none') {
            aboutMeSection.style.display = 'block';
        } else {
            aboutMeSection.style.display = 'none';
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
  // Fetch articles from the database
  fetchArticlesFromDatabase()
    .then(articles => {
      // Display articles on the webpage
      displayArticles(articles);
    })
    .catch(error => {
      console.error("Error fetching articles:", error);
    });
});

function fetchArticlesFromDatabase() {
  // Use Fetch API or AJAX to fetch articles from the database
  // Return a Promise that resolves with the fetched articles
}

function displayArticles(articles) {
  const articleContainer = document.getElementById("articleContainer");

  articles.forEach(article => {
    // Create elements for each article
    const articleElement = document.createElement("div");
    articleElement.classList.add("article");

    const titleElement = document.createElement("h2");
    titleElement.textContent = article.title;

    const textElement = document.createElement("p");
    textElement.textContent = article.text.substring(0, 100); // Display first 100 characters of article text

    // Append elements to article container
    articleElement.appendChild(titleElement);
    articleElement.appendChild(textElement);

    articleContainer.appendChild(articleElement);
  });
}
