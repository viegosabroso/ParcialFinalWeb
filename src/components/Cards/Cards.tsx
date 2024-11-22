interface CardsProps {

    title: string;
    description: string;
    image: string;

}

const Cards = ({ title, description, image }: CardsProps) => {


    return (
        <div className="card">
            <img src={image} alt={title} />

            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
            </div>
        </div>
    )



}

export default Cards;