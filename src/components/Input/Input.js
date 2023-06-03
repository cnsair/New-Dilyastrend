import { useFormContext } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import { isFormInvalid, findInputError } from "../../utils/index";

const Input = ({ type, placeholder, name, id, autoComplete, validation }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const inputError = findInputError(errors, name);
  const isInvalid = isFormInvalid(inputError);

  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        id={id}
        autoComplete={autoComplete}
        className="input input-bordered w-full text-dark text-sm opacity-80 shadow bg-transparent focus:outline-0 hover:shadow-sm mb-2"
        {...register(name, validation)}
      />

      {/* error */}
      <div>
        <AnimatePresence mode="wait" initial={false}>
          {isInvalid && (
            <InputError
              message={inputError.error.message}
              key={inputError.error.message}
            />
          )}
        </AnimatePresence>
      </div>
    </>
  );
};
export default Input;

const InputError = ({ message }) => {
  return (
    <motion.p className="text-danger text-xs" {...framer_error}>
      {message}
    </motion.p>
  );
};

const framer_error = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
};
