// Roles: https://www.w3.org/TR/html-aria/#docconformance
import { render, screen } from "@testing-library/react";
import { ProgressStats } from "../Crowdfunder";

describe("ProgressStats", () => {
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

  it("doesn't push indicator past 100", () => {
    render(<ProgressStats currRaised={1300} target={1000} />);
    const indicator = screen.getByTitle("progressIndicator");
    const currRaised = screen.getByText("$1300 raised");
    expect(currRaised).toBeInTheDocument();
    // progress is at 130% but the indicator bar maxes out at 100
    expect(indicator.style.transform).toBe("translateX(-0%)");
  });
});
