import React from 'react'
import { useState } from 'react';
import { AddCategory } from './AddCategory';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'One punch', 'GohstBusters' ])

  const onAddCategory = (newCategory) => {
    console.log(newCategory)

    const lowCategories = categories.map( cat => cat.toLowerCase()) //en esta linea pasamos todos los nombres a minúsculas para comparar con la nueva categoria y ver si hay duplicados

      if( lowCategories.includes(newCategory.toLowerCase()) ) return
        // if( inputValue.trim().length <= 1 ) return //en esta linea controlamos que la longitud del nombre no sea menor a un caracter o realicen busquedas vacias
        setCategories( [ ...categories, newCategory ] )   
        // setCategories( cat => [...cat, newCategory] )
  }

  return (
    <>
      {/* Título */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory 
            //  setCategories={setCategories} Esta fue la primer forma. Ahora la idea es que el componente sea reutilizable
        onNewCategory={ onAddCategory }
      />

      {/* Listado de gif */}
      <ol>
        {
          categories.map( categorie => {
            return <li key={categorie} > { categorie } </li>
          } )
        }
      </ol>
        {/* gif item */}

    </>
  )
}
