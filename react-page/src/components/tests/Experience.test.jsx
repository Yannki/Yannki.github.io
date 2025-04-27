import { render, screen } from "@testing-library/react";
import Experience from "../Experience";

test("renders the Experience component with job experiences", () => {
  render(<Experience />);
  expect(screen.getByText("Experience")).toBeInTheDocument();
  expect(screen.getByText("System Analyst and Developer")).toBeInTheDocument();
  expect(screen.getByText("Birkbeck, Jul 2023 - Jan 2025")).toBeInTheDocument();
  expect(
    screen.getByText(
      /Developed and maintained core systems using Oracle APEX, PL\/SQL, HTML, CSS, JavaScript, and REST API/i
    )
  ).toBeInTheDocument();
});