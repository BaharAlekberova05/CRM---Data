// "Select All" düyməsinə tıklanıldığında checkbox-ların seçim vəziyyətini dəyişmək
const selectAllBtn = document.getElementById("selectAllBtn");
const checkboxes = document.querySelectorAll(".select-contact");
let allSelected = false; // Checkbox-ların seçilib-seçilmədiyini izləmək üçün dəyişən

function selectAllFunc() {
  selectAllBtn.addEventListener("click", () => {
    allSelected = !allSelected; // Seçim vəziyyətini dəyişdir

    checkboxes.forEach((checkbox) => {
      checkbox.checked = allSelected; // Bütün checkbox-ları seç və ya seçimdən çıxar
    });
  });
}

selectAllFunc();