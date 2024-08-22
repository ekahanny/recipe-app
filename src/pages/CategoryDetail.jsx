
import { useParams } from "react-router-dom";
import HeroImage from "../components/elements/HeroImage"
import Navbar from "../components/elements/Navbar"

const CategoryDetail = () => {
    
    // mendapatkan category dari link pada laman sebelumnya
    const { category } = useParams();

    return (
        <div>
            <Navbar/>
            <HeroImage/>
            <div className="px-16 pb-5">
                <h1 className="text-3xl flex justify-center items-center font-bold mt-5 ml-6 bg-orange-300 p-4 rounded-full ">{category}</h1>
            </div>

        </div>

    )

}

export default CategoryDetail