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
            <p>{meal.strMeal}</p>
            <Footer />
        </>
    );
};

export default MealDetail;
