import { useEffect, useState } from "react"
import Logo from "../../assets/my-recipes-logo.png"

const Navbar = () => {

  const [inputValue, setInputValue] = useState("")

    const handleChange = (event) => {
      const {value} = event.target
      setInputValue(value)

    }

    useEffect(() => {
      console.log(inputValue);
    }, [inputValue])

    return (
      <div className="navbar bg-orange-300 p-5 h-[100px] flex justify-center">
        <div className="flex-1">
          <a className="">
              <img src={Logo} alt="Logo" className="w-28 h-28 -mt-2" />
          </a>
        </div>
        <div className="flex-auto gap-2 ">
          <ul className="flex flex-row gap-6">
            <li className="btn btn-ghost text-[#E25E3E] font-bold tracking-widest">HOME</li>
            <li className="btn btn-ghost text-[#E25E3E] font-bold tracking-widest">ABOUT</li>
            <li className="btn btn-ghost text-[#E25E3E] font-bold tracking-widest">CATEGORIES</li>
            <li className="btn btn-ghost text-[#E25E3E] font-bold tracking-widest">CONTACT</li>

          </ul>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" value={inputValue} onChange={handleChange} />
          </div>
        </div>
      </div>
    )
}

export default Navbar