import Modal from 'components/Modal/Modal';
import { useState } from 'react';
import s from './GalleryItem.module.css';

const GalleryItem = ({ smallImage, bigImage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen && (
        <div>
          <Modal toggleModal={toggleModal} bigImg={bigImage} />
        </div>
      )}
      <div className={s.galleryItem}>
        <img
          onClick={toggleModal}
          className={s.galleryImage}
          src={smallImage}
          alt="example"
        />
      </div>
    </>
  );
};

export default GalleryItem;
