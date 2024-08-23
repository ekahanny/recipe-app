import axios from "axios"

async function getDataFromAPI() {
    const res = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
    return res.data
}

export default getDataFromAPI