import { useState } from 'react';

import '../index.css';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState({})

  function handleEditAvatarClick () {
    setIsEditAvatarPopupOpen(true)
  }

  function handleEditProfileClick () {
    setIsEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick () {
    setIsAddPlacePopupOpen(true)
  }

  function closeAllPopup () {
    setIsEditAvatarPopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setSelectedCard({isOpen: false})
  }

  return (
    <div className="page">

      <Header />

      <Main 
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        setSelectedCard={setSelectedCard}
      />

      <Footer />

      <ImagePopup 
        card={selectedCard}
        isOpen={selectedCard.isOpen}
        onClose={closeAllPopup}
      />

      <PopupWithForm 
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopup}
        name="edit" 
        title="Редактировать профиль" 
        buttonTitle="Сохранить" 
        label="Закрыть окно редактирования без сохранения"
        children={
          <>
            <input type="text" name="name" placeholder="Имя" className="popup__input popup__input_data_name" defaultValue="" id="firstname" required minLength="2" maxLength="40" />
            <span className="popup__error" id="firstname-error"></span>
            <input type="text" name="about" placeholder="О себе" className="popup__input popup__input_data_description" defaultValue="" id="aboutself" required minLength="2" maxLength="200" />
            <span className="popup__error" id="aboutself-error"></span>
          </>
        }
      />

      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopup}
        name="add"
        title="Новое место"
        buttonTitle="Создать"
        label="Закрыть окно добавления карточки без сохранения"
        children={
          <>
            <input type="text" name="name" placeholder="Название" className="popup__input popup__input_data_place-name" defaultValue="" id="placename" required minLength="2" maxLength="30" />
            <span className="popup__error" id="placename-error"></span>
            <input type="url" name="link" placeholder="Ссылка на картинку" className="popup__input popup__input_data_url-on-picture" defaultValue="" id="urlonpicture" required />
            <span className="popup__error" id="urlonpicture-error"></span>
          </>
        }
      />

      <PopupWithForm
        onClose={closeAllPopup}
        name="confirmation"
        title="Вы уверены?"
        buttonTitle="Да"
        label="Закрыть окно без удаления"
      />

      <PopupWithForm
        onClose={closeAllPopup}
        isOpen={isEditAvatarPopupOpen}
        name="avatar"
        title="Обновить аватар"
        buttonTitle="Создать"
        label="Закрыть окно редактирования аватара без сохранения"
        children={
          <>
            <input type="url" name="link" placeholder="Ссылка на картинку" className="popup__input popup__input_data_avatar" defaultValue="" id="avatar" required />
            <span className="popup__error" id="avatar-error"></span>
          </>
        }
      />
      
    </div>
  );
}

export default App;
