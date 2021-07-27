
export const ModalCard = ({ item, onOpen, onClose }) => {
    return (
        <>
            <div className={onOpen ? 'modal fade show' : 'modal fade '} style={{ display: 'block' }} id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-modal="true" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{item.title}</h5>
                            <button onClick={onClose} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <img style={{ width: '100%' }} src={item.img} alt="" />

                            {item.description}
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