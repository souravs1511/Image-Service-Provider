/* eslint-disable no-undef */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */

import { useDispatch, useSelector } from "react-redux";
import { CiHeart } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
// import { useLocation, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { DeleteComment, likeVideo, UserComment } from "../Feature/Register";
import Header from "../Main/Header/Header";
import { Modal, ModalHeader } from "reactstrap";

function USERPOST() {
  // add image selector
  const ImageData = useSelector((state) => state.RegisterUser.Allpost);

  const [id, setId] = useState("");
  const [username, setusername] = useState("");
  const [comments, setComments] = useState("");
  const dispatch = useDispatch();
  const { reset } = useForm();

  // const [modalData, setmodalData] = useState();

  const [activePostId, setActivePostId] = useState(null);

  const toggle = (postId) => {
    setActivePostId(activePostId === postId ? null : postId);
  };

  useEffect(() => {
    const data = localStorage.getItem("userLoginData");
    const userId = JSON.parse(data);
    console.log("userrrrrrrrrrr", userId);
    setId(userId?.id);
    setusername(userId.username);
  }, [ImageData]);

  function like(postId) {
    dispatch(
      likeVideo({
        postId: postId,
        userId: id,
        username: username,
      })
    );
  }

  const onSubmit = (data, postId, name) => {
    dispatch(
      UserComment({
        comment: data,
        username: username,
        postId: postId,
        userId: name,
      })
    );
    console.log("postiddd", postId);
    console.log("use>>>>>>>>", id);
    reset();
  };

  function deleteComment(postId, commentId, Uname) {
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
    <>
      <Header />
      <div className="flex flex-wrap justify-center gap-6 py-12 pb-5">
        {ImageData?.length > 0 ? (
          ImageData.map((data) => {
            console.log("videooooooooooooooooo------", data.likedBy);
            return (
              <div
                key={data.id}
                className="shadow-lg border border-slate-200 rounded-lg overflow-hidden max-w-sm"
              >
                <div className="bg-gray-100 p-4">
                  <div className="bg-white border rounded-sm">
                    <div className="flex items-center px-4 py-3">
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
                    </div>
                    <img
                      src={data.Image}
                      className="w-full h-60 object-cover"
                      alt="Post"
                    />
                    <div className="p-4">
                      <span className="text-lg font-semibold antialiased block">
                        {data.Title}
                      </span>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-4">
                          <CiHeart
                            className={`text-2xl cursor-pointer ${
                              data.likedBy?.includes(id)
                                ? "text-red-500"
                                : "text-slate-500"
                            }`}
                            onClick={() => like(data.id)}
                          />
                        </div>

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

                      <form className="mt-4">
                        <div className="gap-1">
                          <div className="w-full mb-2">
                            <input
                              type="text"
                              onChange={(e) => setComments(e.target.value)}
                              className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-9 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                              placeholder="Add Your Comment"
                              required
                            />
                          </div>
                          <div className="w-full flex justify-end">
                            <button
                              type="button"
                              onClick={() =>
                                onSubmit(comments, data.id, data.username)
                              }
                              className="px-3 py-1 rounded-md text-white text-sm bg-indigo-500"
                            >
                              Comment
                            </button>
                          </div>
                        </div>
                      </form>
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
                                {username === comment?.username && (
                                  <MdDelete
                                    className="text-red-500 cursor-pointer"
                                    onClick={() =>
                                      deleteComment(
                                        data.id,
                                        comment.id,
                                        comment?.username
                                      )
                                    }
                                  />
                                )}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>Post is unavailable</p>
        )}
      </div>
    </>
  );
}

export default USERPOST;
