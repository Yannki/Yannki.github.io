import { render, screen } from "@testing-library/react";
import Footer from "../Footer";

test("renders the Footer component", () => {
  render(<Footer />);
  expect(screen.getByText("Template: W3School")).toBeInTheDocument();
});