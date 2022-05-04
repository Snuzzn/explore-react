export const codeSnippets = [
  {
    code: `const Crowdfunder = () => {
  const { data, error } = useSWR("/api/crowdfunder", fetcher);

  return (
    <DemoWrapper>
      {data ? (
        <Post {...data} />
      ) : (
        <SkeletonPost/>
      )}
    </DemoWrapper>
  );
};

export default Crowdfunder;`,
    name: "Crowdfunder",
    lang: "jsx",
  },
  {
    code: `const Post = ({ title, content, raisedSoFar, target, img }) => {
  
  const { mutate } = useSWRConfig();
  
  const handlePay = async (e, backingAmount, setIsBacking) => {
    const val = backingAmount.input;
    e?.preventDefault();
    if (isNaN(val) || val < 0) return;

    try {
      await fetch("/api/crowdfunder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ backingAmount: parseInt(val) }),
      });
    } catch {
      console.error("Could not back this project");
    }
    mutate("/api/crowdfunder");

    setIsBacking(false);
    backingAmount.reset();
  };

  return (
    <PostWrapper>
      <PostImage src={img} />
      <PostDetails>
        <PostTitle>{title}</PostTitle>
        <PostText>{content}</PostText>
        <ProgressStats currRaised={raisedSoFar} target={target} />
        <BackProject handlePay={handlePay} />
      </PostDetails>
    </PostWrapper>
  );
};
  
export default Post;
`,
    name: "Post",
    lang: "jsx",
  },
  {
    code: `const ProgressStats = ({ currRaised, target }) => {
  const currProgress = (currRaised / target) * 100;

  return (
    <>
      <ProgressDetails>
        <div>\${currRaised} raised</div>
        <div>{((currRaised / target) * 100).toFixed(1)}%</div>
      </ProgressDetails>
      <ProgressWrapper>
        <Indicator
          style={{
            transform: \`translateX(-\${
              100 - (currProgress > 100 ? 100 : currProgress)
            }%)\`,
          }}
          title="progressIndicator"
        />
      </ProgressWrapper>
    </>
  );
};

export default ProgressStats;
`,
    name: "ProgressStats",
    lang: "jsx",
  },
  {
    code: `const BackProject = ({ handlePay }) => {
  const [isBacking, setIsBacking] = useState(false);
  const backingAmount = useInput();

  return (
    <>
      <Button
        onClick={() => {
          if (isBacking) handlePay(null, backingAmount, setIsBacking);
          else setIsBacking(true);
        }}
      >
        Back this project
      </Button>
      {isBacking && (
        <form
          onSubmit={(e) => {
            handlePay(e, backingAmount, setIsBacking);
          }}
        >
          <Input
            {...backingAmount}
            placeholder="Enter amount in dollars"
            autoFocus
            type="number"
          />
        </form>
      )}
    </>
  );
};

export default BackProject;
`,
    name: "BackProject",
    lang: "jsx",
  },
];

export const testingCodeSnippets = [
  {
    name: "Post.test",
    lang: "js",
    code: `// Roles: https://www.w3.org/TR/html-aria/#docconformance
import { fireEvent, render, screen } from "@testing-library/react";
import Crowdfunder from "../Crowdfunder";
import BackProject from "../BackProject";
import ProgressStats from "../ProgressStats";
import Post from "../Post";
import img from "../../../images/genieLamp.jpg";

const postProps = {
  title: "Mini Yggdrasil",
  content: "A miniature plant based on the world tree",
  raisedSoFar: 300,
  target: 1000,
  img: img,
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
    expect(image).toHaveAttribute("src", img);
  });

});
`,
  },
  {
    name: "ProgressStats.test",
    lang: "js",
    code: `import { render, screen } from "@testing-library/react";
import ProgressStats from "../ProgressStats";

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
`,
  },
  {
    name: "BackingProject.test",
    lang: "js",
    code: `import { fireEvent, render, screen } from "@testing-library/react";
import Crowdfunder from "../Crowdfunder";
import BackProject from "../BackProject";
import ProgressStats from "../ProgressStats";
import Post from "../Post";

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
`,
  },
  {
    name: "Crowdfunder.test",
    lang: "js",
    code: `import { setupServer } from "msw/node";
import { rest } from "msw";
import Crowdfunder from "../Crowdfunder";
import { screen, render, fireEvent, waitFor } from "@testing-library/react";

const mockServer = setupServer(
  rest.get("/api/crowdfunder", (req, res, ctx) => {
    return res(
      ctx.json(
        JSON.parse(
          \`{"title":"Genie's lamp","content":"An oil lamp that holds a genie. Once released, you will be granted 3 wishes!","raisedSoFar":300,"target":1000,"img":"/images/genieLamp.jpg"}\`
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
    `,
  },
];
