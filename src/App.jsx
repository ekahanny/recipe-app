import Navbar from "./components/elements/Navbar";
import './App.css';  // Import your CSS file
import Category from "./components/fragments/Category";
import { useEffect, useState } from "react";
import getDataFromAPI from "./services/category/category.service";
import AdditionalArticle from "./components/fragments/AdditionalArticle";
import Footer from "./components/elements/Footer";
import HeroImage from "./components/elements/HeroImage";
import { useNavigate } from "react-router-dom";

function App() {

  const [categories, setCategories] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDataFromAPI()
        setCategories(data.categories)
      } catch (error) {
        console.log("Error fetching data : ", error);
      }
    }
    fetchData()
  }, [])

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
      
      {/* Categories */}
      <div className="px-16 pb-5">
        <h1 className="text-3xl flex justify-center items-center font-bold mt-5 ml-6 bg-orange-300 p-4 rounded-full ">What to cook?</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4 mt-8">
          {categories.map((category) => (
            <Category 
              key={category.idCategory}
              category={category.strCategory}
              thumbnail={category.strCategoryThumb}
              onClick={() => handleClickCategory(category.strCategory)}
            />
          ))}
        </div>
      </div>
  
      {/* Footer */}
      <Footer/>
  
  
    </>
  );
}



export default App;
