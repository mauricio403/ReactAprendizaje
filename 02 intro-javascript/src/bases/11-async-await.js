//async


const getImage = async() => {

    try {
        
    const apiKey = 'mr7uie4eHh3vh4Rro0mCpXLuZ8u1aKzY';
    const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const {data} = await resp.json();
    const {url} = data.images.original
    const img = document.createElement('img');
    img.src = url;
    
    document.body.append(img)

    console.log(url)

    } catch (error) {
        //manejo del error

        console.error(error)
    }



}

getImage();


// const apiKey = 'mr7uie4eHh3vh4Rro0mCpXLuZ8u1aKzY';


// const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);


// peticion
// .then(res => res.json())
// .then( ({data}) => {
//     const {url} = data.images.original

//     const img = document.createElement('img');
//     img.src = url;

//     document.body.append(img)
// })