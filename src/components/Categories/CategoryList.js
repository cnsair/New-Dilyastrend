import {
  FaImage,
  FaMusic,
  FaSearch,
  FaDribbble,
  FaAddressCard,
  FaMicrosoft,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const CategoryList = () => {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 md:gap-7 lg:gap-7 xl:gap-7">
      <Link to="/">
        <div className="bg-lightdark p-5 text-center flex justify-center relative rounded-lg hover:bg-white hover:transition hover:text-lightdark text-white">
          <span className="absolute top-14 font-bold text-xl">Art</span>
          <FaImage fill="#fff" size={100} />
        </div>
      </Link>
      <Link to="/">
        <div className="bg-lightdark p-5 text-center flex justify-center relative rounded-lg hover:bg-white hover:transition hover:text-lightdark text-white">
          <span className="absolute top-14 font-bold text-xl">Music</span>
          <FaMusic fill="#fff" size={100} />
        </div>
      </Link>
      <Link to="/">
        <div className="bg-lightdark p-5 text-center flex justify-center relative rounded-lg hover:bg-white hover:transition hover:text-lightdark text-white">
          <span className="absolute top-14 font-bold text-xl">
            Domain Names
          </span>
          <FaSearch fill="#fff" size={100} />
        </div>
      </Link>
      <Link to="/">
        <div className="bg-lightdark p-5 text-center flex justify-center relative rounded-lg hover:bg-white hover:transition hover:text-lightdark text-white">
          <span className="absolute top-14 font-bold text-xl">
            Virtual Worlds
          </span>
          <FaDribbble fill="#fff" size={100} />
        </div>
      </Link>
      <Link to="/">
        <div className="bg-lightdark p-5 text-center flex justify-center relative rounded-lg hover:bg-white hover:transition hover:text-lightdark text-white">
          <span className="absolute top-14 font-bold text-xl">
            Trading Cards
          </span>
          <FaAddressCard fill="#fff" size={100} />
        </div>
      </Link>
      <Link to="/">
        <div className="bg-lightdark p-5 text-center flex justify-center relative rounded-lg hover:bg-white hover:transition hover:text-lightdark text-white">
          <span className="absolute top-14 font-bold text-xl">
            More Categories
          </span>
          <FaMicrosoft fill="#fff" size={100} />
        </div>
      </Link>
    </div>
  );
};

export default CategoryList;
