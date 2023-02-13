import React, { useState } from "react";
import Footer from "../comp-commons/Footer";
import BaseInput from "../comp-commons/BaseInput";
import BaseButton from "../comp-commons/BaseButton";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleChange(inputId, inputVal) {
    if (inputId === "email") {
      setEmail(inputVal);
    } else if (inputId === "password") {
      setPassword(inputVal);
    }
  }

  return (
    <div className="bg-secondary text-greyscale1 pt-24 flex flex-col 2xl:h-screen">
      <div className="2xl:flex-grow">
        <h1 className="text-center mb-8">SIGN IN TO YOUR ACCOUNT</h1>
        <div className="bg-white rounded-2xl w-[792px] mx-auto py-[60px] px-[100px]">
          <p className="mb-[51px]">
            Don't have an account?{" "}
            <span className="underline">Sign up here.</span>
          </p>
          <BaseInput
            type="string"
            id="email"
            value={email}
            handleChange={handleChange}
            required={true}
            placeholder="Email Address"
            className="mb-[36px]"
          />
          <BaseInput
            type="password"
            id="password"
            value={password}
            handleChange={handleChange}
            required={true}
            placeholder="Password"
            className="mb-3"
          />
          <p className="underline mb-14">Forgot Password?</p>
          <BaseButton label="Sign In" colour="red" />
        </div>
      </div>

      {/* Section 3: Footer */}
      <Footer />
    </div>
  );
};

export default LoginPage;
