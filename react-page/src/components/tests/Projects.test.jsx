import { render, screen } from "@testing-library/react";
import Projects from "../Projects";

test("renders the Projects component with a project", () => {
  render(<Projects />);
  expect(screen.getByText("Swansea Degree Classification Calculator")).toBeInTheDocument();
  expect(screen.getByText("A Website for Swansea Undergraduate Students to Calculate their Degree Classification using simple HTML, CSS and JavaScript.")).toBeInTheDocument();
  expect(screen.getByText("Swansea Degree Classification Calculator")).toHaveAttribute(
    "href",
    "https://yannki.github.io/swansea-degree-calculator/"
  );
});