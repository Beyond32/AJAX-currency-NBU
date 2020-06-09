const table = document.getElementById("table");
document.addEventListener("DOMContentLoaded", function () {
  const url = document.querySelector("input[name=url]");

  fetch(url.value)
    .then((r) => {
      return r.json();
    })
    .then((data) => {
      data.forEach((item) => {
        const itemTr = document.createElement("tr");

        Object.keys(item).forEach((key) => {
          const keyTd = document.createElement("td");

          keyTd.appendChild(document.createTextNode(item[key]));

          itemTr.appendChild(keyTd);
        });

        table.appendChild(itemTr);
      });
    });

  x.open("GET", url.value, true);

  x.send();
});
