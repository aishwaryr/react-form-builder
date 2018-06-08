export function exportForm() {
  if (localStorage.getItem("formData") === null) {
    return { form: "No Data Found" };
  }
  let formArray = JSON.parse(localStorage.getItem("formData"));
  console.log(formArray);
}

export function saveForm() {
  if (localStorage.getItem("formData") === null) {
    return { form: "No Data Found" };
  }
  let formArray = JSON.parse(localStorage.getItem("formData"));
  console.log(formArray);

  let forms = [];
  if (localStorage.getItem("forms") === null) {
    let formName = `form-${forms.length}`;
    let tempObj = {};
    tempObj[formName] = formArray;
    forms.push(tempObj);
  } else {
    forms = JSON.parse(localStorage.getItem("forms"));
    let formName = `form-${forms.length}`;
    let tempObj = {};
    tempObj[formName] = formArray;
    forms.push(tempObj);
  }
  localStorage.removeItem("formData");
  localStorage.setItem("forms", JSON.stringify(forms));
}

export function fetchFormsListFromLocalStorage() {
  if (localStorage.getItem("forms") === null) {
    return [];
  } else {
    let formsList = JSON.parse(localStorage.getItem("forms"));
    return formsList;
  }
}
