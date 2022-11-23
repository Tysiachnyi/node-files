const fs = require("fs").promises;
const path = require("path");

const bufferData = async () => {
  const data = JSON.parse(await fs.readFile("stores/201/totals.json"));
  console.log(data.total);
  await fs.writeFile(path.join("salesTotals/totals.txt"), `${data.total}\r\n`, {
    flag: "a",
  });
};

bufferData();
