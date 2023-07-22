import React from "react";

const Offcanvas = (props) => {
  return (
    <>
      <div className="icon-link icon-link-hover text-dark text-decoration-none">
        {props.title}
        <svg className="bi" aria-hidden="true" width="16" height="16">
          <use xlinkHref="#arrow-right" />
        </svg>
      </div>
    </>
  );
};

export default Offcanvas;
