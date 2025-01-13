import React, { useState } from 'react';
import { Col, Modal, Button } from "react-bootstrap";

const ExperienceCard = ({ data }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <Col lg="6">
      <div className="pb-5 text-center">
        {/* Image triggers the modal */}
        <img
          className="bg-white mb-3"
          src={data.companylogo}
          alt=""
          onClick={handleOpenModal}
          style={{ cursor: "pointer" }} // Make the image look clickable
        />
        <p className="lead">
          {data.role}
          <br />
          {data.date}
        </p>
      </div>

      {/* Modal Popup */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{data.companyname}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>Role:</strong> {data.role}</p>
          <p><strong>Dates:</strong> {data.date}</p>
          <p><strong>Description:</strong> {data.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Col>
  );
}

export default ExperienceCard;
