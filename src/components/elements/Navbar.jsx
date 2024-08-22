import Logo from "../../assets/my-recipes-logo.png"

const Navbar = () => {
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
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>

    )

}

export default Navbar