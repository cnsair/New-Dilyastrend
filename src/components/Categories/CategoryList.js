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
        <div className="bg-categories p-5 text-center flex justify-center relative rounded-lg hover:bg-deepcategories hover:transition hover:text-white">
          <span className="absolute top-14 font-bold text-dark opacity-60 text-xl">
            Art
          </span>
          <FaImage color="#93d7ff" size={100} />
        </div>
      </Link>
      <Link to="/">
        <div className="bg-categories p-5 text-center flex justify-center relative rounded-lg hover:bg-deepcategories hover:transition hover:text-white">
          <span className="absolute top-14 font-bold text-dark opacity-60 text-xl">
            Music
          </span>
          <FaMusic color="#93d7ff" size={100} />
        </div>
      </Link>
      <Link to="/">
        <div className="bg-categories p-5 text-center flex justify-center relative rounded-lg hover:bg-deepcategories hover:transition hover:text-white">
          <span className="absolute top-14 font-bold text-dark opacity-60 text-xl">
            Domain Names
          </span>
          <FaSearch color="#93d7ff" size={100} />
        </div>
      </Link>
      <Link to="/">
        <div className="bg-categories p-5 text-center flex justify-center relative rounded-lg hover:bg-deepcategories hover:transition hover:text-white">
          <span className="absolute top-14 font-bold text-dark opacity-60 text-xl">
            Virtual Worlds
          </span>
          <FaDribbble color="#93d7ff" size={100} />
        </div>
      </Link>
      <Link to="/">
        <div className="bg-categories p-5 text-center flex justify-center relative rounded-lg hover:bg-deepcategories hover:transition hover:text-white">
          <span className="absolute top-14 font-bold text-dark opacity-60 text-xl">
            Trading Cards
          </span>
          <FaAddressCard color="#93d7ff" size={100} />
        </div>
      </Link>
      <Link to="/">
        <div className="bg-categories p-5 text-center flex justify-center relative rounded-lg hover:bg-deepcategories hover:transition hover:text-white">
          <span className="absolute top-14 font-bold text-dark opacity-60 text-xl">
            More Categories
          </span>
          <FaMicrosoft color="#93d7ff" size={100} />
        </div>
      </Link>
    </div>
  );
};

export default CategoryList;
