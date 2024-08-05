/* eslint-disable react/jsx-key */
/* eslint-disable no-extra-semi */
/* eslint-disable react-hooks/rules-of-hooks */
import AddMovie from './AddMovie';
import { IoCreateOutline } from "react-icons/io5";
import GetVideo from './GetVideo';
import { useState } from 'react';
import Header from '../Main/Header/Header';

export default function Create() {
  // For Display User video on OneClick:->>>>>>>>
  const [modal, setModal] = useState(false);
  

  // for show data from local storage to user page
  const toggle = () => setModal(!modal);


  return (
    <>
     <Header/>
      <div className='flex flex-row gap-2'>
        <div onClick={toggle} className="flex flex-row gap-3 text-xl font-bold bg-[#225777] text-white cursor-pointer mt-2 rounded-lg py-2 px-6 ml-5">
          <p>Add your Images here
          </p>
          <div className='mt-1'>
            <IoCreateOutline />
          </div>
        </div>

      </div>
      {<div className='flex w-full justify-center h-screen bg-[#0000]'>
        <AddMovie cleanpop={setModal} isopen={modal}/>
      </div >}
      <GetVideo/>

      


    </>
  )
};









