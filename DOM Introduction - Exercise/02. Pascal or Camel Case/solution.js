function solve() {

  let rawText = document.getElementById("text").value;
  let convention = document.getElementById("naming-convention").value

  switch (convention) {
    case "Camel Case":
      camelCase(rawText);
      break;
    case "Pascal Case":
      pascalCase(rawText);
      break;
    default:
      error();
  }

  function camelCase(text) {
    let arr = text.split(" ");
    let r = "";
    for (let i = 0; i < arr.length; i++) {
      if (i != 0) {
        let [firstLetter, ...all] = arr[i];
        r += firstLetter.toUpperCase() + all.join("").toLowerCase();
      } else {
        r += arr[i].toLowerCase();
      }
      result(r)
    }
  }

  function pascalCase(text) {
    let arr = text.split(" ");
    let r = "";
    for (let i = 0; i < arr.length; i++) {
      let [firstLetter, ...all] = arr[i];
      r += firstLetter.toUpperCase() + all.join("").toLowerCase();
    }
    result(r)
  }

  function error() {
    result("Error!")
  }

  function result(content) {
    let resultPlace = document.getElementById("result");
    resultPlace.innerText = content;
  }

}