/** @jsx Didact.createElement */ function Counter(props) {
    const [state, setState] = Didact.useState(1);
    const [state2, setState2] = Didact.useState(1);
    return /*#__PURE__*/ Didact.createElement("div", null, /*#__PURE__*/ Didact.createElement("h1", {
        onClick: ()=>setState((c)=>c + 1)
    }, "Count: ", state), /*#__PURE__*/ Didact.createElement("button", {
        onClick: ()=>setState2((c)=>c + 1)
    }, "+"));
}
const element = /*#__PURE__*/ Didact.createElement(Counter, null);
const container = document.getElementById("root");
Didact.render(element, container);
