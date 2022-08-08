export const getGifs = async (category) => {
    
    //const url = `https://api.giphy.com/v1/gifs/search?api_key=wxEo17gawbUpUFeLBTjkgUAcC0UvWeqi&q=${category}&limit=20`

    const URL = `https://api.giphy.com/v1/gifs/search?api_key=1FUD47aG8FkYMv32V60OwUhXyMiJnpX9&q=${category}&limit=20`
   
    const resp = await fetch( URL )

    const { data } = await resp.json()

    const gifs = data.map( img => ( { 
        img :img.id,
        title :img.title,
        url :img.images.downsized_medium.url
     } ) )

    console.log(gifs)
    return gifs

}