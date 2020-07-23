const searchCountry = () => {
    const input = document.getElementById('input-search')
    const country = document.getElementById('title-country');
    const endPoint = 'https://api.covid19api.com/summary';

    input.addEventListener("keyup", async () => {
        try {
            const req = await fetch(endPoint)
            const res = await req.json();
            res.Search.forEach(covid => {
                
                country.innerHTML = 
                `<h1 class="text-center">${covid.Countrie[0].Country}</h1>`;
            })
        } catch(error) {
            console.log(error);
        }
    })
};

searchCountry()