import { MdArrowBack } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import Input from "../../components/atom/input/Input";
import { TypeInputProps } from "../../interface/input.type";
import Button from "../../components/atom/button/Button";
import { useState, useEffect } from "react";
import {getItem, setItem} from "../../helpers/localStorage/useLocalStorage";

const Login = () => {
  const [username, setUsername] = useState<string>('')
  const location = useLocation()

  useEffect(() => {
    const savedUsername = getItem<string>('username');
    if (savedUsername) {
      location.pathname === "/quiz"
    }
  }, [location]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  }

  const handleLogin = () => {
    setItem('username', username)
    window.location.href = "/quiz";
  }


  return (
    <>
      <div
        className="grid grid-cols-2"
        style={{
          background:
            "linear-gradient(to bottom, rgb(57, 195, 109), rgb(0, 0, 0))",
          height: "100vh",
          width: "100%",
        }}
      >
        <div className="section-padding w-full space-y-10">
          <h6 className="text-white">Logo</h6>
          <h3 className="mt-4 text-white">Sharpen your skills through Quiz!</h3>
          <div className="relative">
            <img
              src="/quiz.png"
              alt=""
              className="absolute top-0 w-[90%] min-w-md mx-auto"
            />
          </div>
        </div>
        <div className="bg-white w-full h-screen rounded-l-badge">
          <div className="section-padding">
            <Link to="/">
              <div className="flex gap-4 text-gray text-xs items-center">
                <MdArrowBack />
                <span className="font-bold">Back</span>
              </div>
            </Link>
            <h3>Welcome Back!</h3>
            <p className="sectionSmallText text-gray">
              Log in first with your name so that the system can summarize the
              values according to your name, OK!
            </p>
            <Input
              type={TypeInputProps.Text}
              placeholder="Username or Email"
              name="username"
              value={username}
              onChange={handleInputChange}
              className="mt-6 w-full"
            />
            <Button className="mt-4 w-full" onClick={handleLogin}>Login</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
