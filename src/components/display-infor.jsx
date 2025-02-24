import React from "react";

function DisplayInfor({ listUser }) {
  return (
    <div>
      {listUser.map((user) => (
        <div key={user.id} className={user.Age < 18 ? "red" : "blue"}>
          <div>User name is: {user.Name}</div>
          <div>User Age: {user.Age}</div>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default DisplayInfor;
