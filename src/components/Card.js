function Card (props) {
return(
<div className="photo-gallery__card">
  <img alt="Изображение" className="photo-gallery__image" src={props.card.link} onClick={handleClick} />
  <div className="photo-gallery__caption">
    <h2 className="photo-gallery__title" >{props.card.name}</h2>
    <div className="like-container">
      <button type="button" className="photo-gallery__like-button" aria-label="Сердечко для лайка"></button>
      <span className="number-of-likes">0</span>
    </div>
  </div>
  <button type="button" className="photo-gallery__remove-button" aria-label="Значок удалить в виде корзины"></button>
</div>
    )

  function handleClick() {
      props.onCardClick(props.card);
    } 
}

export default Card