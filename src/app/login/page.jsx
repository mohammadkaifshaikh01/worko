"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const AuthComponent = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const validateForm = () => {
    if (!email.includes("@") || email.length < 5) {
      return false;
    }
    if (password.length < 6) {
      return false;
    }
    if (isSignUp && password !== confirmPassword) {
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const apiKey = "AIzaSyC3W1Va7SMAECbc9HiwcDoH7-vf0wPWOHc";
    try {
      let response;
      if (isSignUp) {
        response = await axios.post(
          `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`,
          {
            email,
            password,
            returnSecureToken: true,
          }
        );
        console.log("Sign-Up Successful", response.data);
      } else {
        response = await axios.post(
          `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,
          {
            email,
            password,
            returnSecureToken: true,
          }
        );
        console.log("Login Successful", response.data);
      }
      router.push("/home");
    } catch (error) {
      console.error("Authentication error:");
    }
  };

  return (
    <div className="flex justify-center items-center p-4 sm:p-8 min-h-screen bg-gray-200 bg-[url('/images/loginbackground.png')] bg-cover bg-center">
      <div className="bg-white w-[30rem] max-w-2xl p-8 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800">
          {isSignUp ? "Signup to Create an Account" : "Welcome Back!"}
        </h1>

        <div className="mt-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {isSignUp && (
              <div className="mb-4">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
            )}
            <div className="mb-6">
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
              >
                {isSignUp ? "Signup" : "Login"}
              </button>
            </div>
            {!isSignUp && (
              <div className="text-center">
                <a href="#" className="text-blue-600 text-sm hover:underline">
                  Forgot password?
                </a>
              </div>
            )}
            <div className="text-center mt-4 text-sm">
              {isSignUp ? (
                <>
                  Already have an account? {" "}
                  <button
                    type="button"
                    className="text-blue-600 hover:underline"
                    onClick={() => setIsSignUp(false)}
                  >
                    Login now
                  </button>
                </>
              ) : (
                <>
                  Not a member? {" "}
                  <button
                    type="button"
                    className="text-blue-600 hover:underline"
                    onClick={() => setIsSignUp(true)}
                  >
                    Signup now
                  </button>
                </>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthComponent;
