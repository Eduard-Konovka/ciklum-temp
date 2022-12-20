async function handleRequest(options) {
  // ========== Початок зони редагування ==============
  const correctType =
    typeof options === "object" || typeof options === "string";
  if (!correctType) {
    throw new Error("Expecting string or object as fetch parameter");
  }

  const result = await fetch(options);

  if (result.status >= 200 && result.status < 400) {
    return result;
  } else {
    throw new Error(result.status);
  }
  // ========== Кінець зони редагування ===============
}

// Код для перевірки в консолі ========================
const visualize = async (val) => {
  try {
    console.log(
      "Name of pokemon ---> ",
      await handleRequest(val)
        .then((data) => data.json())
        .then((obj) => obj.name)
    );
  } catch (error) {
    console.error("Error ---> ", error.message);
  }
};

const correctUrl = "https://pokeapi.co/api/v2/pokemon/2/";
visualize(5);
visualize(new Request(correctUrl));
visualize(correctUrl);

const wrongUrl = "https://pokeapi.co/api/v2/pokemon/999/";
visualize(new Request(wrongUrl));
visualize(wrongUrl);
