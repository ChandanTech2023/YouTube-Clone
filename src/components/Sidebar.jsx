import React from 'react'
import { IoMdHome } from 'react-icons/io'
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
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
    return (
        <div className='mt-3 ml-5 overflow-y-scroll overflow-x-hidden w-auto left-0 p-5 h-[calc(100vh-6.35rem)]'>
            {/* now render all components from array */}
            {
                sidebaritems.map((item, index) => {
                    // console.log(item);
                    return (
                        <div key={index} className='flex my-4'>
                            {item.icons}
                            <p className='ml-5'>{item.title} </p>
                        </div>
                    )

                })

            }

        </div>
    )
}

export default Sidebar