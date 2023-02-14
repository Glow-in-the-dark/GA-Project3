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

  // Setting the Function to call API ---------
  async function postData(url, data) {
    // Default options are marked with *
    // console.log(url);
    // console.log(data);
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("button workingggg");
    // console.log(email);
    // console.log(password);

    const pwMinimalLength = 8;

    if (password.length >= pwMinimalLength) {
      // if all the input's validity check passed, proceed to call API to send Data

      // func to call API
      postData("http://127.0.0.1:5002/users/login", {
        email: email,
        password: password,
      }).then((responseDataReturned) => {
        console.log(responseDataReturned);
        const accessToken = responseDataReturned.access;
        const refreshToken = responseDataReturned.refresh;
        console.log(accessToken);
        console.log(refreshToken);
        localStorage.setItem("accessTk", accessToken);
        localStorage.setItem("refreshTk", refreshToken);
      });
    } else {
      console.log(`Error, password is < ${pwMinimalLength} characters`);
    }
  };

  return (
    <div className="bg-secondary text-greyscale1 pt-24 flex flex-col 2xl:h-screen">
      <div className="2xl:flex-grow">
        <h1 className="text-center mb-8">SIGN IN TO YOUR ACCOUNT</h1>
        <div className="bg-white rounded-2xl w-[792px] mx-auto py-[60px] px-[100px]">
          <p className="mb-[51px]">
            Don't have an account?{" "}
            <span className="underline">Sign up here.</span>
          </p>
          <form onSubmit={handleSubmit}>
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
            <BaseButton type="submit" label="Sign In" colour="red" />
          </form>
        </div>
      </div>

      {/* Section 3: Footer */}
      <Footer />
    </div>
  );
};

export default LoginPage;
