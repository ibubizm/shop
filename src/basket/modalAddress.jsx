// import { BasketForm } from "./basketForm"
import { reduxForm, Field } from 'redux-form'
import { Form } from './basketForm'

export const ModalAddress = ({ onOpen, onClose }) => {

    return (
        <>
            <div className={onOpen ? 'modal fade show' : 'modal fade '} style={{ display: 'block' }} id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-modal="true" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">input address</h5>
                            <button onClick={onClose} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <Form />
                        </div>
                        <div className="modal-footer">
                            <button onClick={onClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Add to card</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}