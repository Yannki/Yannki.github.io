import React from "react"; 
import { render, screen } from "@testing-library/react";
import AboutMe from "../AboutMe";

test("renders the AboutMe component with bio, interests, and languages", () => {
  render(<AboutMe />);
  expect(screen.getByText("About Me")).toBeInTheDocument();
  expect(
    screen.getByText(
      /A software engineer who worked in FinTech and Higher Education/i
    )
  ).toBeInTheDocument();
  expect(screen.getByText("Interests")).toBeInTheDocument();
  expect(screen.getByText("To be updated...")).toBeInTheDocument();
  expect(screen.getByText("Languages")).toBeInTheDocument();
  expect(screen.getByText("Slovak - Fluent")).toBeInTheDocument();
  expect(screen.getByText("English - Fluent")).toBeInTheDocument();
});