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
          <NavLink to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#15803d"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
          </NavLink>
        </div>
        <div className="flex px-3 gap-x-5">
          <div className="space-x-5 font-righteous font-extralight text-yellow-500">
            <NavLink to="/blogs">Blog</NavLink>
            <NavLink to="/projects">Projects</NavLink>
          </div>
          <div className="">
            <button className="">
              <a href="https://github.com/Aspasht">
                <img
                  className="w-8 h-full rounded-full animate-pulse"
                  src={GithubLogo}
                ></img>
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
