import './card.scss'


export const Card = ({ item, onOpen }) => {

    return (
        <>
            <div className="card" style={{ width: '15rem', display: 'flex', }}>
                <div className="card-img" onClick={() => onOpen(item)} >
                    < img src={item.img} className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text" style={{ maxRow: 4 }}>{item.description}</p>
                    <div className="footer__card">
                        <span>{item.price} BYN</span>
                        <button className="btn btn-primary">Add</button>
                    </div>
                </div>
            </div >
        </>
    )
}