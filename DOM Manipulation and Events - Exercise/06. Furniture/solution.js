function solve() {

  let generateBtn = document.querySelector('button');
  let buyBtn = document.querySelectorAll('button')[1];

  generateBtn.addEventListener('click', generate);
  buyBtn.addEventListener('click', buy);


  function buy(e) {
    //Get all checked items
    let checkedItemsArr = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(x => x.parentNode.parentNode);
    let totalPrice = 0;
    let avrDecFactor = 0;

    let boughtItems = [];

    for (let i = 0; i < checkedItemsArr.length; i++) {
      let currentRow = checkedItemsArr[i];
      let currentPrice = Number(currentRow.children[2].textContent);
      let currentDecFactor = Number(currentRow.children[3].textContent);
      let currentName = currentRow.children[1].textContent;

      totalPrice += currentPrice;
      avrDecFactor += currentDecFactor;

      boughtItems.push(currentName);
    }

    avrDecFactor /= checkedItemsArr.length;

    let result = "";

    result += `Bought furniture: ${boughtItems.join(', ')}\n`;
    result += `Total price: ${totalPrice.toFixed(2)}\n`;
    result += `Average decoration factor: ${avrDecFactor}`;

    let textArea = document.getElementsByTagName('textarea')[1];
    textArea.textContent = result;

  }


  function generate(e) {
    let content = document.querySelector('textarea').value;

    if (content.length > 0) {
      let arr = JSON.parse(content);

      for (let i = 0; i < arr.length; i++) {
        addElement(arr[i]);
      }

    }

  }

  function addElement(obj) {
    let { name, price, decFactor, img } = obj;


    let tr = document.createElement('tr');
    let tdName = document.createElement('td');
    let tdPrice = document.createElement('td');
    let tdDecFactor = document.createElement('td');
    let tdImg = document.createElement('td');

    let p_name = document.createElement('p');
    let p_price = document.createElement('p');
    let p_decFactor = document.createElement('p');
    let imgE = document.createElement('img');

    p_name.textContent = name;
    p_price.textContent = price;
    p_decFactor.textContent = decFactor;
    imgE.src = img;

    tdName.appendChild(p_name);
    tdPrice.appendChild(p_price);
    tdDecFactor.appendChild(p_decFactor);
    tdImg.appendChild(imgE);

    tr.appendChild(tdImg);
    tr.appendChild(tdName);
    tr.appendChild(tdPrice);
    tr.appendChild(tdDecFactor);

    let tdMark = document.createElement('td');
    let input = document.createElement('input');
    input.type = 'checkbox';
    tdMark.appendChild(input);
    tr.appendChild(tdMark);

    document.querySelector('tbody').appendChild(tr);

  }


}