import axios from "axios"

async function getDetailCategory (category) {
    const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    return res.data
}

export default getDetailCategory