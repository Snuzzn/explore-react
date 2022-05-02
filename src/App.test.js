import { render, screen } from "@testing-library/react";
import Crowdfunder from "./pages/Crowdfunder";

test("renders crowdfunder post", () => {
  render(<Crowdfunder />);
  const button = screen.getByText("Back this project");
  expect(button).toBeInTheDocument();
});
