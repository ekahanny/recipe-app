const Category = ({ category, thumbnail, onClick}) => {
    return (
        <div className="flex flex-col items-center">
            <button>
                <img
                className="rounded-full w-36 h-32 object-cover mt-2 transform transition-transform duration-300 hover:scale-110"
                src={thumbnail}
                onClick={onClick} />
            </button>
            <p className="text-lg text-center font-semibold mt-1">{category}</p>
        </div>
    )
}

export default Category