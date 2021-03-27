import { Modal } from "react-bootstrap";

function ModalTemplate(props) {

    const handleClose = () =>{
        props.close(false);
    }

    return (
        <div>
            <Modal size="lg" className="modalContainer" show={props.show} onHide={handleClose} animation={true}>
                <Modal.Header className="modalHeaderFooter" closeButton>
                    <Modal.Title>En savoir plus sur {props.textHeader}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modalBody">
                    {props.textBody}
                </Modal.Body>
            </Modal>
        </div>
    );

}

export default ModalTemplate;
