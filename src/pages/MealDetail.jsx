import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeroImage from "../components/elements/HeroImage";
import Navbar from "../components/elements/Navbar";
import Footer from "../components/elements/Footer";
import getMealsFromAPI from "../services/recipe/meals.service";

const MealDetail = () => {
    const { idMeal } = useParams();
    const [meal, setMeal] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getMealsFromAPI(idMeal);
                setMeal(data.meals[0]);
            } catch (error) {
                console.log("Error Fetching Data: ", error);
            }
        };
        fetchData();
    }, [idMeal]);


    return (
        <>
            <Navbar />
            <HeroImage />

            <div className="px-10 pb-5">
                <h1 className="text-3xl flex justify-center items-center font-bold mt-5 ml-6 bg-orange-300 p-4 rounded-full ">{meal.strMeal}</h1>
                <div className="relative mt-8">
                    <img 
                        src={meal.strMealThumb} 
                        alt={meal.strMeal} 
                        className="w-full max-w-md mx-auto rounded-lg shadow-lg object-cover" 
                    />
                </div>
                
                <div className="flex flex-row justify-around items-center my-5 bg-orange-400 w-[480px] py-5 mx-auto rounded-lg space-x-6">
                    <div className="flex flex-col text-center">
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mr-1">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5" />
                            </svg>
                            <h1 className="font-semibold">Country</h1>                        
                        </div>
                        <p className="italic">{meal.strArea}</p>
                    </div>

                    <div className="flex flex-col text-center">
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mr-1">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                            </svg>
                            <h1 className="font-semibold">Category</h1>
                        </div>
                        <p className="italic">{meal.strCategory}</p>
                    </div>

                    <div className="flex flex-col text-center">
                        <div className="flex items-center">

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mr-1">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6Z" />
                            </svg>
                            <h1 className="font-semibold">Tag</h1>
                        </div>
                        <p className="italic">{meal.strTags}</p>
                    </div>
                </div>

                
            </div>
            
            <Footer />
        </>
    );
};











export default MealDetail;
