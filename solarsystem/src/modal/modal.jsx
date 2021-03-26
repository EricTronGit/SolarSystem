import { Modal } from "react-bootstrap";

function ModalSoleil(props) {

    const handleClose = () =>{
        props.close(false);
    }

    return (
        <div>
            <Modal size="lg" className="modalContainer" show={props.show} onHide={handleClose} animation={true}>
                <Modal.Header className="modalHeaderFooter" closeButton>
                    <Modal.Title>A Propos du Soleil</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modalBody">
                    {props.textBody}
                </Modal.Body>
            </Modal>
        </div>
    );

}

export default ModalSoleil;
