// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const fs = require("fs");

const handler = async (req, res) => {
  const crowdfunder = JSON.parse(
    fs.readFileSync("crowdfunder.json", "utf8", (err, jsonString) => {
      if (err) {
        console.log("File read failed:", err);
        return;
      }
    })
  );

  if (req.method === "GET") {
    const currTimestamp = new Date();
    // raisedSoFar += 1;
    // fs.writeFileSync("crowdfunder.json", JSON.stringify(raisedSoFar));
    res.status(200).json(crowdfunder);
  } else if (req.method === "POST") {
    console.log(req.body);
    crowdfunder.raisedSoFar += req.body.backingAmount;
    fs.writeFileSync("crowdfunder.json", JSON.stringify(crowdfunder));
    res.status(200).json(crowdfunder);
  }
};

export default handler;
