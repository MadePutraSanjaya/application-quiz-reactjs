interface ErrorMessageProps {
  children: React.ReactNode;
}

const ErrorMessage = ({ children }: ErrorMessageProps) => {
  return (
    <div className="w-full p-10 font-semibold mb-10 rounded-md bg-red-600 text-center text-white capitalize">
      {children}
    </div>
  );
};

export default ErrorMessage;
