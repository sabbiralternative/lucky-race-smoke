import { Loader as LoaderIcon } from "rsuite";
import "rsuite/Loader/styles/index.css";

const Loader = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <LoaderIcon />
    </div>
  );
};

export default Loader;
