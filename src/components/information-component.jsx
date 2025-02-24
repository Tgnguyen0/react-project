import React from "react";
import DisplayInfor from "./display-infor";

function InformationComponent({ listUser }) {
  return (
    <div>
      <hr />
      <DisplayInfor listUser={listUser} />
    </div>
  );
}

export default InformationComponent;
