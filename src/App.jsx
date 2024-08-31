import Navbar from "./components/elements/Navbar";
import './App.css';  // Import your CSS file
import Category from "./components/fragments/Category";
import { useContext, useEffect, useState } from "react";
import getDataFromAPI from "./services/category/category.service";
import AdditionalArticle from "./components/fragments/AdditionalArticle";
import Footer from "./components/elements/Footer";
import HeroImage from "./components/elements/HeroImage";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "./context/SearchContext";
import FoodCard from "./components/elements/FoodCard";

function App() {

  const [categories, setCategories] = useState([])
  
  // Diambil dari state global -> SearchContext
  const { searchRes } = useContext(SearchContext)

  const navigate = useNavigate()

  useEffect(() => {
    if(searchRes.length === 0){
      const fetchData = async () => {
        try {
          const data = await getDataFromAPI()
          setCategories(data.categories)
        } catch (error) {
          console.log("Error fetching data : ", error);
        }
      }
      fetchData()
    }
  }, [searchRes])

  const handleClickCategory = (category) => {
    setTimeout(() => {
      navigate(`/category-detail/${category}`)
    }, 2000)
  }

  return (
    <>
      <Navbar />
      
      <HeroImage/>
  
      {/* Additional Article */}
      <div className="px-8 my-3">
        <AdditionalArticle/>
      </div>
      
      {/* Categories or Search Results */}
      <div className="px-16 pb-5">
        <h1 className="text-3xl flex justify-center items-center font-bold mt-5 ml-6 bg-orange-300 p-4 rounded-full ">
          {searchRes.length > 0 ? "Search Results" : "What to cook?"}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4 mt-8">
          {searchRes.length > 0 ? (
            searchRes.map((meal) => (
              <FoodCard
                key={meal.idMeal}
                image={meal.strMealThumb}
                name={meal.strMeal}
                onClick={() => navigate(`/meal-detail/${meal.idMeal}`)}
              />
            ))
          ) : (
            categories.map((category) => (
              <Category 
                key={category.idCategory}
                category={category.strCategory}
                thumbnail={category.strCategoryThumb}
                onClick={() => handleClickCategory(category.strCategory)}
              />
            ))
          )}
        </div>
      </div>
  
      {/* Footer */}
      <Footer/>
  
  
    </>
  );
}



export default App;
