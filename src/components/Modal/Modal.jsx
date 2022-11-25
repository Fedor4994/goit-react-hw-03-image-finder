import { useEffect } from 'react';
import s from './Modal.module.css';

const Modal = ({ toggleModal, bigImg }) => {
  useEffect(() => {
    const onEscClose = event => {
      if (event.code === 'Escape') {
        toggleModal();
      }
    };
    window.addEventListener('keydown', onEscClose);
    return () => {
      window.removeEventListener('keydown', onEscClose);
    };
  }, [toggleModal]);

  const closeModal = event => {
    if (event.target === event.currentTarget) {
      toggleModal();
    }
  };

  return (
    <div onClick={closeModal} className={s.backdrop}>
      <div className={s.modal}>
        <img src={bigImg} alt="big" />
      </div>
    </div>
  );
};

export default Modal;
