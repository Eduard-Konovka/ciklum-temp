async function handleRequest(options) {
  // ========== Початок зони редагування ==============
  let correctType = typeof options === "string" || typeof options === "object";
  if (!correctType) {
    throw new Error("Expecting string or object as fetch parameter");
  }

  const result = fetch(options);

  return result;

  // return fetch(typeof options === "string" ? options : options.url).then(
  //   (response) => {
  //     if (response.status >= 200 && response.status < 400) {
  //       return Promise.resolve(response.json());
  //     } else if (response.status >= 400) {
  //       throw Promise.reject(new Error(response.status));
  //     }
  //   }
  // );
  // ========== Кінець зони редагування ===============
}

//

const visualize = async (val) => {
  try {
    console.log("Name of pokemon ---> ", await handleRequest(val));
  } catch (error) {
    console.error(error);
  }
};

const correctUrl = "https://pokeapi.co/api/v2/pokemon/2/";

// visualize(5);
visualize(correctUrl);
visualize(new Request(correctUrl));

const wrongUrl = "https://pokeapi.co/api/v2/pokemon/999/";

// visualize(wrongUrl);
// visualize(new Request(wrongUrl));
