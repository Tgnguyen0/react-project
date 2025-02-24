import { useState } from "react";
import InformationComponent from "./components/information-component";
import './App.css';

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [listUser, setListUser] = useState([
    { id: 1, Name: "Dung", Age: 49 },
    { id: 2, Name: "Hoang", Age: 34 },
    { id: 3, Name: "Chien", Age: 32 },
  ]);

  const handleAddnewUser = (userObject) => {
    setListUser([userObject, ...listUser]);
  };

  const handleDeleteAllUsers = () => {
    setListUser([]);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    handleAddnewUser({
      id: Math.floor(Math.random() * 100) + 1,
      Name: name,
      Age: age
    });

    setName("");
    setAge("");
  };

  return (
    <div className="container mt-3 border h-auto" style={{ width: "400px" }}>
      <h2 className="text-center">Form</h2>
      <div className="d-flex justify-content-center">
        <div className="table-responsive">
          <form onSubmit={handleOnSubmit}>
            <table className="table table-borderless mx-auto">
              <tbody>
                <tr>
                  <td>
                    <label htmlFor="name" className="form-label">Your name:</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="age" className="form-label">Your age:</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      id="age"
                      placeholder="Enter your age"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td >
                    <button type="submit" className="btn btn-primary">Submit</button>
                  </td>
                  <td>
                    <button onClick={handleDeleteAllUsers} className="btn btn-danger">Delete All Users</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>

          <InformationComponent
            listUser={listUser}
          />
        </div>
      </div>
    </div>
  );
}

export default App;