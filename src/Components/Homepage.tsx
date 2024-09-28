import React from "react";
import "../App.css";
import { MakePlan } from "./MakePlan";

export function Homepage(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CIS SCHEDULER
                <br></br>
            </header>

            <MakePlan></MakePlan>
        </div>
    );
}
