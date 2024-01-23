import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Profile from "../src/Profile.jsx";

test ("render with the correct title", () => {
    render(<Profile name="Makers Duck" job="duck" birthdate="2013" />);

    expect(screen.getByRole("heading")).toHaveTextContent("Makers Duck");
});

test("render with correct job and birthdate", () => {
    render(<Profile name="Makers Duck" job="duck" birthdate="2013" />)

    expect(screen.getByText("duck")).toBeInTheDocument();
    expect(screen.getByText("2013")).toBeInTheDocument();
});