import React, { useState } from "react";
import { Button, Dropdown } from "react-bootstrap";
import DropdownItem from "react-bootstrap/DropdownItem";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import { plan } from "../Interfaces/Courses";
import { PlanContainer } from "./PlanContainer";

export function MakePlan(): JSX.Element {
    const planDataKey = "PlanList-Data";
    let loadedData: plan[] = [];
    const previousData: string | null = localStorage.getItem(planDataKey);
    if (previousData !== null && previousData !== undefined) {
        loadedData = Object.values(JSON.parse(previousData));
    }
    let mostRecentID = 1;
    if (loadedData.length !== 0) {
        mostRecentID = loadedData[loadedData.length - 1].id + 1;
    }
    const [plans, setPlans] = useState<plan[]>(loadedData);
    const [Counter, setCounter] = useState<number>(mostRecentID);
    const [visible, setVisible] = useState<boolean>(false);
    const [degree, setDegree] = useState<string>("Select degree");

    function newPlan(): void {
        setVisible(false);
        const newPlan: plan = {
            title: "New Plan",
            id: Counter,
            description: "",
            degree: degree
        };
        const planList: plan[] = [...plans, newPlan];
        const counterCopy: number = Counter + 1;
        setPlans(planList);
        setCounter(counterCopy);
        localStorage.setItem(planDataKey, JSON.stringify(planList));
        window.location.reload();
    }
    function savePlans() {
        localStorage.setItem(planDataKey, JSON.stringify(plans));
        window.location.reload();
    }

    function Popup() {
        return (
            <div className="popup">
                <div
                    className="popup-inner"
                    style={{ maxWidth: "400px", height: "250px" }}
                >
                    <button
                        className="close-btn"
                        onClick={() => setVisible(false)}
                    >
                        close
                    </button>
                    <div>
                        <Dropdown
                            data-testid="degree-dropdown"
                            className="degreedropdown"
                        >
                            <Dropdown.Toggle
                                data-testid="degree-dropdown2"
                                id="degree"
                                variant="secondary"
                            >
                                {degree}
                            </Dropdown.Toggle>
                            <DropdownMenu
                                data-testid="degree-dropdown-menu"
                                variant="dark"
                            >
                                <DropdownItem
                                    data-testid="Systems And Networks"
                                    onClick={() =>
                                        setDegree("Systems And Networks")
                                    }
                                >
                                    Systems And Networks
                                </DropdownItem>
                                <DropdownItem onClick={() => setDegree("AI")}>
                                    Artificial Intelligence
                                </DropdownItem>
                                <DropdownItem
                                    onClick={() => setDegree("Cybersecurity")}
                                >
                                    Cybersecurity
                                </DropdownItem>
                                <DropdownItem
                                    onClick={() => setDegree("Bioinformatics")}
                                >
                                    Bioinformatics
                                </DropdownItem>
                                <DropdownItem
                                    onClick={() => setDegree("DataScience")}
                                >
                                    DataScience
                                </DropdownItem>
                                <DropdownItem onClick={() => setDegree("HPC")}>
                                    High Performance Computing
                                </DropdownItem>
                                <DropdownItem
                                    onClick={() => setDegree("Theory")}
                                >
                                    Theory And Computation
                                </DropdownItem>
                                <DropdownItem
                                    onClick={() => setDegree("Traditional")}
                                >
                                    Traditional/Custom
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                    <button
                        className="create-btn"
                        onClick={newPlan}
                        disabled={degree === "Select degree"}
                    >
                        Create plan
                    </button>
                </div>
            </div>
        );
    }
    return (
        <div className="makePlan-background">
            <div>
                {plans.map((plan: plan) => (
                    <div key={plan.id}>
                        <PlanContainer
                            plan={plan}
                            plans={plans}
                            setPlans={setPlans}
                        ></PlanContainer>
                        <hr></hr>
                    </div>
                ))}
                <Button
                    style={{
                        left: "60ch",
                        top: "4.4ch",
                        position: "relative",
                        backgroundColor: "green"
                    }}
                    onClick={savePlans}
                >
                    Save plans
                </Button>
                <div>
                    <Button onClick={() => setVisible(true)}>New plan</Button>
                </div>
                <div className="main">
                    {visible && <Popup data-testid="popup-window"></Popup>}
                </div>
            </div>
        </div>
    );
}
