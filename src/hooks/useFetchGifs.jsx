import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifGridItem } from "../components/GifGridItem";

export const useFetchGifs = ( category ) => {

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

         <div className="cardGrid">
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

  return {
    images,
    isLoading: true
  }
}
