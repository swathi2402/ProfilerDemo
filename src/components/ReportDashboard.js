import React, { Fragment, Profiler } from "react";
import NewAccountReports from "./NewAccountReports";

export default class ReportDashboard extends React.Component {
    callbackFunction = (id, phase, actualDuration, baseDuration, startTime, commitTime, interaction) => {
        console.log("Id is : " + id + ", Phase is : " + phase);
        console.log("Actual Duration is : " + actualDuration + " and Base Duration is :" + baseDuration);
    };

    render() {
        return (
            <Fragment>
                <h2>Welcome to Report Dashboard...</h2>
                <Profiler id="profiler" onRender={this.callbackFunction}>
                    <NewAccountReports />
                </Profiler>
            </Fragment>
        )
    }
}