export const codeSnippets = [
  {
    code: `const Crowdfunder = () => {
      return (
        <>
          <Post
            title="Genie's Lamp"
            content="An oil lamp that holds a genie. Once 
              released, you will be granted 3 wishes!"
            raisedSoFar={400}
            target={1000}
            img={LampImg}
          />
        </>
      );
    };

export default Crowdfunder;`,
    name: "Crowdfunder",
  },
  {
    code: `const Post = ({ title, content, raisedSoFar, target, img }) => {
  const [currRaised, setCurrRaised] = useState(raisedSoFar);

  const handlePay = (e, backingAmount, setIsBacking) => {
    e?.preventDefault();
    if (isNaN(backingAmount)) return;
    if (backingAmount < 0) return;
    setCurrRaised(currRaised + parseInt(backingAmount));
    setIsBacking(false);
  };

  return (
    <PostWrapper>
      <div style={{ position: "relative" }}>
        <PostImage src={img} />
        {/* <Backers>4 backers</Backers> */}
      </div>
      <PostDetails>
        <PostTitle>{title}</PostTitle>
        <PostText>{content}</PostText>

        <ProgressStats currRaised={currRaised} target={target} />
        <BackProject handlePay={handlePay} />
      </PostDetails>
    </PostWrapper>
  );
};

export default Post;
`,
    name: "Post",
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
  },
  {
    code: `const BackProject = ({ handlePay }) => {
  const [isBacking, setIsBacking] = useState(false);
  const backingAmount = useInput();

  return (
    <>
      <Button
        onClick={() => {
          if (isBacking) handlePay(null, backingAmount.input, setIsBacking);
          else setIsBacking(true);
        }}
      >
        Back this project
      </Button>
      {isBacking && (
        <form
          style={{ marginTop: "20px" }}
          onSubmit={(e) => handlePay(e, backingAmount.input, setIsBacking)}
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
  },
];
