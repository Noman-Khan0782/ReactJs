function customRender(reactElement, container) {//step # 4

  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
 domElement.setAttribute(prop,reactElement.props[prop])  
  }
  container.appendChild(domElement)
}
const reactElement = {
  //step# 2
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "click me to visite google",
};

const mainContainer = document.querySelector("#root"); //step 1

customRender(reactElement, mainContainer); //step# 3 in this steps
//inject reactElement in mainContainer. so create a function
