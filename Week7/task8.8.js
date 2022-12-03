const sourceHtml = `
<html>
  <head></head>
  <body>
    <div>
      <ul>
        <li class="target">Елемент списку</li>
      </ul>
    </div>
  </body>
</html>
`;

function manipulateDOM() {
  // // ========== Початок зони редагування ===============
  // 1
  const target = document.querySelector(".target");
  const list = document.querySelector("ul");
  const div = document.querySelector("div");

  const insertedBefore = document.createElement("li");
  insertedBefore.textContent = "Елемент списку";
  insertedBefore.className = "inserted";
  target.before(insertedBefore);

  const insertedAfter = document.createElement("li");
  insertedAfter.textContent = "Елемент списку";
  insertedAfter.className = "inserted";
  target.after(insertedAfter);

  list.className = "updated";

  const paragraph = document.createElement("p");
  paragraph.textContent = "Successfully updated!";
  paragraph.style = "color: #aa0000;";
  div.append(paragraph);

  // 2
  let count = 0;

  const handleClick = () => {
    count += 1;
    paragraph.textContent = `Click fired: ${count} разів!`;
  };

  list.addEventListener("click", handleClick);
  // // ========== Кінець зони редагування ===============
}

manipulateDOM();
