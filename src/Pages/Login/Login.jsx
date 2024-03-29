import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/osley- (2)_prev_ui.png";
import { BsEyeFill, BsEyeSlashFill, BsGoogle } from "react-icons/bs";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const { logInUser ,googleLogIn} = useContext(AuthContext);
  const [error, setError] = useState(null);
  const [isShow, setIsShow] = useState(false);
  const navigate = useNavigate();
  const location = useLocation()

  const handleSubmitBtn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    logInUser(email, password)
      .then((result) => {
        console.log(result);
        toast.success("Login success!!!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        if (err.code === "auth/invalid-credential") {
         return setError("incorrect password");
        }
        return setError(err);
      });
  };

  const handleGoogleBtn = () => {
    googleLogIn()
      .then((result) => {
        const users = result.user;
        toast.success("User google login successfully!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        navigate(location?.state ? location.state : "/");
        console.log(users);
      })
      .catch((err) => {
        const errorMessage = err.message;
        toast.error(errorMessage, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
  };

  return (
    <div className="px-6">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h- w-auto" src={logo} alt="Your Company" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmitBtn} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 "
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="your Email"
                  className="block pl-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6"
                >
                  Password
                </label>
              </div>
              <div className="mt-2 flex items-center justify-center">
                <input
                  id="password"
                  name="password"
                  type={isShow ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  placeholder="Your Password"
                  className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                 <div onClick={() => setIsShow(!isShow)} className="-ml-8">
                    {isShow ? (
                      <BsEyeFill className="text-xl" />
                    ) : (
                      <BsEyeSlashFill className="text-xl" />
                    )}
                  </div>
              </div>
              
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <div className="mt-10 text-center text-sm text-gray-500">
            New here to Please ?
            <button className="btn btn-link">
              <Link to="/register">Register</Link>
            </button>
            {error && (
              <p className="text-bold text-red-500 mb-8 px-4">{error}</p>
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="text-center">
          <button onClick={handleGoogleBtn} className="btn btn-outline btn-primary">
            <BsGoogle className="text-red-500" />
            Log in with
            <div>
              <span className="text-[#008744]">G</span>
              <span className="text-red-500">o</span>
              <span className="text-[#ffa700]">o</span>
              <span className="text-[#008744]">g</span>
              <span className="text-[#009955]">l</span>
              <span className="">e</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
