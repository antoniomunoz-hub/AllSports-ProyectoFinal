import React, {useState, useEffect} from 'react'
import "../../StylesPages/Perfil.css"
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';


export default function EditPublication(props) {
    const [showModal, setShowModal ] = useState(false);
    
    useEffect(() => {
        setShowModal(props.show)
    },[props.show]
    )
            


    function closeModal() {
        props.handleClose();
      }
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
    return (
        
        <Modal onRequestClose={closeModal} style={customStyles}  isOpen={showModal}>
        <div className="new-publications radius">
            
                <div className="header-publications">
                    <h4>Nueva Publicacion</h4>
                </div>
                <div className="area">
                    <textarea className="text-area" name="" id="" cols="30" rows="10" placeholder="Escribe aqui..."></textarea>
                </div>
                <div className="footer-publication">
                    <button className="button-publication"><FontAwesomeIcon icon={faCamera}></FontAwesomeIcon> Examinar </button>
                    <button onClick={ () => props.handleClose() } className="button-publication">Guardar</button>
                </div>
            </div>
        </Modal>
    )
}
