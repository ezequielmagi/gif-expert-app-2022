import React, { useState } from 'react'

export const AddCategory = ( {onNewCategory} ) => {

  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    console.log(e.target.value)
    setInputValue( e.target.value )
  } 

  const handleSubmit = (e) => {
    e.preventDefault()
    if( inputValue.trim().length <= 1 ) return //en esta linea controlamos que la longitud del nombre no sea menor a un caracter o realicen busquedas vacias
    // setCategories( cat => [...cat, newCategory] )
    onNewCategory(inputValue.trim())
    setInputValue('')
  }

  return (
    <form onSubmit={ handleSubmit }>
        <input 
            type="text"
            placeholder='Escriba una categoria'
            value={ inputValue }
            onChange={ handleChange }

        />
        <button>Add Categorie</button>
    </form>
  )
}
