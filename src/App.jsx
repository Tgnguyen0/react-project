import { useState } from "react";
import InformationComponent from "./components/information-component";

function App() {
  

  return (
    <div className="container mt-3 border h-auto" style={{ width: "400px" }}>
      <h2 className="text-center">Form</h2>
      <div className="d-flex justify-content-center">
        <div className="table-responsive">
          <table className="table table-borderless mx-auto">
            <tbody>
              <tr>
                <td>
                  <label htmlFor="name" className="form-label">Your name:</label>
                </td>
                <td>
                  <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="age" className="form-label">Your age:</label>
                </td>
                <td>
                  <input type="text" className="form-control" id="age" placeholder="Enter your age" />
                </td>
              </tr>
              <tr>
                <td></td>
                <td className="d-flex justify-content-end w-200">
                  <button type="submit" className="btn btn-primary">Submit</button>
                </td>
              </tr>
            </tbody>
          </table>
          <InformationComponent></InformationComponent>
        </div>
      </div>
    </div>
  );
}

export default App;
