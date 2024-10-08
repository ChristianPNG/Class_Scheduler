import React from "react";
import { Row, Col } from "react-bootstrap";
import { course } from "../Interfaces/Courses";
import { planCoursesProp } from "../Interfaces/degreeInterface";

export function SystemsAndNetworks({
    planCourses
}: planCoursesProp): JSX.Element {
    const planCoursesString: string[] = planCourses.map(
        (course: course): string => course.code
    );
    const coreClasses: string[] = [
        "CISC 108",
        "CISC 181",
        "CISC 210",
        "CISC 220",
        "CISC 260",
        "CISC 275",
        "CISC 303",
        "CISC 320",
        "MATH 210",
        "MATH 241"
    ];
    const extraMath: string[] = ["MATH 205", "MATH 350"];
    let additionalReq: string[];
    if (
        planCoursesString.includes("CISC 355") &&
        planCoursesString.includes("ENGL312")
    ) {
        additionalReq = ["CISC 355", "ENGL 312"];
    } else if (
        planCoursesString.includes("CISC 355") &&
        planCoursesString.includes("ENGL410")
    ) {
        additionalReq = ["CISC 355", "ENGL 410"];
    } else {
        additionalReq = ["CISC 355", "ENGL 312", "", "CISC 355", "ENGL410"];
    }

    let capstoneClasses: string[];
    if (
        planCoursesString.includes("CISC 498") &&
        planCoursesString.includes("CISC 499")
    ) {
        capstoneClasses = ["CISC 498", "CISC 499"];
    } else if (
        planCoursesString.includes("UNIV 401") &&
        planCoursesString.includes("UNIV 402")
    ) {
        capstoneClasses = ["UNIV 401", "UNIV 402"];
    } else {
        capstoneClasses = ["CISC 498", "CISC 499", "", "UNIV 401", "UNIV 402"];
    }

    let labScience: string[];
    if (
        planCoursesString.includes("BISC 207") &&
        planCoursesString.includes("BISC 208")
    ) {
        labScience = ["BISC 207", "BISC 208"];
    } else {
        labScience = [
            "BISC 207",
            "BISC 208",
            "",
            "CHEM 103",
            "CHEM 133",
            "CHEM 104",
            "CHEM 134",
            "",
            "GEOL 105",
            "GEOL 115",
            "GEOL 107",
            "",
            "GEOL 107",
            "GEOL 110",
            "",
            "PHYS 207",
            "PHYS 227",
            "PHYS 208",
            "PHYS 228"
        ];
    }

    const concentrationReq: string[] = [
        "CISC 360",
        "CISC 361",
        "CISC 372",
        "CISC 450",
        "CISC 471"
    ];
    const securityReq: string[] = [
        "CISC 464",
        "CPEG 465",
        "CPEG 470",
        "CPEG 476",
        "CPEG 473",
        "CPEG 475",
        "CPEG 497"
    ];
    const advancedSystemsReq: string[] = [
        "CISC 437",
        "CISC 453",
        "CISC 459",
        "CISC 464",
        "CISC 474",
        "CISC 475",
        "CISC 479",
        "CPEG 473",
        "CPEG 497"
    ];
    const restrictedElectives1: string[] = [
        "CISC 304",
        "CISC 436",
        "CISC 437",
        "CISC 440",
        "CISC 442",
        "CISC 449",
        "CISC 453",
        "CISC 459",
        "CISC 464",
        "CISC 474",
        "CISC 475",
        "CISC 479",
        "CISC 481",
        "CISC 483",
        "CISC 484",
        "CISC 489"
    ];
    const restrictedElectives2: string[] = [
        "CPEG 202",
        "CPEG 222",
        "CPEG 323",
        "CPEG 422",
        "CPEG 460",
        "CPEG 465",
        "CPEG 470",
        "CPEG 475",
        "CPEG 476",
        "CPEG 494",
        "CPEG 497",
        "ELEG 387",
        "ELEG 487",
        "MATH 242",
        "MATH 349"
    ];

    return (
        <div>
            <Row>
                <Col
                    sm={"auto"}
                    data-testid="systems-and-networks-requirements"
                >
                    <b>Core Requirement {"\n"}</b>
                    <div data-testid="SAN-core">
                        {coreClasses.map((course: string): JSX.Element => {
                            if (
                                planCourses.some(
                                    (courseObj: course): boolean =>
                                        courseObj.code === course
                                )
                            ) {
                                return (
                                    <div key={course}>{course + "✅\n"}</div>
                                );
                            } else {
                                return <div key={course}>{course + ""}</div>;
                            }
                        })}
                    </div>
                </Col>
                <Col sm={"auto"} style={{ whiteSpace: "pre" }}>
                    <b>Additional Requirements {"\n"}</b>
                    {additionalReq.map((course: string) => {
                        if (
                            planCourses.some(
                                (courseObj: course): boolean =>
                                    courseObj.code === course
                            )
                        ) {
                            return course + "✅\n";
                        } else if (course === "") {
                            return "or \n";
                        } else {
                            return course + " \n";
                        }
                    })}
                </Col>
                <Col sm={"auto"} style={{ whiteSpace: "pre" }}>
                    <b>Capstone Requirement {"\n"}</b>
                    {capstoneClasses.map((course: string) => {
                        if (
                            planCourses.some(
                                (courseObj: course): boolean =>
                                    courseObj.code === course
                            )
                        ) {
                            return course + "✅\n";
                        } else if (course === "") {
                            return "or \n";
                        } else {
                            return course + " \n";
                        }
                    })}
                </Col>
                <Col sm={"auto"} style={{ whiteSpace: "pre" }}>
                    <b>Prob/Stat course {"\n"}</b>
                    <i>-One of the following- {"\n"}</i>
                    {extraMath.map((course: string) => {
                        if (
                            planCourses.some(
                                (courseObj: course): boolean =>
                                    courseObj.code === course
                            )
                        ) {
                            return course + "✅\n";
                        } else {
                            return course + "\n";
                        }
                    })}
                </Col>
                <Col sm={"auto"} style={{ whiteSpace: "pre" }}>
                    <b>Concentration Core {"\n"}</b>
                    {concentrationReq.map((course: string) => {
                        if (
                            planCourses.some(
                                (courseObj: course): boolean =>
                                    courseObj.code === course
                            )
                        ) {
                            return course + "✅\n";
                        } else {
                            return course + " \n";
                        }
                    })}
                </Col>
                <Col sm={"auto"} style={{ whiteSpace: "pre" }}>
                    <b>Security Requirement {"\n"}</b>
                    <i>-One of the following- {"\n"}</i>
                    {securityReq.map((course: string) => {
                        if (
                            planCourses.some(
                                (courseObj: course): boolean =>
                                    courseObj.code === course
                            )
                        ) {
                            return course + "✅\n";
                        } else {
                            return course + "\n";
                        }
                    })}
                </Col>
                <Col sm={"auto"} style={{ whiteSpace: "pre" }}>
                    <b>Advanced Systems Requirement {"\n"}</b>
                    <i>-Two of the following- {"\n"}</i>
                    {advancedSystemsReq.map((course: string) => {
                        if (
                            planCourses.some(
                                (courseObj: course): boolean =>
                                    courseObj.code === course
                            )
                        ) {
                            return course + "✅\n";
                        } else {
                            return course + "\n";
                        }
                    })}
                </Col>
                <Col sm={"1"} style={{ whiteSpace: "pre", marginRight: "3ch" }}>
                    <b>Restricted Electives {"\n"}</b>
                    <i>-Six credits of the following- {"\n"}</i>
                    {restrictedElectives1.map((course: string) => {
                        if (
                            planCourses.some(
                                (courseObj: course): boolean =>
                                    courseObj.code === course
                            )
                        ) {
                            return course + "✅\n";
                        } else {
                            return course + "\n";
                        }
                    })}
                </Col>
                <Col sm={"auto"} style={{ whiteSpace: "pre" }}>
                    {"\n \n"}
                    {restrictedElectives2.map((course: string) => {
                        if (
                            planCourses.some(
                                (courseObj: course): boolean =>
                                    courseObj.code === course
                            )
                        ) {
                            return course + "✅ \n";
                        } else {
                            return course + "\n";
                        }
                    })}
                </Col>
                <Col
                    sm={"auto"}
                    style={{ whiteSpace: "pre", marginLeft: "1.5ch" }}
                >
                    <b>Lab Science Requirement {"\n"}</b>
                    <i>-Choose one group- {"\n"}</i>
                    {labScience.map((course: string) => {
                        if (
                            planCourses.some(
                                (courseObj: course): boolean =>
                                    courseObj.code === course
                            )
                        ) {
                            return course + "✅\n";
                        } else if (course === "") {
                            return "or \n";
                        } else {
                            return course + " \n";
                        }
                    })}
                </Col>
            </Row>
        </div>
    );
}
