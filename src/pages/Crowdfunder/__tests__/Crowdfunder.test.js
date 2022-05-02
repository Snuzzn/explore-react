// Roles: https://www.w3.org/TR/html-aria/#docconformance
import { fireEvent, render, screen } from "@testing-library/react";
import Crowdfunder, { BackProject, Post, ProgressStats } from "../Crowdfunder";
import img from "../../../images/genieLamp.jpg";

const postProps = {
  title: "Mini Yggdrasil",
  content: "A miniature plant based on the world tree",
  raisedSoFar: 300,
  target: 1000,
  img: img,
};

// unit test
it("renders crowdfunder post details", () => {
  render(<Post {...postProps} />);
  const title = screen.getByRole("heading", { name: "Mini Yggdrasil" });
  const content = screen.getByText("A miniature plant based on the world tree");
  const image = screen.getByRole("img");
  expect(title).toBeInTheDocument();
  expect(content).toBeInTheDocument();
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute("src", img);
});

// integration test
it("backs project by amount", () => {
  render(<Post {...postProps} />);

  // progress is initially at 30%
  const indicator = screen.getByTitle("progressIndicator");
  expect(indicator.style.transform).toBe("translateX(-70%)");

  // back project by $100
  fireEvent.click(screen.getByRole("button"));
  const backingInput = screen.getByRole("spinbutton");
  fireEvent.change(backingInput, { target: { value: "100" } });
  expect(backingInput.value).toBe("100");
  fireEvent.click(screen.getByRole("button"));

  // progress is now at 45%
  expect(indicator.style.transform).toBe("translateX(-60%)");
});
