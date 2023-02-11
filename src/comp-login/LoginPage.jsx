import React from "react";
import Footer from "../comp-commons/Footer";
import BaseInput from "../comp-commons/BaseInput";

const LoginPage = () => {
  return (
    <div className="bg-secondary text-greyscale1 pt-24 flex flex-col h-screen">
      <div className="flex-grow">
        <h1 className="text-center mb-8">SIGN IN TO YOUR ACCOUNT</h1>
        <div className="bg-white rounded-2xl w-[792px] h-[400px] mx-auto py-[60px] px-[100px]">
          <h3 className="mb-[51px]">
            Have an account? <span className="underline">Log in.</span>
          </h3>
          <BaseInput
            type="string"
            id="email"
            value=""
            handleChange=""
            required={true}
            placeholder="Email Address"
            className=" mb-[36px]"
          />
          <BaseInput
            type="password"
            id="password"
            value=""
            handleChange=""
            required={true}
            placeholder="Password"
          />
        </div>
      </div>

      {/* Section 3: Footer */}
      <Footer />
    </div>
  );
};

export default LoginPage;
