const Card = (props) => {
    return(
        <div className="bg-gray-light text-black py-5 px-3">
            <span className="block font-medium text-2xl py-3 ">{props.cardTitle}</span>
            <p className="font-normal text-base leading-7">{props.cardBody}</p>
        </div>
    )
}

export default Card;