document.addEventListener("DOMContentLoaded", () => {
  const todoList = () => {
    const textList = document.querySelector("#todo-list");
    const buttonAdd = document.querySelector("#add");
    const ItemAdd = document.querySelector(".list-item");

    const addTextList = () => {
      const inputValue = textList.value.trim();
      if (inputValue === "") {
        alert("กรุณากรอกข้อความ");
        return;
      }

      const newList = document.createElement("li");
      newList.textContent = inputValue;
      textList.value = "";

      const iconRemove = document.createElement("i");
      iconRemove.classList.add("fa-solid", "fa-xmark");

      iconRemove.addEventListener("click", () => {
        newList.remove();
      });

      newList.appendChild(iconRemove);
      ItemAdd.appendChild(newList);
    };

    buttonAdd.addEventListener("click", (event) => {
      event.preventDefault();
      addTextList();
    });
  };
  todoList();
});
