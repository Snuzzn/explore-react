import { setupServer } from "msw/node";
import { rest } from "msw";
import Crowdfunder from "../Crowdfunder";
import { screen, render, fireEvent, waitFor } from "@testing-library/react";

const mockServer = setupServer(
  rest.get("/api/crowdfunder", (req, res, ctx) => {
    return res(
      ctx.json(
        JSON.parse(
          `{"title":"Genie's lamp","content":"An oil lamp that holds a genie. Once released, you will be granted 3 wishes!","raisedSoFar":300,"target":1000,"img":"/images/genieLamp.jpg"}`
        )
      )
    );
  })
);

beforeAll(() => mockServer.listen());
afterAll(() => mockServer.close());
afterEach(() => mockServer.resetHandlers());

// integration test with mock request
it("backs project by amount", async () => {
  render(<Crowdfunder />);
  // progress is initially at 30%
  let indicator = await screen.findByTitle("progressIndicator");
  expect(indicator.style.transform).toBe("translateX(-70%)");

  // back project by $100
  fireEvent.click(screen.getByRole("button"));
  const backingInput = screen.getByRole("spinbutton");
  fireEvent.change(backingInput, { target: { value: "100" } });
  expect(backingInput.value).toBe("100");
  fireEvent.click(screen.getByRole("button"));

  // progress is now at 40%
  indicator = await screen.findByTitle("progressIndicator");
  waitFor(() => {
    expect(indicator.style.transform).toBe("translateX(-60%)");
  });
});
