import { Icon } from "@iconify/react";
import { useState } from "react";
import ProfileInformation from "./components/ProfileInformation";
import Friends from "./components/Friends";


const Profile = () => {

  const [content, setContent] = useState("profile");

  return (
    <div className=" ">
      <div className="relative flex flex-col items-center justify-center w-full text-black py-16">
        <div className="absolute w-full opacity-40 blur-sm dark:opacity-40 h-[250px]" style={{ backgroundImage: "url(/images/bg-profile.png)" }}></div>
        <div className="container mx-auto  gap-8 flex items-start">
          <div className="relative w-32 h-32 bg-[#9FEF00] rounded-full flex justify-center items-center ">
            <img src="/images/ibenmain.jpg" alt="avatar" className="object-cover w-[94%] h-[94%] rounded-full" />
          </div>
          <div className=" flex flex-col justify-evenly h-full z-10 font-medium">
            <h1 className="dark:text-white leading-9 text-[30px]">Benmaina Issam</h1>
            <h3 className="dark:text-white font-medium">Student</h3>
            <div className="">
              <div className="flex gap-2">
                <button className="flex items-center  justify-center p-2 gap-3 w-36 rounded-sm bg-[#9fef00] ">
                  {/*need Thread Wallets Laptop Sleeve icon */}
                  <Icon icon="mdi:plus" />
                  <span>add company</span>
                </button>
                <button className="flex items-center justify-center p-2 gap-3 w-36 rounded-sm bg-[#9fef00] ">
                  <Icon icon="mdi:graduation-cap" />
                  <span>add school</span>
                </button>
                <button className="flex items-center justify-center  p-2 gap-3 w-36 rounded-sm bg-[#9fef00]  ">
                  <Icon icon="mdi:pencil" />
                  <span>Moroco</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto w-full">
        <div className="flex gap-40 p-2">
          <button onClick={() => { setContent("profile") }} className={`${content === "profile" ? "text-[#9fef00]" : "dark:text-white"} text-lg font-medium`}>Profile</button>
          <button onClick={() => { setContent("friends") }} className={`${content === "friends" ? "text-[#9fef00]" : "dark:text-white"} text-lg font-medium`}>Friends</button>
        </div>
        {content === "profile" ? <ProfileInformation /> : <Friends />}
      </div>
    </div>
  );
}

export default Profile;