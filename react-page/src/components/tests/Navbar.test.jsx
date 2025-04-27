import React from "react"; 
import { render, screen } from "@testing-library/react";
import Navbar from "../Navbar";

test("renders the Navbar component with links", () => {
  render(<Navbar />);
  expect(screen.getByText("Projects")).toHaveAttribute("href", "#projects");
  expect(screen.getByText("Experience")).toHaveAttribute("href", "#experience");
});