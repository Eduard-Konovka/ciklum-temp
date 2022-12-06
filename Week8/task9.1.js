const completionFlags = [];

async function asyncActions() {
  // ========== Початок зони редагування ===============
  Promise.resolve().then(() => action("2"));
  action("1");
  setTimeout(function () {
    action("4");
  }, 0);
  Promise.resolve().then(() => action("3"));
  // ========== Кінець зони редагування ===============
}

function action(pos) {
  completionFlags.push(pos);
}

asyncActions();

setTimeout(() => {
  console.log(completionFlags);
}, 0);
