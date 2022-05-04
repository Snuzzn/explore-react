// Roles: https://www.w3.org/TR/html-aria/#docconformance
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Post from "../Post";

const postProps = {
  title: "Mini Yggdrasil",
  content: "A miniature plant based on the world tree",
  raisedSoFar: 300,
  target: 1000,
  img: "/images/genieLamp.jpg",
};

describe("Post", () => {
  it("renders crowdfunder post details", () => {
    render(<Post {...postProps} />);
    const title = screen.getByRole("heading", { name: "Mini Yggdrasil" });
    const content = screen.getByText(
      "A miniature plant based on the world tree"
    );
    const image = screen.getByRole("img");
    expect(title).toBeInTheDocument();
    expect(content).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "/images/genieLamp.jpg");
  });
});
