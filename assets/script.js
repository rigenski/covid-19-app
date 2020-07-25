// const searchCountry = () => {
//     let inputKeyword = document.getElementById('input-keyword')
//     const regency = document.getElementById('title-regency');
//     const endPoint = 'https://api.covid19api.com/summary';

//     inputKeyword.addEventListener("keyup", async () => {
//         try {
//             const req = await fetch(endPoint)
//             const res = await req.json();
//             res.Search.forEach(covid => {
                
//                 for(let i in covid.list_data){
//                     console.log(`${covid.list_data[i].key}`);
//                     }
//             })
//         } catch(error) {
//             console.log(error);
//         }
//     })
// }; 

const reqApi = async () => {
    const endPoint = 'https://api.covid19api.com/summary';
    let positif = document.getElementById('positif');
    let newPositif = document.getElementById('newPositif');
    let sembuh = document.getElementById('sembuh');
    let newSembuh = document.getElementById('newSembuh')
    let meninggal = document.getElementById('meninggal');
    let newMeninggal = document.getElementById('newMeninggal')

    try{
        const req = await fetch(endPoint);
        const res = await req.json();

        positif.innerHTML = res.Global.TotalConfirmed;
        newPositif.innerHTML = `<p class="card-text">+${res.Global.NewConfirmed}</p>`
        sembuh.innerHTML = res.Global.TotalRecovered;
        newSembuh.innerHTML = `<p class="card-text">+${res.Global.NewRecovered}</p>`
        meninggal.innerHTML = res.Global.TotalDeaths;
        newMeninggal.innerHTML = `<p class="card-text">+${res.Global.NewDeaths}</p>`

    } catch (err) {
        console.log(err);
    }
}

reqApi()