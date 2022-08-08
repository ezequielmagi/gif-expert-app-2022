//import { getGifs } from "../helpers/getGifs"
//import { useEffect, useState } from "react";
//import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from '../hooks/useFetchGifs'

export const GifGrid = ( { category }  ) => {

    const { images, isLoading } = useFetchGifs( category )

    console.log( {images , isLoading} )


}
