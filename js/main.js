window.onload = function () {
    let countryData;
    const yourCountry = document.createElement("h2");
    document.body.insertBefore(yourCountry, document.getElementById("select"));

    const getCountry = () => {
        fetch("https://api.country.is")
            .then(response => response.json())
            .then(data => {
                countryData = data.country;
                yourCountry.textContent = 'Your country is ' + countryData;
                console.log(countryData);
                
                fetch(`http://api.mediastack.com/v1/news?access_key=0317afbadd7773a166518d6c1e842e47&countries=${countryData}`)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data);
                    })
                    .catch(error => {
                        console.error(error);
                    });
                
                const selectElement = document.getElementById("select");
                selectElement.addEventListener("change", (event) => {
                    countryData = event.target.value;
                    yourCountry.textContent = 'Your country is ' + countryData;
                    console.log(countryData);

                    fetch(`http://api.mediastack.com/v1/news?access_key=0317afbadd7773a166518d6c1e842e47&countries=${countryData}`)
                        .then(response => response.json())
                        .then(data => {
                            console.log(data);
                        })
                        .catch(error => {
                            console.error(error);
                        });
                });
            })
            .catch(err => {
                console.error(err.message);
            });
    };
    getCountry();
};
