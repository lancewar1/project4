window.onload = function () {
    let countryData;
    const yourCountry = document.createElement("h2");
    document.body.insertBefore(yourCountry, document.getElementById("select"));
  
    const newsContainer = document.createElement("div");
    document.body.appendChild(newsContainer);
  yourCountry.classList.add("yourcountry");
  newsContainer.classList.add("articlecontainer");
    const getCountry = () => {
      fetch("https://api.country.is")
        .then((response) => response.json())
        .then((data) => {
          countryData = data.country;
          yourCountry.textContent = "Your country is " + countryData;
          console.log(countryData);
  
          fetch(
            `http://api.mediastack.com/v1/news?access_key=0317afbadd7773a166518d6c1e842e47&countries=${countryData}`
          )
            .then((response) => response.json())
            .then((data) => {
              newsContainer.innerHTML = "";
              for (let i = 0; i < 3; i++) {
                const article = data.data[i];
                console.log(article.title);
                console.log(article.description);
                console.log(article.url);
  
                const articleElement = document.createElement("div");
                const titleElement = document.createElement("h3");
                const descriptionElement = document.createElement("p");
                const urlElement = document.createElement("a");
  
                titleElement.textContent = article.title;
                descriptionElement.textContent = article.description;
                urlElement.textContent = article.url;
                urlElement.setAttribute("href", article.url);
  
                articleElement.appendChild(titleElement);
                articleElement.appendChild(descriptionElement);
                articleElement.appendChild(urlElement);
  
                newsContainer.appendChild(articleElement);
                articleElement.classList.add("article"); 
              }
            })
            .catch((error) => {
              console.error(error);
            });
  
          const selectElement = document.getElementById("select");
          selectElement.addEventListener("click", (event) => {
            countryData = event.target.value;
            yourCountry.textContent = "Your country is " + countryData;
            console.log(countryData);
  
            fetch(
              `http://api.mediastack.com/v1/news?access_key=0317afbadd7773a166518d6c1e842e47&countries=${countryData}`
            )
              .then((response) => response.json())
              .then((data) => {
                newsContainer.innerHTML = "";
              for (let i = 0; i < 3; i++) {
                const article = data.data[i];
                console.log(article.title);
                console.log(article.description);
                console.log(article.url);
  
                const articleElement = document.createElement("div");
                const titleElement = document.createElement("h3");
                const descriptionElement = document.createElement("p");
                const urlElement = document.createElement("a");
  
                titleElement.textContent = article.title;
                descriptionElement.textContent = article.description;
                urlElement.textContent = article.url;
                urlElement.setAttribute("href", article.url);
  
                articleElement.appendChild(titleElement);
                articleElement.appendChild(descriptionElement);
                articleElement.appendChild(urlElement);
  
                newsContainer.appendChild(articleElement);
                articleElement.classList.add("article"); 
              }
              })
              .catch((error) => {
                console.error(error);
              });
          });
          
        })
        .catch((err) => {
          console.error(err.message);
        });
    };
    getCountry();
  };
  