import React, { useEffect } from 'react';
import { ContentWrapper,  ModalStyle } from 'Styles/styles';
//import vid from '/board.MP4'

function Modal({ closeModal }) {
  useEffect(() => {
    document.body.classList.add('modal-open');
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, []);

  return (
    <ModalStyle className="modal">
        <ContentWrapper>
        <span style={{marginLeft:'90%', marginTop:'-50%',fontSize:'30px'}} className="close" onClick={closeModal}>&times;</span>
        <video src="public/board.MP4"></video>
        </ContentWrapper>
    </ModalStyle>
  );
}

export default Modal;