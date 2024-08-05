/* eslint-disable react/jsx-key */
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { userDeletes } from "../../Feature/Register";
import { toast } from "react-toastify";
// eslint-disable-next-line no-unused-vars

export default function AD_userlist() {
  const ImageData = useSelector((state) => state.RegisterUser.RegisterUsers);
  const dispatch=useDispatch();
  console.log("reggggg", ImageData);


  function userDelete(id) {
    dispatch(userDeletes({
      userId: id
  }));
        console.log("idddd>>>",id)

      
  }

  return (
    <>
      {/* <AdminAside /> */}
      <div>
        <table className="mt-9 w-[40%] rounded-md">
          <thead className="bg-[#225777] text-white h-[50px]">
            <tr className="">
              <th className="">USER NAME</th>
              <th className="">Email</th>
              <th className="">PASSWORD</th>
              <th className="">
                <span className="text-xl font-semibold"></span> DELETE
              </th>
              <th className=""></th>
            </tr>
          </thead>
          {ImageData.map((data) => {
            console.log("daaaaataaa", data);

            console.log("name", data.username);
            return (
              <tbody key={data.id} 
                    className="text-black text-lg font-semibold h-[50px]"
                  >
                    <tr className="text-center hover:bg-slate-200">
                      <td className="text-black">{data.username}</td>
                      <td className="text-black">{data.Email}</td>

                      <td><input type="password" value={data.Password} readOnly className="text-center outline-none bg-inherit"/></td>

                      <td>
                      <MdDelete 
                      className="text-2xl ml-3 cursor-pointer text-black"
                      onClick={()=>{userDelete(data.id),
                        toast.success("User Is Remove!", {
                          position: "top-right"
                        });
                      }}
                      
                      />
                       
                      </td>
                    </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </>
  );
}






// <div className="flex flex-col items-center py-4">
// <h1 className="text-2xl font-bold mb-4">User Posts</h1>
// <div className="flex flex-wrap justify-center gap-4 max-w-6xl">
//   {allPosts.length > 0 ? (
//     allPosts.map((post) => (
//       <div
//         key={post.id}
//         className="shadow-lg border border-1 border-slate-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 max-w-xs"
//       >
//         <span className="text-sm font-semibold block leading-tight p-3 bg-gray-100">
//           {post.username}
//         </span>
//         <img
//           src={post.Image}
//           alt={post.Title}
//           className="w-full h-48 object-cover"
//         />
//         <div className="p-3">
//           <h2 className="text-lg font-bold mb-2">{post.Title}</h2>
//         </div>
//         <div>
//           <div
//             onClick={() => toggle(post)}
//             className="font-semibold text-sm cursor-pointer"
//           >
//             {post.count} likes
//           </div>

//           {selectedPost && (
//             <Modal isOpen={modal} toggle={toggle}>
//               <ModalHeader toggle={toggle}>User Likes</ModalHeader>
//               <div className="p-3">
//                 {selectedPost.userlike.map((data, index) => (
//                   <p key={index}>{data}</p>
//                 ))}
//               </div>
//             </Modal>
//           )}
//         </div>
//         <div className="font-semibold text-sm p-3">
//           Comments ({post.comments.length}):
//           <div className="pl-2">
//             {post.comments.map((data, index) => (
//               <p key={index}>{data}</p>
//             ))}
//           </div>
//         </div>
//       </div>
//     ))
//   ) : (
//     <p className="text-gray-500">No posts available</p>
//   )}
// </div>
// </div>
