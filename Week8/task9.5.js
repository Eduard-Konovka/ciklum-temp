async function handleRequest(options) {
  // ========== Початок зони редагування ==============
  let correctType = typeof options === "object" || typeof options === "string";
  if (!correctType) {
    throw new Error("Expecting string or object as fetch parameter");
  }

  return fetch(options).then((response) => {
    // варіант #1 -------------------------------------
    if (response.status >= 200 && response.status < 400) {
      return Promise.resolve(response.json());
    } else if (response.status >= 400) {
      throw new Error(response.status);
    }

    // варіант #2 -------------------------------------
    return new Promise((resolve, reject) => {
      if (response.status >= 200 && response.status < 400) {
        resolve(response.json());
      } else if (response.status >= 400) {
        reject(new Error(response.status));
        // варіант #2.2 -------------------------------
        throw new Error(response.status);
      }
    });
  });
  // ========== Кінець зони редагування ===============
}

// Код для перевірки в консолі =======================
const visualize = async (val) => {
  try {
    console.log(
      "Name of pokemon ---> ",
      await handleRequest(val).then((obj) => obj.name)
    );
  } catch (error) {
    console.error(error);
  }
};

const correctUrl = "https://pokeapi.co/api/v2/pokemon/2/";
visualize(5);
visualize(new Request(correctUrl));
visualize(correctUrl);

const wrongUrl = "https://pokeapi.co/api/v2/pokemon/999/";
visualize(new Request(wrongUrl));
visualize(wrongUrl);
