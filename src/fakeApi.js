/*

DO NOT change this file

*/

const fetch = (url, requestBody) => {
  switch (url) {
    case "food":
      return new Promise((resolve) => resolve({ data: "Cheese" }));
    case "cats":
      return new Promise((resolve) =>
        resolve({
          data: { cats: ["Puss in boots", "Smokey", "Bandit", "Berry"] },
        })
      );
    case "dogs":
      return new Promise((resolve) =>
        resolve({
          data: {
            dogs: [
              {
                name: "Lassie",
                naughty: 0,
              },
              {
                name: "Mutley",
                naughty: 10,
              },
              {
                name: "Bernard",
                naughty: 2,
              },
            ],
          },
        })
      );
    case "jokes":
      if (requestBody === "question")
        return new Promise((resolve) =>
          resolve({ joke: "Why did the scarecrow win the Nobel Prize?" })
        );
      return new Promise((resolve) =>
        resolve({ answer: "Because he was out-standing in his field." })
      );
    default:
      return new Promise((resolve) =>
        resolve({ data: "404 - This URL doesn't exist" })
      );
  }
};

module.exports = { fetch };
