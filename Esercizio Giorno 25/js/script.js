// Example https://www.pexels.com/

const apiKey = 'apyKey';
let search = '';
// Soluzione Esercizio

document.addEventListener('DOMContentLoaded', () => {
    let page = document.location.pathname.split('/');
    if(page[2] === 'pexels-start.html'){
        let params = new URLSearchParams(document.location.search);
        if(params.get("search") !== undefined) {
            getPhotos(params.get("search"), 1, 15 ) 
        }
        document
            .querySelector('main section.jumbotron button.btn-primary')
            .addEventListener('click', () => { getPhotos('cat', 1, 15 ) });
        document
            .querySelector('main section.jumbotron button.btn-secondary')
            .addEventListener('click', () => { getPhotos('dog', 1, 15 ) });
        document
            .querySelector('main section.jumbotron button.btn-dark')
            .addEventListener('click', () => { 
                let input = document.querySelector('main section.jumbotron input');
                getPhotos(input.value, 1, 15 ) 
                input.value = '';
            });
    } else if (page[2] === 'dettaglio.html') {

        let params = new URLSearchParams(document.location.search);
        let id = params.get("id");
        search = params.get("search");
        getPhotoById(id);
        
    }

})

function getPhotos(query, page = 1, size = 15 ) {
    let url = `https://api.pexels.com/v1/search/?page=${page}&per_page=${size}&query=${query}`;
    fetch(url, {
        method: 'GET', 
        headers: { Authorization: apiKey }
    })
    .then(response => response.json())
    .then(json => {
        //console.log(json)
        createPhotosCard(json.photos);
    })
    .catch(error => console.log(error))
}

function getPhotoById(id) {
    let url = `https://api.pexels.com/v1/photos/${id}`;
    fetch(url, {
        method: 'GET', 
        headers: { Authorization: apiKey }
    })
    .then(response => response.json())
    .then(json => {
        //console.log(json)
        createDettaglio(json)
    })
    .catch(error => console.log(error))
}

function createDettaglio(data) {
    console.log(data)
    let section = document.querySelector('main section.jumbotron');
    let dettaglio = `
        <div class="container">
            <h1 class="jumbotron-heading">${data.photographer}</h1>
            <p class="lead text-muted">
                <img
                src="${data.src.medium}"
                class="bd-placeholder-img card-img-top"
                />
            </p>
            <p> ${data.alt} </p>
            <p> <a href="${data.photographer_url}"> ${data.photographer} </a> </p>
        </div>`;
    section.innerHTML = dettaglio;
    // <button type="button" class="btn btn-warning">Back</button>
    let btn = document.createElement('a');
    btn.className = 'btn btn-warning my-5 w-25';
    btn.innerText = 'Back';
    btn.href = 'pexels-start.html?search='+search;
    section.appendChild(btn);
}

function createPhotosCard(data) {
    console.log(data);
    let album = document.querySelector('div.album div.row');
    album.addEventListener('click', (e) => { 
        console.log(e.target);
        if(e.target.innerText === 'Hide'){
            let card = e.target.parentNode.parentNode.parentNode.parentNode.parentNode;
            album.removeChild(card);
        } else if(e.target.innerText === 'View'){
            console.log("Dettaglio")
        }
    })
    album.innerHTML = '';
    data.forEach(photo => {
        console.log(photo)
        let card = `
            <div class="col-md-4">
                <div class="card mb-4 shadow-sm">
                    <a href="dettaglio.html?id=${photo.id}&search=cat">
                        <img src="${photo.src.portrait}" class="bd-placeholder-img card-img-top" alt="${photo.alt}" />
                    </a>
                    <div class="card-body">
                        <h5 class="card-title">${photo.photographer}</h5>
                        <p class="card-text">
                            ${photo.alt}
                        </p>
                        <div class="d-flex justify-content-between align-items-center" >
                            <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary" > View </button>
                                <button type="button" class="btn btn-sm btn-outline-secondary" > Hide </button>
                            </div>
                            <small class="text-muted">${photo.id}</small>
                        </div>
                    </div>
                </div>
            </div>
        `;
        album.innerHTML += card;
    })
}
