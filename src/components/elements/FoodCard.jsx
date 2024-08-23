const FoodCard = ({image, name, onClick}) => {
    return (
        <div className="rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-110" onClick={onClick}>
            <img src={image} alt={name} className="w-full h-48 object-cover"/>

            <div className="p-3">
                <p className="font-semibold text-lg mt-2">{name}</p>
            </div>

            
        </div>

    )
}

export default FoodCard