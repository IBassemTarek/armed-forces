import { Fragment, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Input } from "../components/input";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    // alert(`Email: ${email} Password: ${password}`);
    navigate("/dashboard");
  };
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  return (
    <Fragment>
      <Helmet>
        <title>Login Page</title>
      </Helmet>
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="p-5 bg-white rounded-md w-full mx-3 md:w-[80%] lg:w-[40%] 2xl:w-[30%]">
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="bg-gray-400 w-32 h-32 rounded-full flex mx-auto mb-2" />
            <h4 className="text-center text-black text-md">محرك بحث اللواء</h4>
            <div className="flex flex-col">
              <Input
                isEmail={true}
                isPassword={false}
                label={"المستخدم"}
                onChange={(event) => setEmail(event.target.value)}
                key={"email"}
              />
              <Input
                isEmail={false}
                isPassword={true}
                label={"كلمه المرور"}
                onChange={(event) => setPassword(event.target.value)}
                key={"password"}
              />
            </div>
            <button
              type="submit"
              className="bg-black text-white p-2 rounded-md mt-2 mx-auto w-[40%] font-bold font-sans"
            >
              تسجيل الدخول
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
}

export default Login;
