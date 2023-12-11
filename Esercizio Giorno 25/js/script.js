// Example https://www.pexels.com/

fetch('https://api.pexels.com/v1/search?query=cat', {
        method: 'GET', 
        headers: {
            Authorization: 'ApiKey'
        }
    })
    .then(response => response.json())
    .then(json => {
        let ul = document.querySelector('#photo');
        json.photos.forEach(photo => {
             //photo.src.small
            let li = document.createElement('li');
            li.className = 'list-group-item';
            let img = document.createElement('img');
            img.src = photo.src.small;
            img.alt = photo.alt;
            li.appendChild(img);
            ul.appendChild(li);
        })
    })
    .catch(error => console.log(error))


