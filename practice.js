const fs = require("fs").promises;
const path = require("path");

async function main(userName, age, email) {
  const user = {
    name: userName,
    age: age,
    email: email,
  };
  const userDir = path.join(__dirname, "user");

  try {
    await fs.mkdir(userDir);
  } catch {
    console.log(`${userDir} already exists.`);
  }

  await fs.writeFile(
    path.join(userDir, `${userName.toLowerCase()}.json`),
    JSON.stringify(user)
  );
}

main("Nikita", 20, "test@gmail.com");
main("Frank", 20, "test1@gmail.com");
main("Tomat", 20, "test2@gmail.com");
main("Max", 20, "test3@gmail.com");
