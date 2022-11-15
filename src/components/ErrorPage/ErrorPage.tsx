interface IErrorProps {
  message: string;
}

const ErrorPage: React.FC<IErrorProps> = ({ message }) => {
  return (
    <div className="error-text">
      <h1>Произошла ошибка</h1>
      <p>{message}</p>
    </div>
  );
};

export default ErrorPage;
