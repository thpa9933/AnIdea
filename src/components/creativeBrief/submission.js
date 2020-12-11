import { useState} from 'react';
import * as React from 'react';
import { Button, Modal } from 'react-bootstrap';

const SubmissionModal = () => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="dark" onClick={handleShow}>
          Submit!
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Woohoo! Your submission has been logged.</Modal.Title>
          </Modal.Header>
          <Modal.Body>We will get back to you shortly.</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  export default SubmissionModal;