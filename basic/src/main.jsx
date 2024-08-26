import { createRoot } from "react-dom/client";
// react dom which update page etc
// all the changes in this dom add file removes Qk har kam tho aik he page py karna hai
// qk react tho single web page application hai
import App from "./App.jsx";

function MyName() {
  return <h2>this is Noman</h2>;
}
// =================
const ReactElement = {
  //it is not working because this is custom react and in
  //customReact we also write a custom render code for this
  //  but in this code not a customReact render code for this
  //step# 2
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "click me to visite google",
};

const anotherElement = (
  <a href="http://google.com" target="_blank">
    {" "}
    visit to google
  </a>
);
// =======================
reactElement = React.createElement(
  "a",
  { href: "http://google.com" },
  "visit to google"
);

createRoot(document.getElementById("root")).render(
  <App />
  //  <myName/> //not working beause firstLetter is small
  //  <MyName/>
  // MyName()
  // <ReactElement/>
  // ReactElement
  // <anotherElement/>//not working
  // anotherElement
  // reactElement
);
