import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { useState } from "react";
// import AdminAside from "./AdminAside";

export default function AD_userPost() {
  const allPosts = useSelector((state) => state.RegisterUser.Allpost);
  const [modalData, setModalData] = useState({
    isOpen: false,
    type: null,
    post: null,
  });

  const toggleModal = (type = null, post = null) => {
    setModalData({
      isOpen: !modalData.isOpen,
      type,
      post,
    });
  };

  return (
    <>
      {/* <AdminAside /> */}

      <div className="flex flex-col items-center py-8 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">User Posts</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full px-4">
          {allPosts.map((post) => (
            <div key={post.id} className="bg-white shadow-md rounded-lg p-4">
              <p className="text-lg text-gray-700 ml-3 font-bold">
                {post.username}
              </p>
              <img
                src={post.Image}
                alt="User Image"
                className="w-full h-48 object-cover rounded-md mt-2"
              />
              <div className="text-gray-800 mt-4 font-medium">{post.Title}</div>

              <div className="flex justify-between mt-4">
                <button
                  className="text-blue-600 hover:text-blue-800 font-semibold focus:outline-none"
                  onClick={() => toggleModal("likes", post)}
                >
                  Likes: {post.count}
                </button>
                <button
                  className="text-blue-600 hover:text-blue-800 font-semibold focus:outline-none"
                  onClick={() => toggleModal("comments", post)}
                >
                  Comments: {post.comments.length}
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full h-screen flex justify-center items-center">
          <Modal
            isOpen={modalData.isOpen}
            toggle={() => toggleModal()}
            className="rounded-lg"
            centered 
          >
            <ModalHeader
              toggle={() => toggleModal()}
              className="text-xl font-bold text-gray-700"
            >
              {modalData.type === "likes" ? "Likes" : "Comments"}
            </ModalHeader>
            <ModalBody className="space-y-4">
              {modalData.type === "likes" &&
                modalData.post?.userlike?.map((item, index) => (
                  <p key={index} className="text-blue-700">
                    {item}
                  </p>
                ))}
              {modalData.type === "comments" &&
                modalData.post?.comments?.map((comment) => (
                  <div
                    key={comment.id}
                    className="border-b pb-2 mb-2 flex gap-2"
                  >
                    <p className="font-semibold text-blue-700">
                      {comment.username}
                    </p>
                    <p className="text-black">{comment.text}</p>
                  </div>
                ))}
            </ModalBody>
          </Modal>
        </div>
      </div>
    </>
  );
}
