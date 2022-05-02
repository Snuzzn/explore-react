// Roles: https://www.w3.org/TR/html-aria/#docconformance
import { fireEvent, render, screen } from "@testing-library/react";
import Crowdfunder, { BackProject, Post, ProgressStats } from "../Crowdfunder";

const mockedHandlePay = jest.fn();

describe("BackProject", () => {
  it("renders button to back project", () => {
    render(<BackProject handlePay={mockedHandlePay} />);
    const button = screen.getByRole("button", { name: /back this project/i });
    expect(button).toBeInTheDocument();
  });

  it("renders input to back project", () => {
    render(<BackProject handlePay={mockedHandlePay} />);
    let backingInput = screen.queryByRole("spinbutton");
    expect(backingInput).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole("button"));
    backingInput = screen.getByRole("spinbutton");
    expect(backingInput).toBeInTheDocument();
  });
});
