import React from "react"; 
import { render, screen } from "@testing-library/react";
import Header from "../Header";

test("renders the Header component", () => {
  render(<Header />);
  expect(screen.getByText("Yan Yan Ji")).toBeInTheDocument();
  expect(
    screen.getByText("A page with everything what I do in my IT career and a little bit more.")
  ).toBeInTheDocument();
});