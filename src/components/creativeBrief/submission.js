// import { React, useState} from 'react';
// import { Button, Modal } from 'react-bootstrap';
// import {render} from 'react-dom';

// function SubmissionModal() {
//     const [show, setShow] = useState(false);
  
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
  
//     return (
//       <>
//         <Button variant="primary" onClick={handleShow}>
//           Launch demo modal
//         </Button>
  
//         <Modal show={show} onHide={handleClose}>
//           <Modal.Header closeButton>
//             <Modal.Title>Woohoo! Your submission has been logged.</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>We will get back to you shortly.</Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={handleClose}>
//               Close
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       </>
//     );
//   }
  
//   render(<SubmissionModal />);

//   export default SubmissionModal;