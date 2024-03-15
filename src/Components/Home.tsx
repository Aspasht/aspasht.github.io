import Layout from "./Layout";
import { animated, useInView, useSpring } from "@react-spring/web";
import { useState, useEffect } from "react";
import Markdown from "./Markdown.tsx";
import Cli from "./Cli.tsx";

const Home = () => {
  const [isInView, setIsInView] = useState(false);

  const [ref] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: -100,
      },
      to: {
        opacity: 1,
        y: 0,
      },
    }),
    {
      rootMargin: "10% 10%",
      once: true,
    }
  );

  const props = useSpring({
    opacity: isInView ? 1 : 0,
    y: isInView ? 0 : -100,
    config: { duration: 1000 },
    onRest: () => {
      // setIsInView(false); // fade out animation
    },
  });

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsInView(true);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const pythonMarkdown = `\
  \`\`\`python
  import random

  def my_python():
      jokes = [
          "I like my code like I like my coffee: with no bugs.",
          "I have a lot of experience with 'NoneType' objects (i.e. my love life)."
      ]
      return random.choice(jokes)    # Maybe you're thinking, this code has no comment :). 
  
  print(my_python())
  \`\`\`
  `;

  const javascriptMarkdown = `\
  \`\`\`javascript
  function myJavaScript() {
    const jokes = [
      "I have a love-hate relationship with 'undefined'.",
      "I can never remember if it's '==' or '==='.",
    ];

    return jokes[Math.floor(Math.random() * jokes.length)];
  } 

  console.log(myJavaScript());
  \`\`\`
  `;

  return (
    <Layout>
      <div className="">
        <span className="flex w-full">
          <animated.div
            className="mx-auto self-center font-rootkit text-[50px] font-bold text-red-900"
            ref={ref}
            style={props}
          >
            NAMASTE
          </animated.div>
        </span>
        <div className="flex w-full">
          <h2 className="mx-auto self-center font-carattere text-[30px] text-green-500 opacity-50">
            "From bits to bytes, I make it happen."
          </h2>
        </div>

        <span>
          <Cli />
        </span>

        <div className="">
          <div className="p-5 text-green-700">
            <Markdown markdown={pythonMarkdown}></Markdown>
          </div>
        </div>

        <div className="p-5 text-green-700">
          <Markdown markdown={javascriptMarkdown}></Markdown>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
