import store from "../store";
import { setFormData } from "../actionCreators";

export function formHTMLElement(element) {
  // let renderElement;
  // if (element.element === "input") {
  //   renderElement = element;
  // }
  // if (element.element === "checkbox") {
  //   renderElement = element;
  // }
  updateLocalStorage(element);
  // return element;
}

function updateLocalStorage(renderElement) {
  let formArray;
  if (localStorage.getItem("formData") === null) {
    formArray = [renderElement];
    localStorage.setItem("formData", JSON.stringify(formArray));
  } else {
    formArray = JSON.parse(localStorage.getItem("formData"));
    formArray.push(renderElement);
    localStorage.removeItem("formData");
    localStorage.setItem("formData", JSON.stringify(formArray));
  }
  store.dispatch(setFormData(formArray));
}
