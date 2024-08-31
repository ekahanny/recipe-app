
import { useNavigate, useParams } from "react-router-dom";
import HeroImage from "../components/elements/HeroImage"
import Navbar from "../components/elements/Navbar"
import { useContext, useEffect, useState } from "react";
import getDetailCategory from "../services/category/detail.service";
import FoodCard from "../components/elements/FoodCard";
import { SearchContext } from "../context/SearchContext";
import searchMealFromAPI from "../services/search bar/search.service";

const CategoryDetail = () => {
    
    // mendapatkan category dari link pada laman sebelumnya
    const { category } = useParams();
    const [foods, setFood] = useState([])
    const navigate = useNavigate()
    const { searchRes } = useContext(SearchContext)

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (searchRes.length > 0) {
                    const data = await searchMealFromAPI(searchRes)
                    setFood(data.meals)
                } else {
                    const data = await getDetailCategory(category)
                    setFood(data.meals)
                }
            } catch (error) {
                console.log("Error Fetching Data: ", error);
            }
        }
        fetchData()
    }, [])

    const handleClickMeal = (idMeal) => {
        setTimeout(() => {
            navigate(`/meal-detail/${idMeal}`)
        }, 2000)
    }

    return (
        <div>
            <Navbar/>
            <HeroImage/>
            <div className="px-10 pb-5">
                <h1 className="text-3xl flex justify-center items-center font-bold mt-5 ml-6 bg-orange-300 p-4 rounded-full">
                   {searchRes.length > 0 ? "Search Result" : [category]} 
                </h1>
            </div>
            
            <div className="px-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-5">
                    {searchRes.length > 0 ? (
                        searchRes.map((food, index) => (
                           <FoodCard 
                                key={index}
                                image={food.strMealThumb} 
                                name={food.strMeal} 
                                onClick={() => handleClickMeal(food.idMeal)} 
                           /> 
                        ))
                    ) : (
                            foods.map((food, index) => (
                                <FoodCard 
                                key={index}
                                image={food.strMealThumb} 
                                name={food.strMeal} 
                                onClick={() => handleClickMeal(food.idMeal)} 
                               /> 
                        ))
                    )}

                </div>
            </div>

        </div>

    )

}

export default CategoryDetail