export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?limit=10&q=${encodeURI(category)}&api_key=mr7uie4eHh3vh4Rro0mCpXLuZ8u1aKzY`

    const respuesta = await fetch( url );

    const {data} = await respuesta.json();

    const gifs = data.map(img => {
        return {
            id:img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
   return gifs
}
