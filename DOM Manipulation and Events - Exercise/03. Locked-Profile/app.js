function lockedProfile() {

    const showMoreClickHandler = (e) => {
        let container = e.target.parentElement;
        // let currentBtnState = e.querySelector("button").textContent;
        showInfo(container);
    };

    function showInfo(container) {
        let checkBox = container.querySelector("input[type='radio']:checked").value;
        if (checkBox === "lock") {
            return;
        }

        let hiddenInfo = container.querySelector("div");
        let btnLabel = container.querySelector("button").textContent;


        switch (btnLabel) {
            case "Show more":
                container.querySelector("button").textContent = "Hide it";
                hiddenInfo.style.display = "block";
                break;
            case "Hide it":
                container.querySelector("button").textContent = "Show more";
                hiddenInfo.style.display = "none";
                break;
        };
    }

    const buttons = document.querySelectorAll("button");
    //buttons type is HTMLCollection
    [...buttons].forEach(button => {
        button.addEventListener("click", showMoreClickHandler);
    });

}