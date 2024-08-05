/* eslint-disable react/prop-types */
import { useState } from "react";
import { Modal, ModalHeader } from "reactstrap";


 function Ad_comment({allpost}) {
    const [modal, setModal] = useState(false);

  // const [selectedPost, setSelectedPost] = useState(null);
  const toggle = () => {
    setModal(!modal);
  };
  return (
    <div>
      <div>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>User Comments</ModalHeader>
          <div className="p-3"></div>
        </Modal>
      </div>
      {allpost?.comments?.map((data) => {
        return (
          <div key={data.id}>
            <div
              onClick={() => toggle()}
              className="font-semibold text-sm cursor-pointer"
            >
                {console.log("Ad_comments",data)}
              {data} Comments
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default Ad_comment;
