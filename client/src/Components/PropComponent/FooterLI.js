import React from "react";

const FooterLI = (props) => {
  return (
    <>
      <li className="list-group-item bg-dark text-secondary border border-0">
        {props.li}
      </li>
    </>
  );
};

export default FooterLI;
