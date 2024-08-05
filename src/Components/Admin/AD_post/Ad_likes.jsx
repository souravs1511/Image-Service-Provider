/* eslint-disable react/prop-types */
import { useState } from "react";
import { Modal, ModalHeader } from "reactstrap";

export default function Ad_likes({ allPosts }) {
  const [modal, setModal] = useState(false);
  const [selectedUserLike, setSelectedUserLike] = useState(null);

  const toggle = (likeData = null) => {
    setSelectedUserLike(likeData);
    setModal(!modal);
  };

  return (
    <>
    <div className="w-full">
      <h1>hiiiiiii</h1>
      {allPosts?.userlike?.map((data) => (
        <div key={data.id}>
          <div
            onClick={() => toggle(data)}
            className="font-semibold text-sm cursor-pointer text-black"
            >
            {console.log("AD_likeeeeee")}
            {data} likes
          </div>
        </div>
      ))}
    </div>
    <Modal isOpen={modal} toggle={() => toggle()}>
        <ModalHeader toggle={() => toggle()}>User likes</ModalHeader>
        <div className="p-3">
          {selectedUserLike && (
            <div>
              <p>{selectedUserLike.username} liked this post!</p>
              {/* Add more details if needed */}
            </div>
          )}
        </div>
        </Modal>
    </>
  );
}
