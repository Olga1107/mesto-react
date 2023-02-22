import { useEffect, useState } from 'react'
import { api } from '../utils/Api'

import Card from './Card'

function Main(props) {

const [usersData, setUsersData] = useState({})
const [cards, setCards] = useState([])

useEffect(() => {
  Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([users, cardData]) => {
    setUsersData(users);
    setCards(cardData.reverse());
  })
  .catch((err) => {
    console.log(`Ошибка: ${err}`);
});}, [])

return (
  <main>
    <section className="profile">
      <div className="profile__information">
         <div className="overlay" onClick={props.onEditAvatar}>
           <img src={usersData.avatar} alt="Фотография Жак-Ив Кусто в красной шапке" className="profile__photo" />
         </div>
         <div className="profile__title">
           <h1 className="profile__name" >{usersData.name}</h1>
           <p className="profile__profession" >{usersData.about}</p>
         </div>
         <button type="button" className="profile__edit-button" aria-label="Редактировать информацию профиля" onClick={props.onEditProfile}></button>
       </div>
       <button type="button" className="profile__add-button" name="add-button" aria-label="Добавить карточку с фото" onClick={props.onAddPlace}></button>
    </section>
    <section className="photo-gallery">
    {cards.map((cardData)=> (
      <Card
        key={cardData._id}
        card={cardData}
        link={cardData.link}
        name={cardData.name}
        onCardClick={handleCardClick}
      />
    ))}
    </section>
  </main>
  )

  function handleCardClick (card) {
    props.setSelectedCard({
    isOpen: true,
    link: card.link,
    name: card.name
    })
  }
}

export default Main