import Navbar from "./components/elements/Navbar";
import './App.css';  // Import your CSS file
import Category from "./components/fragments/Category";
import { useEffect, useState } from "react";
import getDataFromAPI from "./services/category.service";
import AdditionalArticle from "./components/fragments/AdditionalArticle";
import Footer from "./components/elements/Footer";

function App() {

  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDataFromAPI()
        setCategories(data.categories)
        console.log(data);
      } catch (error) {
        console.log("Error fetching data : ", error);
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <Navbar />
      
      {/* Hero Image */}
      <div className="relative">
        <img src="src/assets/Desain tanpa judul.png" alt="" className="w-full" />
        <h1 className="absolute top-[45%] left-[60%] translate-x-[-50%] translate-y-[-50%] text-5xl font-bold">
          Explore Culinary <h1 className="text-orange-300 mt-3 italic">Delights.</h1> 
        </h1>
      </div>

      {/* Additional Article */}
      <div className="px-8 my-3">
        <AdditionalArticle/>
      </div>
      
      {/* Categories */}
      <div className="px-16 pb-5">
        <h1 className="text-3xl flex justify-center items-center font-bold mt-5 ml-6 bg-orange-300 p-4 rounded-full ">What to cook?</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4 mt-8">
          {categories.map((category) => (
            <Category key={category.idCategory} category={category.strCategory} thumbnail={category.strCategoryThumb}/>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer/>


    </>
  );
}

export default App;
