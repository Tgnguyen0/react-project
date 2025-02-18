import React from "react";

class InformationComponent extends React.Component {
    state = {
        Name: 'John Doe',
        Age: 28
    }

    render() {
        return (		
            <table className = "table table-borderless border-top">
                <tbody>
                    <tr>
                        <td>
                            <label htmlFor="name" className="form-label">Name:</label>
                        </td>
                        <td>
                            {this.state.Name}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="name" className="form-label">Age:</label>
                        </td>
                        <td>
                            {this.state.Age}
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default InformationComponent;
