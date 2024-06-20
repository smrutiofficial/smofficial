import React, { useState, useEffect } from "react";
import "../app/globals.css";
import Nav from "../components/Nav";
import Image from "next/image";
import { RiInstagramLine } from "react-icons/ri";
import { BsTwitter } from "react-icons/bs";
import { VscGithubInverted } from "react-icons/vsc";
import { IoLogoLinkedin } from "react-icons/io5";
import { useRouter } from "next/router";

import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { loading, error } = useSelector((state: any) => state.user);
  const currentUser = useSelector((state: any) => state.user.currentUser);
  useEffect(() => {
    if (currentUser) {
      router.push("/");
    }
  }, [currentUser, router]);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handlesubmit = async (e: any) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Failed to sign in");
      }
      // Navigate to home page after successful authentication
      dispatch(signInSuccess(data));

      router.push("/");
      // console.log(data)
    } catch (err) {
      dispatch(signInFailure(err));
    }
  };
  const handleClick = {
    register: () => router.push("/register"),
  };
  return (
    <section className="h-screen w-screen overflow-hidden bg-[#5D5B9A] flex justify-center items-center">
      <Nav />
      <div className=" w-[80%] h-[85%] flex items-center relative">
        <div className="bg-[#B2B3DE] w-[85%] pl-[12%] h-[85%] cpath flex flex-col justify-center relative">
          <p className="text-[7rem] mt-[2%]  tracking-extrawide font-black text-[#373559] ">
            BLOG
          </p>
          <div className="w-[60%] h-[80%] mb-[5%] overflow-hidden">
            <Image
              className="w-full h-full"
              src="/char.svg"
              alt=""
              width={100}
              height={100}
            />
          </div>

          <div className="bg-[#ffffff] h-fit w-fit absolute z-5 top-[50%] left-[6%] flex justify-center items-center socialop">
            <div className="relative w-[90%] my-1 text-[#e2e3fe] bg-[#373559] flex flex-col justify-center items-center gap-4 py-6 px-4 text-2xl socialop">
              <VscGithubInverted />
              <IoLogoLinkedin />
              <RiInstagramLine />
              <BsTwitter />
            </div>
          </div>
        </div>
        {/* main login section */}
        <div className="cpath_2 absolute bg-[#373559] w-[35%] h-[80%] right-0 transform translate-y-[6rem] flex flex-col items-center pt-[3rem]">
          <div className="w-[80%] text-[#B2B3DE]">
            <p className="text-4xl font-bold mb-10">Login</p>
            <p className="mb-5">
              Hello, friends! I&apos;m Smarttime - task manager you can trust
              everything. Let’s get in touch !
            </p>
            <form onSubmit={handlesubmit}>
              <input
                className="w-full h-[2.8rem] text-[#373559] px-4 bg-[#B2B3DE] inputc"
                type="text"
                id="email"
                placeholder="Email"
                onChange={handleChange}
              />
              <br />
              <br />
              <input
                className="w-full text-[#373559] px-4 h-[2.8rem] bg-[#B2B3DE] inputc"
                type="password"
                id="password"
                placeholder="Password"
                onChange={handleChange}
              />
              <br />
              <div className="mb-[2rem] mt-[2rem] bg-[#B2B3DE] text-black px-5 py-3 w-[10rem] h-[3rem] flex flex-col justify-center items-center relative inputbtn">
                <div className="bg-[#373559] w-[95%] h-[90%] absolute flex text-center items-center justify-center inputbtn">
                  <button
                    disabled={loading}
                    className="text-[#B2B3DE] font-bold disabled:opacity-40"
                  >
                    {" "}
                    {loading ? "Loading ..." : "Lets getin"}
                  </button>
                </div>
              </div>
            </form>
            <div className="flex justify-center items-center mb-5">
              <button className="bg-[#5d5b9a] w-[16rem] h-[3rem]">
                Continue with Google
              </button>
            </div>
            <p className="text-red-400">
              {error ? error.message || "Something went wrong!" : ""}
            </p>

            <p>
              don&apos;t have an account ?
              <span
                onClick={handleClick.register}
                className="font-bold cursor-pointer"
              >
                {" "}
                Register
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
