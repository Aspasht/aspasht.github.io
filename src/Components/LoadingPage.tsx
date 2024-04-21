import rotate_svg from "../assets/loading.svg";
import Layout from "./Layout";


const LoadingPage = () => {
  return (
    <Layout>
      <div className="relative grid h-screen w-full overflow-hidden">
        <div className="absolute grid -inset-x-1/2 top-1/3">
          <img
            className="h-20 w-20 transition-all delay-2000 animate-spin hover:animate-none"
            src={rotate_svg}
            alt="rotate_icon"
          ></img>
        </div>
      </div>
    </Layout>
  );
};

export default LoadingPage;
