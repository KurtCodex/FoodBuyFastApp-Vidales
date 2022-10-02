import '../styles/Cards.css';

export const Item = ({ title, img }) => {
    return (
        <>
            <div className='card-body'>
                <img
                    className='card-img'
                    src={img}
                    alt="beer"
                />
                <h3 className='card-title'> {title} </h3>
            </div >
        </>
    )
}
