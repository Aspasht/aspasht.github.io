import { NavLink } from "react-router-dom";
import GithubLogo from "../assets/github-mark-white.png";
const Navbar = () => {
  return (
    <div className="text-2xl py-2">
      <div className="flex justify-between">
        <div>
          <h1 className="font-babylonica text-[60px] font-extrabold text-yellow-600">
            <a href="/">Aspasht</a>
          </h1>
        </div>
        <div className="flex px-3 gap-x-5">
          <div className="space-x-5 font-righteous font-extralight text-yellow-500">
            <NavLink to="/blogs">Blog</NavLink>
            <NavLink to="/research">Research</NavLink>
          </div>
          <div className="">
            <button className="">
              <img className="w-8 h-8 animate-pulse" src={GithubLogo}></img>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
