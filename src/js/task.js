import read from "./reader";
import json from "./parser";

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve, reject) => {
      read()
        .then((response) => {
          json(response).then((data) => resolve(data));
        })
        .catch((error) => reject(error));
    });
  }
}
GameSavingLoader.load().then((saving) => console.log(saving));

(async () => {
  // Your code here with await
  try {
    const response = await read();
    const data = await json(response);
    console.log(data);
  } catch {
    throw new Error("Ошибка");
  }
})();
