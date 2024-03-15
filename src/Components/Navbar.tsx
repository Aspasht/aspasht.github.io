import { NavLink } from "react-router-dom";
import GithubLogo from "../assets/github-mark-white.png";


const Navbar = () => {
  return (
    <div className="text-2xl py-2">
      <div className="flex justify-between">
        <div className="h-[80px] w-[80px]">
          {/* <h1 className="font-babylonica text-[60px] font-extrabold text-yellow-600">
            <a href="/">Aspasht</a>
          </h1> */}
          {/* <img src={AspashtLogo} alt="aspasht-logo"></img> */}
        </div>
        <div className="flex px-3 gap-x-5">
          <div className="space-x-5 font-righteous font-extralight text-yellow-500">
            <NavLink to="/blogs">Blog</NavLink>
            <NavLink to="/research">Research</NavLink>
          </div>
          <div className="">
            <button className="">
              <a href='https://github.com/Aspasht'><img className="w-8 h-full rounded-full animate-pulse" src={GithubLogo}></img></a> 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
