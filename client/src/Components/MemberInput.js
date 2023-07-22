import React from "react";

const MemberInput = (props) => {
  return (
    <>
      <input
        type={props.type}
        className="form-control form-inputs mx-auto"
        placeholder={props.placeholder}
      />
    </>
  );
};

export default MemberInput;
