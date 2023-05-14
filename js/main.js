window.onload = function () {
    const getCountry = () => {
        fetch("https://api.country.is")
            .then(response => response.json())
            .then(data => {
                const countryData = data.country;
                console.log(countryData);
                const yourCountry = document.createElement("h2");
                yourCountry.textContent = 'Your country is ' + countryData;
                document.body.appendChild(yourCountry);

                /*fetch(`http://api.mediastack.com/v1/news?access_key=0317afbadd7773a166518d6c1e842e47&countries=${countryData}`)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data);
                    })
                    .catch(error => {
                        console.error(error);
                    });
                    */
            })
            .catch(err => {
                console.error(err.message);
            });
    };
    getCountry();
};