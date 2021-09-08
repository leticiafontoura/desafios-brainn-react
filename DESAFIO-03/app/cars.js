const carsForm = document.querySelector("[data-js='cars-form']");
const table = document.querySelector("table");

function refreshTable() {

  console.log("Refreshing table..");

  fetch("http://localhost:3333/cars")
    .then((response) => response.json())
    .then((cars) => {
      // If tbody already exists, we simply remove it, because we'll always create a new one.
      const existingTbody = document.querySelector("tbody");
      if (existingTbody) {
        existingTbody.remove();
      }

      if (cars.length === 0) {
        table.insertAdjacentHTML("beforeend", `<tbody><tr><td colspan="6">Nenhum carro cadastrado</td></tr></tbody>`)
        return;
      }



      const tbody = document.createElement("tbody");
      table.appendChild(tbody);
      for (let i = 0; i < cars.length; i++) {
        tbody.insertAdjacentHTML("beforeend", `<tr data-js='table-row'>
        <td><img src="${cars[i].image}" alt="${cars[i].brandModel}" width="130" height="auto" /></td>
        <td>${cars[i].brandModel}</td>
        <td>${cars[i].year}</td>
        <td>${cars[i].plate}</td>
        <td>${cars[i].color}</td>
        <td><button class="del-btn" data-js="del-btn" alt="excluir"><i class="fas fa-trash"></i></button><button class="edit-btn" data-js="edit-btn"><i class="fas fa-pencil-alt"></i></button></td>
        </tr>`)
      }

      const btn = document.querySelectorAll("[data-js='del-btn']")
      const btnArray = Array.from(btn);
      const btnEdit = document.querySelectorAll("[data-js='edit-btn']")
      const btnArrayEdit = Array.from(btnEdit);
      const carsFormEdit = document.querySelector("[data-js='form-edit-modal']");

      for (let i = 0; i < btnArrayEdit.length; i++) {
        btnArrayEdit[i].addEventListener("click", () => {
          carsFormEdit.classList.toggle("expand");
          document.querySelector("[data-js='car-image-edit']").value = cars[i].image;
          document.querySelector("[data-js='car-make-model-edit']").value = cars[i].brandModel;
          document.querySelector("[data-js='car-year-edit']").value = cars[i].year;
          document.querySelector("[data-js='car-license-plate-edit']").value = cars[i].plate;
          document.querySelector("[data-js='car-color-edit']").value = cars[i].color;
        })
      }

      const cancelBtn = document.querySelector("[data-js='cancel-save-btn'");

      cancelBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (carsFormEdit.classList.contains("expand")) {
          carsFormEdit.classList.remove("expand")
        }
      })

      const editForm = document.querySelector("[data-js='cars-form-edit']");
      editForm.addEventListener("submit", (e) => {
        e.preventDefault();
        if (carsFormEdit.classList.contains("expand")) {
          carsFormEdit.classList.remove("expand")
        }

        fetch(`http://localhost:3333/cars/${document.querySelector("[data-js='car-license-plate-edit']").value}`, {
          method: "put",
          body: JSON.stringify({
            image: document.querySelector("[data-js='car-image-edit']").value,
            brandModel: document.querySelector("[data-js='car-make-model-edit']").value,
            year: document.querySelector("[data-js='car-year-edit']").value,
            plate: document.querySelector("[data-js='car-license-plate-edit']").value,
            color: document.querySelector("[data-js='car-color-edit']").value
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          },
        })
        .then(() => {
          refreshTable();
        })
      })

      console.log(btnArray)

      for (let i = 0; i < btnArray.length; i++) {
        btnArray[i].addEventListener("click", () => {
          fetch(
            "http://localhost:3333/cars", {
              method: "delete",
              body: JSON.stringify({
                plate: cars[i].plate,
              }),
              headers: {
                "Content-type": "application/json; charset=UTF-8"
              },
            }
          ).then(() => {
            const errorMessage = document.querySelector("[data-js='error-message']");
            if (errorMessage.style.display = "block") {
              errorMessage.style.display = "none";
            }
            console.log(cars[i].plate)
            refreshTable()
          })
        })


      }

    })


}

refreshTable();

carsForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const carImageInput = document.querySelector("[data-js='car-image']");
  const carImageValue = carImageInput.value;

  const carMakeModelInput = document.querySelector("[data-js='car-make-model']");
  const carMakeModelValue = carMakeModelInput.value;

  const carYearInput = document.querySelector("[data-js='car-year']");
  const carYearValue = carYearInput.value;

  const carLicensePlateInput = document.querySelector("[data-js='car-license-plate']");
  const carLicensePlateValue = carLicensePlateInput.value;

  const carColorInput = document.querySelector("[data-js='car-color']");
  const carColorValue = carColorInput.value;

  fetch("http://localhost:3333/cars", {
      method: "POST",
      body: JSON.stringify({
        image: carImageValue,
        brandModel: carMakeModelValue,
        year: carYearValue,
        plate: carLicensePlateValue,
        color: carColorValue
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then((response) => response.json())
    .then((response) => {
      const errorMessage = document.querySelector("[data-js='error-message']");
      errorMessage.innerHTML = response.message;
      if (response.error) {
        errorMessage.style.display = "block";
      } else {
        errorMessage.style.display = "none"
        refreshTable();
      }
    })

  carImageInput.value = "";
  carMakeModelInput.value = "";
  carYearInput.value = "";
  carLicensePlateInput.value = "";
  carColorInput.value = "";

  carImageInput.focus();

})
