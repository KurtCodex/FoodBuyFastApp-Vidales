import '../styles/Cards.css';


export const Item = ({ title, img }) => { // ------------------     item


    return (
        <>
            <div className='card-body'>
                <img
                    className='card-img'
                    src={img}
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null; // prevents looping
                        currentTarget.src = "https://api.lorem.space/image/drink?w=240&h=240";
                    }}
                    alt="beer"
                />
                <h3 className='card-title'> {title} </h3>
            </div >
        </>
    )
}
