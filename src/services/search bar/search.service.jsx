import axios from "axios"

async function searchMealFromAPI(mealName) {
    const res = await axios.get(`www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
    return res.data

}

export default searchMealFromAPI