/* eslint-disable no-undef */
/* eslint-disable no-constant-condition */
/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import { CiHeart } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { useEffect, useState } from "react";
import { DeleteComment, likeVideo, removeUserImage } from "../Feature/Register";
import { ToastContainer, toast } from "react-toastify";
import { Modal, ModalHeader } from "reactstrap";


function GetVideo() {
  const ImageData = useSelector((state) => state.RegisterUser.RegisterUsers);
  const [postData, setPostData] = useState([]);
  console.log("object", ImageData)
  const [id, setId] = useState("");
  const dispatch = useDispatch();

  const [activePostId, setActivePostId] = useState(null);

  const toggle = (postId) => {
    setActivePostId(activePostId === postId ? null : postId);
  };

  useEffect(() => {
    const data = localStorage.getItem("userLoginData");
    const userId = JSON.parse(data);

    setId(userId?.id);

    const findId = ImageData.find((data) => data.id === userId?.id);

    if (findId) {
      setPostData(findId.Post);
    }
  }, [ImageData]);

  console.log("postData", postData);

  function RemoveImage(userId, postId) {
    console.log(`Removing image for userId: ${userId} and postId: ${postId}`);
    dispatch(removeUserImage({ userId, postId }));
  }

  function like(postId) {
    dispatch(likeVideo({ postId, userId: id }));
    console.log("pppppppppppppp", postId);

  }

  function deleteComment(postId, commentId, Uname, username) {
    dispatch(
      DeleteComment({
        postId: postId,
        commentId: commentId,
        userId: id,
        username: Uname,
        loginUserName: username,
      })
    );
  }


  return (
    <div className="mt-5 flex flex-wrap gap-6 justify-center">
      {postData.length > 0 ? (
        postData?.map((data) => (
          <div
            key={data.id}
            className="bg-gray-100 p-5 rounded-lg shadow-md w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
          >
            <div className="bg-white border rounded-lg overflow-hidden">
              <div className="flex items-center px-4 py-3 border-b">
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  src={data.Image}
                  alt="User"
                />
                <div className="ml-3 flex-1">
                  <span className="text-sm font-semibold antialiased block leading-tight">
                    {data.username}
                  </span>
                </div>
                <div className="flex">
                  <MdDelete
                    className="text-2xl cursor-pointer text-red-500"
                    onClick={() => {
                      RemoveImage(id, data.id), toast.success("User Post Is Deleted Successfully!", {
                        position: "top-right",
                      });

                    }}
                  />
                </div>
              </div>
              <img
                src={data.Image}
                className="w-full h-full object-cover"
                alt="Post"
              />
              <div className="p-4">
                <span className="text-lg font-semibold antialiased block">
                  {data.Title}
                </span>
                <div className="flex items-center justify-between mt-2">
                  <div
                    className="font-semibold text-sm cursor-pointer mt-2"
                    onClick={() => toggle(data.id)}
                  >
                    {data.count} likes
                  </div>
                  <Modal
                          isOpen={activePostId === data.id}
                          toggle={() => toggle(data.id)}
                          centered
                        >
                          <ModalHeader toggle={() => toggle(data.id)}>
                            Likes
                          </ModalHeader>
                          {data?.userlike?.map((items, index) => (
                            <p
                              className="text-blue-700 font-semibold ml-4 p-1"
                              key={index}
                            >
                              {items}
                            </p>
                          ))}
                        </Modal>
                </div>
                <h4 className="mt-4 font-bold text-lg">Comments</h4>
                <ol className="mt-2">
                  {data.comments?.map((comment, index) => (
                    <li
                      key={index}
                      className="mb-2 text-sm border rounded-lg p-2 bg-gray-50"
                    >
                      <h4 className="text-blue-800 font-semibold ">
                        <strong>{comment.username}</strong>
                      </h4>
                      <div className="flex items-center justify-between mt-2">
                        <p className="bg-white p-2 rounded-lg   ">
                          {comment.text}
                        </p>
                        <p className="text-lg cursor-pointer">
                          <MdDelete
                            onClick={() =>
                              deleteComment(
                                data.id,
                                comment.id,
                                data.username,
                                comment?.username
                              )
                            }
                          />
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>NO Images </p>

      )}

    </div>
  );
}

export default GetVideo;
