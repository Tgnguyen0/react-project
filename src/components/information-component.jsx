import React from "react";
import DisplayInfor from "./display-infor";
import { Component } from "react";

/*function InformationComponent({ listUser }) {
  return (
    <div>
      <hr />
      <DisplayInfor listUser={listUser} />
    </div>
  );
}*/

class InformationComponent extends Component {
  render() {
    const { listUser } = this.props;

    return (
      <div>
        <hr />
        <DisplayInfor listUser={listUser} />
      </div>
    );
  }
}

export default InformationComponent;
