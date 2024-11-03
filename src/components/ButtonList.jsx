import React from 'react'
//Create reauseable button 
const buttonList = ["All", "Javascript", "Music", "Live", "Software Engineering",
                     "Comedy", "Vlogs", "Java","T-series", "dramedy", "Music" ];


const ButtonList = () => {
    return (
        <div>
            {
                buttonList.map((buttonName, index) => {
                    return <button key={index} className='bg-gray-400 px-4 py-1 mx-2 font-normal rounded-full'>
                        {buttonName}</button>
                })
            }

        </div>
    )
}

export default ButtonList