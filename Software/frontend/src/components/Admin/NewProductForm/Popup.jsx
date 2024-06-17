import React, { useState } from "react";
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
} from "mdb-react-ui-kit";



export default function Popup({ handleSubmit, newProduct, setNewProduct }) {
    const [basicModal, setBasicModal] = useState(false);

    const toggleShow = () => setBasicModal(!basicModal);

    const handleConfirmChanges = () => {
        handleSubmit(); // Trigger form submission from parent component
        setBasicModal(false); // Close the modal after confirmation
    };

    return (
        <>
            <button type="button" id="submit-btn" onClick={toggleShow}>
                Save Changes
            </button>

            <MDBModal show={basicModal} onHide={() => setBasicModal(false)} tabIndex="-1">
                <MDBModalDialog>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>Confirm Changes</MDBModalTitle>
                            <MDBBtn
                                className="btn-close"
                                color="none"
                                onClick={() => setBasicModal(false)}
                            ></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <p>Are you sure you want to save these changes?</p>
                        </MDBModalBody>

                        <MDBModalFooter>
                            <MDBBtn color="secondary" onClick={() => setBasicModal(false)}>
                                Close
                            </MDBBtn>
                            <MDBBtn onClick={handleConfirmChanges}>Confirm</MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
}
