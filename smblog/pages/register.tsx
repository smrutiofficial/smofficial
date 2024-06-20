import React, { useState, useEffect } from "react";
import "../app/globals.css";
import Nav from "../components/Nav";
import Image from "next/image";
import { RiInstagramLine } from "react-icons/ri";
import { BsTwitter } from "react-icons/bs";
import { VscGithubInverted } from "react-icons/vsc";
import { IoLogoLinkedin } from "react-icons/io5";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const Register = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const currentUser = useSelector((state: any) => state.user.currentUser);
  useEffect(() => {
    if (currentUser) {
      router.replace("/");
    }
  }, [currentUser, router]);

  const handlesubmit = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setLoading(false);
      // setError(false);
      if (data.success === false) {
        setError(true);
        return;
      }
      router.push("/login");
      // console.log(data)
    } catch (err) {
      setLoading(false);
      setError(true);
    }
  };
  const handleClick = {
    login: () => router.push("/login"),
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
            <p className="text-4xl font-bold mb-10">Register</p>
            <p className="mb-5">
              Hello, friends! I&apos;m Smarttime - task manager you can trust
              everything. Let’s get in touch !
            </p>
            <form onSubmit={handlesubmit}>
              <input
                className="w-full h-[2.8rem] text-[#373559] px-4 bg-[#B2B3DE] mt-5 inputc"
                type="text"
                id="username"
                placeholder="Name"
                onChange={handleChange}
              />
              <br />
              <br />
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

              <div className="mb-4 mt-[2rem] bg-[#B2B3DE] text-black px-5 py-3 w-[10rem] h-[3rem] flex flex-col justify-center items-center relative inputbtn">
                <div className="bg-[#373559] w-[95%] h-[90%] absolute flex text-center items-center justify-center inputbtn">
                  <button
                    disabled={loading}
                    className="text-[#B2B3DE] font-bold disabled:opacity-40"
                  >
                    {" "}
                    {loading ? "Loading ..." : "Lets start"}
                  </button>
                </div>
              </div>
              <div className="flex justify-center items-center mt-5 mb-4">
                <button className="bg-[#5d5b9a] w-[16rem] h-[3rem]">
                  Continue with Google
                </button>
              </div>
            </form>
            <p className="text-red-400">{error && "Something went wrong!"}</p>

            <p>
              already have an account ?
              <span
                onClick={handleClick.login}
                className="font-bold cursor-pointer"
              >
                {" "}
                login
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
