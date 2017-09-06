import React from 'react'
import { Modal } from 'react-bootstrap'

const ModalComponent = (props) => {
  return(
    <Modal show = {props.show} onHide = {props.Hide}>
      <Modal.Header closeButton >
        {props.title}
      </Modal.Header>
      <Modal.Body>
        {props.children}
      </Modal.Body>
    </Modal>
  )
}

export default ModalComponent
