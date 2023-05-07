const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="btn bg-dark normal-case hover:shadow-xl bg-purple hover:bg-purple rounded-md hover:border-transparent border-transparent px-5 text-white"
    >
      {children}
    </button>
  );
};

export default Button;
