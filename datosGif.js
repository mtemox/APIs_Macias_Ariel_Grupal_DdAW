const obtenerGifs = async () => {

    const gifsContainers = document.getElementById('gifs');
    const gifTemplate = document.getElementById('gif'); 

    const requestGif = await fetch("https://api.giphy.com/v1/gifs/trending?api_key=lerx9FDWD5PH78M207Cj95ac4KTt8G3v"); 

    const respuestaGifs = await requestGif.json();

    respuestaGifs.data.slice(0, 8).forEach(gif => {
        const newGifCard = gifTemplate.cloneNode(true);
        const img = newGifCard.querySelector('img');
        img.src = gif.images.original.url; 
        gifsContainers.appendChild(newGifCard);
    });
    gifTemplate.remove();
};

obtenerGifs();