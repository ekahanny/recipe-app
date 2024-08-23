import axios from "axios";

async function getMealsFromAPI(idMeal) {
    const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
    return res.data
}

export default getMealsFromAPI