import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="flex justify-center mt-8">
      <form>
        <div className="form-control">
          <div className="relative w-96">
            <input
              type="text"
              placeholder="search for items"
              autocomplete="off"
              className=" input input-bordered w-full noselect text-grey text-sm bg-lightgrey shadow focus:outline-0 hover:shadow-lg"
            />
            <div className="opacity-50 absolute top-4 right-3">
              <FaSearch />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Search;
