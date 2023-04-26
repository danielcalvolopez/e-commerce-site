const Form = ({ onSubmit, children, className, id }) => {
  return (
    <form id={id} className={className} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default Form;
