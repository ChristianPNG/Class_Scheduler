import React from "react";
import { render, screen } from "@testing-library/react";
import { PlanContainer } from "../Components/PlanContainer";
import { Plan } from "../Interfaces/Courses";
import userEvent from "@testing-library/user-event";

const setPlans = () => {
    return;
};

const newPlan: Plan = {
    Title: "Test",
    id: 1,
    description: "Hello"
};

const newplanList: Plan[] = [newPlan];

describe("PlanContainer component test", () => {
    beforeEach(() => {
        render(
            <PlanContainer
                plan={newPlan}
                plans={newplanList}
                setPlans={setPlans}
            />
        );
    });
    test("check if plan name and description exist", () => {
        expect(screen.getByText("Test")).toBeInTheDocument();
        expect(screen.getByText("Hello")).toBeInTheDocument();
    });
    test("edit mode testing for plans", () => {
        const editButton: HTMLElement = screen.getByText("Edit");
        editButton.click();
        const titleInput: HTMLElement = screen.getByTestId("titleEdit");
        const descriptionInput: HTMLElement =
            screen.getByTestId("descriptionEdit");
        expect(titleInput).toBeInTheDocument();
        expect(descriptionInput).toBeInTheDocument();

        titleInput.click();
        userEvent.clear(titleInput);
        userEvent.type(titleInput, "xyz");
        descriptionInput.click();
        userEvent.clear(descriptionInput);
        userEvent.type(descriptionInput, "New Description");
        editButton.click();
        expect(screen.getByText("xyz")).toBeInTheDocument();
        expect(screen.getByText("New Description")).toBeInTheDocument();
    });
    test("test to see if show button works", () => {
        const showButton: HTMLElement = screen.getByText("Show");
        showButton.click();
        const addFallButton: HTMLElement =
            screen.getByText("Add Fall Semester");
        expect(addFallButton).toBeInTheDocument();
    });
});
