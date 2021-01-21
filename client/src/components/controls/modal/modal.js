import React from 'react';
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const ValidationModal = (props) => {
  return (
    <Modal show={props.show} backdrop="static">
      <Modal.Header>
        <Modal.Title>
          { props.title || 
            <span>Validation Errors</span>
          }
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center p-3">
        { props.body || 
          <span>There were validation errors. Do you still wish to save your current progress?</span>
        }
      </Modal.Body>
      <Modal.Footer>
        { props.footer || 
            <div>
              <Button 
                variant="secondary" 
                className="col-lg-2 col-md-6" 
                onClick={props.handleClose}>
                Cancel
              </Button>
              <Button 
                variant="primary" 
                className="col-lg-2 col-md-6" 
                onClick={props.handleContentSave}>
                Save
              </Button>
            </div>
        }
      </Modal.Footer>
    </Modal>
  )
}

export default ValidationModal