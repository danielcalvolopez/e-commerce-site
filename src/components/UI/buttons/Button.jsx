const Button = ({ children, onSubmit, onClick, className }) => {
  return (
    <div onSubmit={onSubmit} onClick={onClick} className={className}>
      {children}
    </div>
  );
};

export default Button;
