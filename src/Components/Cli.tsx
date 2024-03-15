import { useEffect, useRef, useState } from "react";
// @ts-ignore
import Typed from "typed.js";
import { typed } from "../Hooks/TypedWithDestroy";

interface TypedWithDestroy extends Typed {
  destroy(): void;
}

const Cli = () => {
  const [showCli, setShowCli] = useState(true);
  const [buttonPressed, setButtonPressed] = useState(false);

  const el = useRef<HTMLDivElement>(null);
  const info = useRef<HTMLDivElement>(null);

  let typedInstance1: TypedWithDestroy | undefined;
  let typedInstance2: TypedWithDestroy | undefined;

  useEffect(() => {
    const command = "whoami";
    const value =
      '"I\'m a tech adventurer who loves to explore the unknown. My journey as a self taught web developer, ethical hacker, and CTF player is fueled by the excitement of discovering new frontiers and pushing boundaries." - aspasht';
    typedInstance1 = typed(el, command, 50, () => {
      typedInstance2 = typed(info, value, 5);
    });

    return () => {
      if (typedInstance1) {
        typedInstance1.destroy();
      }
      if (typedInstance2) {
        typedInstance2.destroy();
      }
    };
  }, []);

  const toggleCli = () => {
    setShowCli(!showCli);
    setButtonPressed(true); 
  };

  useEffect(() => {
    let closeTimeout:any;
  
    if (!buttonPressed) {
     
      closeTimeout = setTimeout(() => {
        setShowCli(false);
      }, 15000); 
    }
  
    return () => {
      clearTimeout(closeTimeout);
    };
  }, [buttonPressed]);

  return (
    <div>
      {showCli ? (
        <div className="h-full min-h-48 md:h-96 my-5 sm:mx-48 bg-slate-800 shadow-2xl">
          <div className="flex h-8 bg-slate-700 justify-between p-1 text-white">
            <div className="justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
            </div>

            <div className="flex gap-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 12H6"
                />
              </svg>
              
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z"
                />
              </svg>
              <button onClick={toggleCli}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="p-2">
            <h1 className="font-bold text-2xl">
              <strong className="text-blue-600 font-arapey">aspasht<strong className="text-green-700 font-mono">$</strong></strong>
              <span ref={el} className="text-yellow-300 font-arapey text-lg"></span>
            </h1>
            <p className="text-xl my-2 text-gray-300 font-serif">
              <span ref={info}></span>
            </p>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Cli;
