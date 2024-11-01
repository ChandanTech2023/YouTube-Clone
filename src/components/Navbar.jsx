import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiVideoOn } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import Avatar from 'react-avatar';

function Navbar() {
  return (
    <div className="w-[100%] flex fixed top-0 justify-center items-center z-10 bg-white">
      <div className="flex items-center justify-between w-[95%] ">
        <div className='flex items-center'>
          <RxHamburgerMenu className="mr-5"  size={"20px"}/>
          {/* Youtube logo  */}
          <img width={"70px"} src="Images/YouTube_Logo.png" alt="Youtube-logo" />
          
        </div>
        <div className="flex items-center w-[40vw]  mt-3">
          <div className=" w-[100%] py-1 px-4 border border-gray-400 rounded-l-full">
            <input type="text"className="w-full outline-none"
            placeholder="Search" />
          </div>
          <button className="py-1 border border-gray-400 rounded-r-full px-4  bg-slate-200"><CiSearch size={"24px"}/></button>
            <IoMdMic size={"27px"} className="ml-2 bg-slate-200 rounded-full cursor-pointer"/>

        </div>
        <div className="flex items-center w-[10%] justify-between">
          <IoIosNotificationsOutline size={"25px"} />
          <CiVideoOn size={"25px"}/>
          <Avatar src="Images/profile.png" size={"30px"} round={true} />
        </div>
      </div>
    </div>
  )
}

export default Navbar