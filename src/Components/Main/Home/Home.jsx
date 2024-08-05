/* eslint-disable no-unused-vars */
// import React from 'react'
// import ReactPlayer from 'react-player'
// import iron from './iron.jpg'
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header';


const Home = () => {
  
  const allPosts = useSelector((state) => state.RegisterUser.Allpost);
  // const Show = useSelector((state) => state.RegisterUser.Allpost);
  const userDetails = useSelector((state) => state.RegisterUser.RegisterUsers)
    const {id} = useParams()
    console.log("udaaaaaaaaaaa",userDetails);

  return (
    <>
    <Header/>
    <div className='flex justify-center gap-3 py-12'>
     
     
      {allPosts.length > 0 ? (
        allPosts.map((post) => (
          <div key={post.id} className=' shadow-lg border border-1 border-slate-200 rounded-lg'>
        <span className="text-sm font-semibold antialiased block leading-tight p-3 " >{post.username}</span>
            <img  src={post.Image} alt={post.Title} className='w-72 h-72 object-cover'/>
            {/* <p>{post.Count} Likes</p>
            <p>Comments: {post.comments}</p> */}
            <h2 className='p-3'>{post.Title}</h2>
          </div>
        ))
      ) : (
        <p>No posts available</p>
      )}
    </div>
     
      </>
  );
};

export default Home;

    

        
    //     <div className=' flex flex-wrap gap-2 justify-center mb-10 mt-5'>
    //         <video className='h-[400px] w-[400px]'  controls poster={iron}>
    //     <source src='https://cdn.pixabay.com/video/2023/03/14/154726-808562497_large.mp4'/>
    //     <h4 className=' text-lg italic ml-3 mt-1'> Shnow WaterFall</h4>
    // </video>
    //         <div>
    //             <ReactPlayer light controls url='https://cdn.pixabay.com/video/2023/03/14/154726-808562497_large.mp4' height={"400px"} width={"400px"} />
    //             <h4 className=' text-lg italic ml-3 mt-1'> Shnow WaterFall</h4>
    //         </div>
    //         <div>
    //             <ReactPlayer controls url='https://cdn.pixabay.com/video/2024/03/04/202982-919365848_large.mp4' height={"400px"} width={"400px"} />
    //             <h4 className=' text-lg italic ml-3 mt-1'>SunSet View </h4>

    //         </div>
    //         <div>
    //             <ReactPlayer controls url='https://cdn.pixabay.com/video/2024/03/12/203974-923133846_tiny.mp4' height={"400px"} width={"400px"} />
    //             <h4 className=' text-lg italic ml-3 mt-1'>Sea Site</h4>

    //         </div>
    //         <div>
    //             <ReactPlayer controls url='https://cdn.pixabay.com/video/2024/03/28/205923_tiny.mp4' height={"400px"} width={"400px"} />
    //             <h4 className=' text-lg italic ml-3 mt-1'>Flowers Garden</h4>


    //         </div>
    //         <div>

    //             <ReactPlayer controls url='https://cdn.pixabay.com/video/2023/11/29/191354-890134722_tiny.mp4' height={"400px"} width={"400px"} />
    //             <h4 className=' text-lg italic ml-3 mt-1'>Dron Shoots </h4>

    //         </div>
    //         <div>

    //             <ReactPlayer controls url='https://cdn.pixabay.com/video/2023/12/07/192357-892475199_tiny.mp4' height={"400px"} width={"400px"} />
    //             <h4 className=' text-lg italic ml-3 mt-1'>Sissu velly</h4>

    //         </div>
    //         <div>

    //             <ReactPlayer controls url='https://cdn.pixabay.com/video/2023/10/02/183271-870457542_tiny.mp4' height={"400px"} width={"400px"} />
    //             <h4 className=' text-lg italic ml-3 mt-1'>Moutain Train</h4>

    //         </div>
    //         <div>

    //             <ReactPlayer controls url='https://cdn.pixabay.com/video/2023/06/25/168787-839864519_tiny.mp4' height={"400px"} width={"400px"} />
    //             <h4 className=' text-lg italic ml-3 mt-1'>Gulmarg</h4>

    //         </div>
    //         <div>

    //             <ReactPlayer controls url='https://cdn.pixabay.com/video/2023/03/14/154726-808562497_large.mp4' height={"400px"} width={"400px"} />
    //             <h4 className=' text-lg italic ml-3 mt-1'>WaterFall</h4>

    //         </div>
    //         {/* <ReactPlayer controls  url='https://cdn.pixabay.com/video/2023/03/14/154726-808562497_large.mp4' height={"400px"} width={"400px"} clas /> */}
    //     </div>
    

