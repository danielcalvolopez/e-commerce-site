const Button = ({ children, onSubmit, onClick, className, form }) => {
  return (
    <button
      type="submit"
      form={form}
      onSubmit={onSubmit}
      onClick={onClick}
      className={className}
    >
      {children}
    </button>
  );
};

export default Button;
