document.addEventListener("DOMContentLoaded", () => {
  const todoList = () => {
    const inputList = document.querySelector("#todo-list");
    const buttonAdd = document.querySelector("#add");
    const titleItem = document.querySelector(".list-item");

    const addinput = () => {
      const inputValue = inputList.value.trim();
      if (inputValue === "") {
        alert("กรุณากรอกข้อมูล");
        return;
      }
      inputList.value = "";

      const newList = document.createElement("li");
      newList.classList.add("take-item");

      const textSpan = document.createElement("span");
      textSpan.textContent = inputValue;

      const checkMask = document.createElement("i");
      checkMask.classList.add("fa-solid", "fa-check");

      const removeIcon = document.createElement("i");
      removeIcon.classList.add("fa-solid", "fa-xmark");

      removeIcon.addEventListener("click", () => {
        newList.remove();
      });

      checkMask.addEventListener("click", () => {
        textSpan.classList.toggle("completed");
      });

      newList.appendChild(checkMask);
      checkMask.appendChild(textSpan);
      newList.appendChild(removeIcon);
      titleItem.appendChild(newList);
    };

    buttonAdd.addEventListener("click", (event) => {
      event.preventDefault();
      addinput();
    });
  };
  todoList();
});
