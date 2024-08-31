import { useContext, useEffect, useState } from "react"
import Logo from "../../assets/my-recipes-logo.png"
import searchMealFromAPI from "../../services/search bar/search.service";
import { SearchContext } from "../../context/SearchContext";
import { Link } from "react-scroll";

const Navbar = () => {

  // Diambil dari state global -> SearchContext
  const { inputVal, setInputVal, setSearchRes } = useContext(SearchContext)

  const handleChange = (event) => {
    const { value } = event.target;
    setInputVal(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Jika input kosong, tidak melakukan apa-apa
    if (inputVal.trim() === "") return; 

    try {
      const data = await searchMealFromAPI(inputVal); 
      if (data && data.meals) {
        // Simpan hasil pencarian di state jika ada
        setSearchRes(data.meals); 
      } else {
        // Set hasil pencarian ke array kosong jika tidak ada hasil
        setSearchRes([]); 
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
      // Set hasil pencarian ke array kosong jika terjadi error
      setSearchRes([]); 
    }
    
    setInputVal("");

  };

  return (
    <div>
      <div className="navbar bg-orange-300 p-5 h-[100px] flex justify-center">
        <div className="flex-1">
          <a href="/">
            <img src={Logo} alt="Logo" className="w-28 h-28 -mt-2" />
          </a>
        </div>
        <div className="flex-auto gap-2">
          <ul className="flex flex-row gap-6">
            <li className="btn btn-ghost text-[#E25E3E] font-bold tracking-widest">
              <Link to="home" smooth={true} duration={500}>
                HOME
              </Link>
            </li>
            <li className="btn btn-ghost text-[#E25E3E] font-bold tracking-widest">
              <Link to="about" smooth={true} duration={500}>
                  ABOUT
              </Link>
            </li>
            <li className="btn btn-ghost text-[#E25E3E] font-bold tracking-widest">
              <Link to="categories" smooth={true} duration={500}>
                  CATEGORIES
              </Link>
            </li>
            <li className="btn btn-ghost text-[#E25E3E] font-bold tracking-widest">
              <Link to="contact" smooth={true} duration={500}>
                  CONTACT
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex-none gap-2">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
              value={inputVal}
              onChange={handleChange}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
