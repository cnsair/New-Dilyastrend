import Button from "../Button/Button";
import {
  FaLongArrowAltRight,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaMailBulk,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-lightdark text-lightwhite font-normal">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 md:gap-7 lg:gap-7 xl:gap-7 p-12 ">
        <div>
          <div className="mb-5 text-xl">Get the latest updates</div>
          <div className="text-lightblue mb-5">
            Signup for our newsletter to get the latest updates in your inbox.
          </div>
          <div>
            <form>
              <div className="form-control">
                <div className="relative w-60">
                  <input
                    type="email"
                    placeholder="email"
                    autoComplete="off"
                    className="pr-12 input input-bordered w-60 noselect text-dark text-sm bg-lightblue shadow focus:outline-0 hover:shadow-lg"
                  />
                  <div className="absolute top-0 right-0">
                    <Button>
                      <FaLongArrowAltRight />
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div>
          <div className="text-xl mb-5">Marketplace</div>
          <ul className="text-sm">
            <li className="mb-2 hover:text-white transition">
              <Link to="/">All products</Link>
            </li>
            <li className="mb-2 hover:text-white transition">
              <Link to="/">Art</Link>
            </li>
            <li className="mb-2 hover:text-white transition">
              <Link to="/">Music</Link>
            </li>
            <li className="mb-2 hover:text-white transition">
              <Link to="/">Domain Names</Link>
            </li>
            <li className="mb-2 hover:text-white transition">
              <Link to="/">Virtual Worlds</Link>
            </li>
            <li className=" hover:text-white transition">
              <Link to="/">Collectibles</Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-xl mb-5">Resources</div>
          <ul className="text-sm">
            <li className="mb-2 hover:text-white transition">
              <Link to="/">Help center</Link>
            </li>
            <li className="mb-2 hover:text-white transition">
              <Link to="/">Partners</Link>
            </li>
            <li className="mb-2 hover:text-white transition">
              <Link to="/">Suggestions</Link>
            </li>
            <li className="mb-2 hover:text-white transition">
              <Link to="/">Discord</Link>
            </li>
            <li className="mb-2 hover:text-white transition">
              <Link to="/">Docs</Link>
            </li>
            <li className=" hover:text-white transition">
              <Link to="/">Newsletter</Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-xl mb-5">Community</div>
          <ul className="text-sm">
            <li className="mb-2 hover:text-white transition">
              <Link to="/">Community</Link>
            </li>
            <li className="mb-2 hover:text-white transition">
              <Link to="/">Communication</Link>
            </li>
            <li className="mb-2 hover:text-white transition">
              <Link to="/">Brand Assets</Link>
            </li>
            <li className="mb-2 hover:text-white transition">
              <Link to="/">Blog</Link>
            </li>
            <li className="mb-2 hover:text-white transition">
              <Link to="/">Forum</Link>
            </li>
            <li className=" hover:text-white transition">
              <Link to="/">Mailing List</Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-xl mb-5">Join the community</div>
          <div className="flex gap-3">
            <div className="bg-dark p-2 rounded hover:bg-white hover:text-primarycolor hover:transition">
              <FaFacebookF />
            </div>
            <div className="bg-dark p-2 rounded hover:bg-white hover:text-primarycolor hover:transition">
              <FaTwitter />
            </div>
            <div className="bg-dark p-2 rounded hover:bg-white hover:text-primarycolor hover:transition">
              <FaInstagram />
            </div>
            <div className="bg-dark p-2 rounded hover:bg-white hover:text-primarycolor hover:transition">
              <FaMailBulk />
            </div>
          </div>
        </div>
      </div>
      <hr className="text-grey opacity-30" />
      <div className="text-center py-5 text-lightwhite">
        © Copyright {new Date().getFullYear()} - Powered by Dilyastrend
      </div>
    </div>
  );
};

export default Footer;
