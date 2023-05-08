const Input = ({ type, placeholder, onChange }) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        autoComplete="off"
        className="input input-bordered w-full text-dark text-sm opacity-80 shadow bg-transparent  focus:outline-0 hover:shadow-sm mb-2"
      />
    </>
  );
};

export default Input;
