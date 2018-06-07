// import store from "../store";
// import { setFormData } from "../actionCreators";
import React from "react";
import Textarea from "../components/form-elements/Textarea";
import Checkbox from "../components/form-elements/Checkbox";
import Counter from "../components/form-elements/Counter";
import Dropdown from "../components/form-elements/Dropdown";

export function writeElementToCanvas(element) {
  console.log(element);
  if (element.element === "input") {
    const { label, placeholder, index } = element;
    return <Textarea key={element.index} {...element} />;
  }
  if (element.element === "checkbox") {
    return <Checkbox key={element.index} {...element} />;
  }
  if (element.element === "counter") {
    return <Counter key={element.index} {...element} />;
  }
  if (element.element === "dropdown") {
    return <Dropdown key={element.index} {...element} />;
  }
}
