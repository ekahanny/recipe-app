
import { useParams } from "react-router-dom";
import HeroImage from "../components/elements/HeroImage"
import Navbar from "../components/elements/Navbar"
import { useEffect, useState } from "react";
import getDetailCategory from "../services/category/detail.service";
import FoodCard from "../components/elements/FoodCard";

const CategoryDetail = () => {
    
    // mendapatkan category dari link pada laman sebelumnya
    const { category } = useParams();
    const [foods, setFood] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getDetailCategory(category)
                setFood(data.meals)
            } catch (error) {
                console.log("Error Fetching Data: ", error);
            }
        }
        fetchData()
    }, [])

    return (
        <div>
            <Navbar/>
            <HeroImage/>
            <div className="px-10 pb-5">
                <h1 className="text-3xl flex justify-center items-center font-bold mt-5 ml-6 bg-orange-300 p-4 rounded-full ">{category}</h1>
            </div>
            
            <div className="px-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {foods.map((food, index) => (
                    <FoodCard key={index} image={food.strMealThumb} name={food.strMeal} />
                    ))}
                </div>
            </div>

        </div>

    )

}

export default CategoryDetail