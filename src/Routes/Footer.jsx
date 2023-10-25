import React from 'react';

const Footer = () => {

   
        let currentYear = () => {
            let date = new Date();
            let currentYear = date.getFullYear();
            return currentYear;
            
        };
   
   

    return (
        <>
            <div className='w-full h-[10vh] flex justify-center'>
                <div className='w-2/3 flex justify-center'>
                    <p className='w-full flex justify-center items-center'>
                    &copy; Copyright {currentYear()}, FoodMates 
                    </p>
                </div>
            </div>
        </>

    )
}

export default Footer;