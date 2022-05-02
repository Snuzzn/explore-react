// Roles: https://www.w3.org/TR/html-aria/#docconformance
import { render, screen } from "@testing-library/react";
import { ProgressStats } from "../Crowdfunder";

it("renders progress stats", () => {
  render(<ProgressStats currRaised={300} target={1000} />);
  const currRaised = screen.getByText("$300 raised");
  const progress = screen.getByText("30.0%");
  expect(currRaised).toBeInTheDocument();
  expect(progress).toBeInTheDocument();
});

it("renders progress bar", () => {
  render(<ProgressStats currRaised={300} target={1000} />);
  const bar = screen.getByRole("progressbar");
  const indicator = screen.getByTitle("progressIndicator");
  expect(bar).toBeInTheDocument();
  expect(indicator).toBeInTheDocument();
});

it("renders accurate progress indicator", () => {
  render(<ProgressStats currRaised={300} target={1000} />);
  const indicator = screen.getByTitle("progressIndicator");
  // 30% progress
  expect(indicator.style.transform).toBe("translateX(-70%)");
});
