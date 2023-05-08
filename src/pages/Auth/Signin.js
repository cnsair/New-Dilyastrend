import Animate from "../../components/Animate/Animate";
import Container from "../../components/Container/Container";
import Footer from "../../components/Footer/Footer";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Signin = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  let { username, password } = formData;

  const handleChange = (e) => {
    // validate and sanitize input

    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  // submit login request
  const handleSubmit = () => {};

  return (
    <Animate>
      <Container>
        <div className="p-6 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 md:gap-7 lg:gap-7 xl:gap-12 h-screen text-dark md:p-12 lg:p-12 xl:p-12">
          <div className="mt-12">
            <p className="font-bold text-6xl mb-6 leading-tight">
              Create, sell or <br />
              collect digital items.
            </p>
            <p className="leading-normal font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua
              ut enim.
            </p>
          </div>
          <div className="mt-12">
            <div className="flex justify-center">
              <div className="p-6 shadow-lg rounded-lg border w-96">
                <form onSubmit={handleSubmit}>
                  <p className="font-semibold text-dark text-xl">Sign In</p>
                  <p className="my-4 text-dark opacity-80">
                    Login using an existing account or create a new account{" "}
                    <span className="font-bold">
                      <Link to="/auth/signup">here</Link>
                    </span>
                  </p>
                  {/* username */}
                  <div className="form-control w-full mb-3">
                    <div>
                      <Input
                        placeholder="username"
                        onChange={handleChange}
                        id="username"
                        value={username}
                        type="text"
                        autoComplete="off"
                      />
                      {/* error message here */}
                      <div className="text-danger text-xs error-msg">
                        <span>username is required</span>
                      </div>
                    </div>
                  </div>

                  {/* password */}
                  <div className="form-control w-full mb-3">
                    <div className="relative">
                      <Input
                        placeholder="password"
                        id="password"
                        value={password}
                        type={showPassword ? "text" : "password"}
                        autoComplete="off"
                        className="input input-bordered border-bordercolor w-full max-w-md text-sm text-dark bg-white noselect mb-1 focus:outline-0 hover:shadow-sm"
                      />
                      <span
                        onClick={() => setShowPassword((prev) => !prev)}
                        className="text-dark absolute top-1 my-3 right-5 cursor-pointer text-xl bg-transparent"
                      >
                        {showPassword ? <FaEye /> : <FaEyeSlash />}
                      </span>
                      {/* <span className="text-dark absolute top-1 py-2 right-5 cursor-pointer text-sm bg-transparent">
                        hide
                      </span> */}
                    </div>
                    {/* error message here */}
                    <div className="text-danger text-xs error-msg">
                      <span>password is required</span>
                    </div>
                  </div>

                  {/* login button */}
                  <div className="w-full form-control">
                    <Button>Submit</Button>
                  </div>
                </form>

                {/* login with */}
                <div className="mt-5">
                  <p className="text-dark opacity-80">
                    Login with:{" "}
                    <span className="font-bold ml-4 cursor-pointer">
                      Facebook
                    </span>{" "}
                    <span className="font-bold ml-4 cursor-pointer">
                      Google
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </Container>
    </Animate>
  );
};

export default Signin;
