import React from "react";
export default class Reports extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            FromDate: '',
            ToDate: ''
        };
    }

    handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        this.setState({
            [name]: value,
        });
    };

    render() {
        return (
            <div>
                <h2>Welcome to New Accounts Reports Components...</h2>
                <p>
                    <label>From Date: <input type="text" name="FromDate" onChange={this.handleChange} value={this.state.FromDate} /></label>
                </p>
                <p>
                    <label>To Date: <input type="text" name="ToDate" onChange={this.handleChange} value={this.state.ToDate} /></label>
                </p>
                <input type="submit" value="Generate"></input>
            </div>
        )
    }
}