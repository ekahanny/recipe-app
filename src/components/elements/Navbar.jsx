import { useEffect, useState } from "react"
import Logo from "../../assets/my-recipes-logo.png"
import searchMealFromAPI from "../../services/search bar/search.service";

const Navbar = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchResults] = useState([]); 

  const handleChange = (event) => {
    const { value } = event.target;
    setInputValue(value);
  };

  const getSearch = async (event) => {
    event.preventDefault();

    // Jika input kosong, tidak melakukan apa-apa
    if (inputValue.trim() === "") return; 

    try {
      const data = await searchMealFromAPI(inputValue); 

      if (data && data.meals) {
        // Simpan hasil pencarian di state jika ada
        setSearchResults(data.meals); 
      } else {
        // Set hasil pencarian ke array kosong jika tidak ada hasil
        setSearchResults([]); 
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
      // Set hasil pencarian ke array kosong jika terjadi error
      setSearchResults([]); 
    }
    setInputValue(""); // Reset input value setelah pencarian
  };

  useEffect(() => {
    console.log("Current input value:", inputValue);
  }, [inputValue]);

  return (
    <div>
      <div className="navbar bg-orange-300 p-5 h-[100px] flex justify-center">
        <div className="flex-1">
          <a className="">
            <img src={Logo} alt="Logo" className="w-28 h-28 -mt-2" />
          </a>
        </div>
        <div className="flex-auto gap-2">
          <ul className="flex flex-row gap-6">
            <li className="btn btn-ghost text-[#E25E3E] font-bold tracking-widest">
              HOME
            </li>
            <li className="btn btn-ghost text-[#E25E3E] font-bold tracking-widest">
              ABOUT
            </li>
            <li className="btn btn-ghost text-[#E25E3E] font-bold tracking-widest">
              CATEGORIES
            </li>
            <li className="btn btn-ghost text-[#E25E3E] font-bold tracking-widest">
              CONTACT
            </li>
          </ul>
        </div>
        <div className="flex-none gap-2">
          <form onSubmit={getSearch}>
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
              value={inputValue}
              onChange={handleChange}
            />
          </form>
        </div>
      </div>

      {/* Render Hasil Pencarian */}
      {/* <div className="search-results grid grid-cols-1 md:grid-cols-3 gap-4 p-5">
        {searchResults.map((meal) => (
          <div key={meal.idMeal} className="food-card">
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <p>{meal.strMeal}</p>
          </div>
        ))}
      </div> */}

    </div>
  );
};

export default Navbar;
