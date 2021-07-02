import React from 'react'
import "../../StylesPages/Perfil.css"
import Modal from 'react-modal';

export default function EditPuclication() {
    return (
        <div className="new-publications radius">
            <Modal>
                <div className="header-publications">
                    <h4>Nueva Publicacion</h4>
                </div>
                <div className="area">
                    <textarea className="text-area" name="" id="" cols="30" rows="10" placeholder="Escribe aqui..."></textarea>
                </div>
                <div className="footer-publication">
                    <button className="button-publication"><FontAwesomeIcon icon={faCamera}></FontAwesomeIcon> Examinar </button>
                    <button className="button-publication">Guardar</button>
                    

                </div>
            </Modal>
            </div>
    )
}
