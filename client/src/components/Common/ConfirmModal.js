import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ConfirmModal({ message, showModal, hideModal, handler }) {
    return (
        <Modal
            show={showModal}
            onHide={() => hideModal()}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton >
                <Modal.Title>Are you sure?</Modal.Title>
            </ Modal.Header>
            <Modal.Body>{message}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => hideModal()}>Cancel</Button>
                <Button variant="success" onClick={async () => await handler()}>Confirm</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ConfirmModal;