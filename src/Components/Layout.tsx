import React from "react";
import Navbar from "./Navbar";

type Props = {
  children?: React.ReactNode;
};

const Layout = (props: Props) => {
  // const [darkmode]=useState(false);
  const { children } = props;

  // const useDarkmode =()=>{
  //     if (darkmode){
  //         document.documentElement.classList.add('dark')
  //       } else {
  //         document.documentElement.classList.remove('dark')
  //       }
  // }

  // useDarkmode();

  return (
    <div className="min-h-screen p-1 bg-slate-950">
      <div className="">
        <Navbar />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
