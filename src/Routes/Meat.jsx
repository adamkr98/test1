import { getDatabase, ref, get } from 'firebase/database';
import { database } from './../fbconfig';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const db = getDatabase();
const meatRef = ref(db, 'categories/3/products');

export function Meat(){


    const [meatData, setMeatData] = useState(null);

    useEffect(() => {
        get(meatRef)
            .then((meatData) => {
                if (meatData.exists()) {
                    const data = meatData.val();
                    setMeatData(data);
                } else {
                    console.log('No data available for Meat');
                }
            })
            .catch((error) => {
                console.error('Error getting Meat data:', error);
            });
    }, []);

    return (
    <div>
        <div className='w-full flex flex-col items-center'>
            <div className='w-[90%] h-[10vh] mt-[5vh] flex justify-end items-center'>
                <h1 className='text-[2rem]'>Meat</h1>
            </div>            

            <div className='w-[90%] h-[15vh] flex flex-col'>
                <Link to="/categories">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                </svg>
                </Link>

                <input type="text" placeholder='Search' className='w-[25%] h-[2rem] mt-12 ml-12 pl-4 border-b-2 rounded-md focus:outline-none' />
            </div>

            <div className='w-[90%] h-[52vh] flex justify-center'>
                {meatData && Object.keys(meatData).map((meatId) => {
                    const meat = meatData[meatId];
                    return (
                        <div className='w-[100%] h-fit bg bg-gray-100 pt-8 flex justify-center overflow-hidden' key={meatId}>
                            <div key={meatId} className='w-full overflow-hidden flex flex-col items-center'>

                                <div className='w-2/4 h-[30vh] flex justify-center'>
                                    <img src={meat.imageUrl} alt="" className='object-contain w-full h-full' />
                                </div>
                                <h2>{meat.name}</h2>
                                <p>Date Harvested: {meat.dateHarvested}</p>
                                <p>Quantity: {meat.quantity}</p>
                                
                               
                            </div>
                        </div>
                    );
                })}
            </div>

    </div> 
    </div>
    )
}