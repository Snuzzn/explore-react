// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const fs = require("fs");

const crowdfunderPost = {
  title: "Genie's lamp",
  content:
    "An oil lamp that holds a genie. Once released, you will be granted 3 wishes!",
  raisedSoFar: 100,
  target: 1000,
  img: "/images/genieLamp.jpg",
};

const handler = async (req, res) => {
  // const crowdfunder = JSON.parse(
  //   fs.readFileSync("crowdfunder.json", "utf8", (err, jsonString) => {
  //     if (err) {
  //       console.log("File read failed:", err);
  //       return;
  //     }
  //   })
  // );

  if (req.method === "GET") {
    // const currTimestamp = new Date();
    res.status(200).json(crowdfunderPost);
  } else if (req.method === "POST") {
    crowdfunderPost.raisedSoFar += req.body.backingAmount;
    // fs.writeFileSync("crowdfunder.json", JSON.stringify(crowdfunder));
    res.status(200).json(crowdfunderPost);
  }
};

export default handler;
