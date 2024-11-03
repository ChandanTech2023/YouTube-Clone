import React from 'react'
import { IoMdHome } from 'react-icons/io'
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { useSelector } from 'react-redux';
// import Store from '../Utility/Store';

//Create arr for reuse component 
const sidebaritems = [
    {
        icons: <IoMdHome size="24px" />,
        title: "Home"
    },
    {
        icons: <SiYoutubeshorts size="24px" />,
        title: "Shorts"
    },
    {
        icons: <MdOutlineSubscriptions size="24px" />,
        title: "Subscriptions"
    },
    {
        icons: <IoMdHome size="24px" />,
        title: "Home"
    },
    {
        icons: <SiYoutubeshorts size="24px" />,
        title: "Shorts"
    },
    {
        icons: <MdOutlineSubscriptions size="24px" />,
        title: "Subscriptions"
    },
    {
        icons: <IoMdHome size="24px" />,
        title: "Home"
    },
    {
        icons: <SiYoutubeshorts size="24px" />,
        title: "Shorts"
    },
    {
        icons: <MdOutlineSubscriptions size="24px" />,
        title: "Subscriptions"
    },
    {
        icons: <IoMdHome size="24px" />,
        title: "Home"
    },
    {
        icons: <SiYoutubeshorts size="24px" />,
        title: "Shorts"
    },
    {
        icons: <MdOutlineSubscriptions size="24px" />,
        title: "Subscriptions"
    },
    {
        icons: <IoMdHome size="24px" />,
        title: "Home"
    },
    {
        icons: <SiYoutubeshorts size="24px" />,
        title: "Shorts"
    },
    {
        icons: <MdOutlineSubscriptions size="24px" />,
        title: "Subscriptions"
    },
    {
        icons: <IoMdHome size="24px" />,
        title: "Home"
    },
    {
        icons: <SiYoutubeshorts size="24px" />,
        title: "Shorts"
    },
    {
        icons: <MdOutlineSubscriptions size="24px" />,
        title: "Subscriptions"
    },
]
function Sidebar() {
    // const open =false ;
    const open = useSelector((store)=>store.app.open)
    // console.log(open);
    
    return (
        <div className='relative mt-0 ml-5 overflow-y-scroll overflow-x-hidden p-3 h-[calc(100vh-6.35rem)]'>
            {/* now render all components from array */}
            {
                sidebaritems.map((item, index) => {
                    // console.log(item);
                    return (
                        <div key={index} className='flex mt-2 '>
                            {item.icons}
                            <p className={`ml-5 ${open?"":'hidden'}`}>{item.title} </p>
                        </div>
                    )

                })

            }

        </div>
    )
}

export default Sidebar