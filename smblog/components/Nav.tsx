import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/user/userSlice.js";

const Nav = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { pathname } = router;

  const isAuthPage = pathname === "/login" || pathname === "/register";
  const islogin = pathname === "/login";
  const isregister = pathname === "/register";

  // Get the current user from the Redux store
  const currentUser = useSelector((state: any) => state.user.currentUser);

  const handleLogout = () => {
    // Dispatch the logout action to clear the user from Redux state
    dispatch(logout());

    // Remove the user from localStorage
    localStorage.removeItem("persist:root");

    // Redirect to the login page
    router.push("/login");
  };

  const handleClick = {
    home: () => router.push("/"),
    login: () => router.push("/login"),
    register: () => router.push("/register"),
  };

  return (
    <nav className="flex flex-row px-32 py-2 justify-between items-center fixed top-0 left-0 w-full bg-opacity-25 backdrop-blur-md border border-opacity-25 border-solid border-white rounded-lg ">
      <div onClick={handleClick.home} className="logo cursor-pointer">
        <p className="text-3xl text-[#373559] font-bold">
          Smruti
          <span
            className={`font-bold ${isAuthPage ? "text-[#B2B3DE]" : "text-[#5d5b9a]"}`}
          >
            .Blog
          </span>
        </p>
      </div>
      <div className="flex flex-row justify-center items-center gap-6 h-auto rcomp">
        <button className="px-10 py-3 bg-[#B2B3DE] text-[#373559] font-bold custom-clip-path ">
          Portfolio
        </button>
        <button
          onClick={handleLogout}
          className={`px-10 py-3 bg-[#B2B3DE] text-[#373559] font-bold custom-clip-path  ${isAuthPage ? "hidden" : ""}  `}
        >
          Logout
        </button>
        <button
          onClick={handleClick.login}
          className={`px-10 py-3 
                ${islogin ? "text-[#B2B3DE] bg-[#373559]" : "bg-[#B2B3DE] text-[#373559]"} 
                ${!isAuthPage ? "hidden" : ""} 
                font-bold custom-clip-path `}
        >
          Signin
        </button>
        <button
          onClick={handleClick.register}
          className={`px-10 py-3
                 ${isregister ? "text-[#B2B3DE] bg-[#373559]" : "bg-[#B2B3DE] text-[#373559]"} 
                 ${!isAuthPage ? "hidden" : ""} 
                 font-bold custom-clip-path `}
        >
          Signup
        </button>
        <div
          className={`flex flex-row justify-center items-center gap-5 profile ${isAuthPage ? "hidden" : ""}`}
        >
          <div className="bg-[#373559] w-12 h-12 overflow-hidden pic">
            <Image
              className="w-full h-full object"
              width={100}
              height={100}
              src={
                currentUser && currentUser.avatar
                  ? currentUser.avatar
                  : "/emptypic.png"
              }
              alt=""
              // layout="fill"
            />
          </div>
          <p className={`text-xl font-medium`}>
            {currentUser ? currentUser.username : ""}
          </p>
          <p>
            <IoIosArrowDown />
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

