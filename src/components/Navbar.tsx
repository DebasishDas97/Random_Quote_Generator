import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="flex w-full justify-between h-20 lg:px-48 px-4 items-center text-white md:text-4xl text-3xl">
        <NavLink className={({isActive}) => isActive ? "font-bold" : "font-thin"} to="/">Home</NavLink>
        <NavLink className={({isActive}) => isActive ? "font-bold" : "font-thin"} to="/bookmark">Bookmarks</NavLink>
    </div>
  )
}

export default Navbar