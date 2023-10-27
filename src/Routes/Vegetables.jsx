import { getDatabase, ref, get } from 'firebase/database';
import { database } from './../fbconfig';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const db = getDatabase();
const vegetablesRef = ref(db, 'categories/1/products');

export function Vegetables() {
    const [vegetablesData, setVegetablesData] = useState(null);

    useEffect(() => {
        get(vegetablesRef)
            .then((vegetablesData) => {
                if (vegetablesData.exists()) {
                    const data = vegetablesData.val();
                    setVegetablesData(data);
                } else {
                    console.log('No data available for Vegetables');
                }
            })
            .catch((error) => {
                console.error('Error getting Vegetables data:', error);
            });
    }, []);

    return (
        <div className='w-full bg bg-gray-100'>
            <div className='w-full flex flex-col items-center'>
                <div className='w-[90%] h-[10vh] mt-[5vh] flex justify-start items-center'>
                    <h1 className='text-[2rem]'>Vegetables</h1>
                </div>

                <div className='bg bg-white w-full h-[15vh] flex flex-col'>
                    <Link to="/categories">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                        </svg>
                    </Link>

                    <input type="text" placeholder='Search' className='w-[25%] h-[2rem] mt-12 ml-12 pl-4 border-b-2 rounded-md focus:outline-none' />
                </div>

                <div className='bg bg-white border border-black-400 flex flex-wrap justify-around border border-pink-500'>
                {vegetablesData && Object.keys(vegetablesData).map((vegetableId, index) => {
                    const vegetable = vegetablesData[vegetableId];
                    return (
                        <div key={vegetableId} className='shadow-xl rounded-md w-[20rem] h-[20rem] ml-4 mb-8 h-fit flex flex-col items-center mb-8'>
                            <div className='w-2/4 h-[30vh] flex justify-center'>
                                <img src={vegetable.imageUrl} alt="" className='object-contain w-full h-full' />
                            </div>
                            <h2>{vegetable.name}</h2>
                            <p>Date Harvested: {vegetable.dateHarvested}</p>
                            <p>Quantity: {vegetable.quantity}</p>
                        </div>
                    );
                })}
    
    
                </div>

            </div>
        </div>
    )
}
