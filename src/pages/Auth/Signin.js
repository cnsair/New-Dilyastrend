import Animate from "../../components/Animate/Animate";
import Container from "../../components/Container/Container";
import Footer from "../../components/Footer/Footer";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FormProvider, useForm } from "react-hook-form";
import { username_validation } from "../../utils/inputValidation";

const Signin = () => {
  const methods = useForm();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  // submit login request ----> refactor to redux state later
  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
  });

  return (
    <Animate>
      <Container>
        <div className="p-6 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 md:gap-7 lg:gap-7 xl:gap-12 h-screen text-dark md:p-12 lg:p-12 xl:p-12">
          <div className="mt-12">
            <p className="font-bold text-2xl md:text-4xl lg:text-6xl xl:text-6xl mb-3 md:mb-3 lg:mb-6 xl:mb-6 leading-tight">
              Create, sell or collect digital items.
            </p>
            <p className="leading-normal font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua
              ut enim.
            </p>
          </div>
          <div className="mt-1 md:mt-12 lg:mt-12 xl:mt-12">
            <div className="flex justify-center">
              <div className="p-6 shadow-lg rounded-lg border w-96">
                <FormProvider {...methods}>
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    noValidate
                    autoComplete="off"
                  >
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
                        <Input {...username_validation} />
                      </div>
                    </div>

                    {/* password */}
                    <div className="form-control w-full mb-3">
                      <div className="relative">
                        <Input
                          placeholder="password"
                          id="password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          autoComplete="off"
                          validation={{
                            required: {
                              value: true,
                              message: "required",
                            },
                          }}
                        />
                        <span
                          onClick={() => setShowPassword((prev) => !prev)}
                          className="text-dark absolute top-1 my-3 right-5 cursor-pointer text-xl bg-transparent"
                        >
                          {showPassword ? <FaEye /> : <FaEyeSlash />}
                        </span>
                      </div>
                    </div>

                    {/* login button */}
                    <div className="w-full form-control">
                      <Button onClick={onSubmit}>Submit</Button>
                    </div>
                  </form>
                </FormProvider>

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
