import { getGifs } from "../helpers/getGifs"
import { useEffect, useState } from "react";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ( {category}  ) => {

    const [images, setImages] = useState([]);

    const getImages = async ()=> {
        const newImages = await getGifs( category )
        setImages( newImages )
    }

    useEffect(() => {
        
        getImages()
      
    }, []);


  return (
    <>
        <h3>{ category }</h3>

        <div>
            {
                images.map( (image) => ( 
                    <GifGridItem 
                        key={image.id} 
                       { ...image } //una forma diferente de desestructurar y enviar todas las props al componente hijo
                    />
                ))
            }
        </div>

    </>
  )
}
