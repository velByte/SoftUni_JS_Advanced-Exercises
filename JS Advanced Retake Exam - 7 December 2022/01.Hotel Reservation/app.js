window.addEventListener("load", solve);

function solve() {
  document
    .querySelector("#next-btn")
    .addEventListener("click", nextClickHendler);

  function nextClickHendler(event) {
    event.preventDefault();

    const firstName = document.querySelector("#first-name");
    const lastName = document.querySelector("#last-name");
    const dateIn = document.querySelector("#date-in");
    const dateOut = document.querySelector("#date-out");
    const peopleCount = document.querySelector("#people-count");

    const firstNameValue = firstName.value;
    const lastNameValue = lastName.value;
    const dateInValue = dateIn.value;
    const dateOutValue = dateOut.value;
    const peopleCountValue = peopleCount.value;

    const editBtn = document.createElement("button");
    const continueBtn = document.createElement("button");
    const confirmBtn = document.createElement("button");
    const cancelBtn = document.createElement("button");

    if (
      firstName.value === "" ||
      lastName.value === "" ||
      dateIn.value === "" ||
      dateOut.value === "" ||
      peopleCount.value === ""
    ) {
      return;
    }

    const unordetList = document.querySelector(".info-list");
    const ulConfirm = document.querySelector(".confirm-list");

    const liItem = document.createElement("li");
    const articleItem = document.createElement("article");
    const h3NameItem = document.createElement("h3");
    const pFromDateItem = document.createElement("p");
    const pToDate = document.createElement("p");
    const pPepleCount = document.createElement("p");

    liItem.classList.add("reservation-content");
    editBtn.classList.add("edit-btn");
    continueBtn.classList.add("continue-btn");
    confirmBtn.classList.add("confirm-btn");
    cancelBtn.classList.add("cancel-btn");

    editBtn.textContent = `Edit`;
    continueBtn.textContent = `Continue`;
    confirmBtn.textContent = `Confirm`; 
    cancelBtn.textContent = `Cancel`; 

    h3NameItem.textContent = `Name: ${firstName.value} ${lastName.value}`;
    pFromDateItem.textContent = `From date: ${dateIn.value}`;
    pToDate.textContent = `To date: ${dateOut.value}`;
    pPepleCount.textContent = `For ${peopleCount.value} people`;

    editBtn.addEventListener("click", editClickedHendler);
    continueBtn.addEventListener("click", continueClickedHendler);
    confirmBtn.addEventListener("click", confirmClickedHendler);
    cancelBtn.addEventListener("click", cancelClickedHendler);

    articleItem.appendChild(h3NameItem);
    articleItem.appendChild(pFromDateItem);
    articleItem.appendChild(pToDate);
    articleItem.appendChild(pPepleCount);

    liItem.appendChild(articleItem);
    liItem.appendChild(editBtn);
    liItem.appendChild(continueBtn);

    unordetList.appendChild(liItem);

    firstName.value = "";
    lastName.value = "";
    dateIn.value = "";
    dateOut.value = "";
    peopleCount.value = "";

    document.querySelector("#next-btn").disabled = true;

    function editClickedHendler(event){
        document.querySelector(".edit-btn").disabled = false;
        firstName.value = firstNameValue;
        lastName.value = lastNameValue;
        dateIn.value = dateInValue;
        dateOut.value = dateOutValue;
        peopleCount.value = peopleCountValue;
        unordetList.removeChild(liItem);
        document.querySelector("#next-btn").disabled = false;
    }

    function continueClickedHendler(event){
        document.querySelector(".continue-btn").disabled = false;

        liItem.removeChild(editBtn);
        liItem.removeChild(continueBtn);

        liItem.appendChild(confirmBtn); 
        liItem.appendChild(cancelBtn);

        ulConfirm.appendChild(liItem)
    }

    function confirmClickedHendler(event){
        ulConfirm.removeChild(liItem);
        document.querySelector("#next-btn").disabled = false;
        const h1Verification = document.querySelector("#verification");
        h1Verification.classList.add("reservation-confirmed");
        h1Verification.textContent = "Confirmed."
    }

    function cancelClickedHendler(event){
        ulConfirm.removeChild(liItem);
        document.querySelector("#next-btn").disabled = false;
        const h1Verification = document.querySelector("#verification");
        h1Verification.classList.add("reservation-cancelled");
        h1Verification.textContent = "Cancelled."
    }

  }
}
