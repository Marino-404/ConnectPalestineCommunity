import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { useAppContext } from "../store/AppContext";

const Back = ({ SectionName }) => {
  const { mode, lang } = useAppContext();

  return (
    <div
      className={`w-full h-auto flex text-sm font-poppins font-normal text-center justify-center pt-4 ${
        mode ? "text-custom-white" : "text-custom-black"
      }`}
    >
      <Link className="flex items-center" to={"/"}>
        <IoIosArrowBack />
        <span>{lang ? "Inicio" : "Home"}</span>
        <span className="px-1">|</span>
      </Link>
      <span className="underline">{SectionName}</span>
    </div>
  );
};

export default Back;
