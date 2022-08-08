

export const GifGridItem = ( { title, url } ) => {
  return (
    <div className="cardItem">
        <img src={ url } alt={ title } />
        <p>{title}</p>
    </div>
  )
}
