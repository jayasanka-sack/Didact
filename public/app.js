/** @jsx Didact.createElement */ const element = /*#__PURE__*/ Didact.createElement("div", {
    id: "foo"
}, /*#__PURE__*/ Didact.createElement("a", null, "bar"), /*#__PURE__*/ Didact.createElement("b", null), /*#__PURE__*/ Didact.createElement("h1", null, "Hi"), /*#__PURE__*/ Didact.createElement("div", null, /*#__PURE__*/ Didact.createElement("table", null, /*#__PURE__*/ Didact.createElement("tr", null, /*#__PURE__*/ Didact.createElement("th", null, "Name"), /*#__PURE__*/ Didact.createElement("th", null, "Age")), /*#__PURE__*/ Didact.createElement("tr", null, /*#__PURE__*/ Didact.createElement("td", null, "Saman"), /*#__PURE__*/ Didact.createElement("td", null, "10")), /*#__PURE__*/ Didact.createElement("tr", null, /*#__PURE__*/ Didact.createElement("td", null, "Nimal"), /*#__PURE__*/ Didact.createElement("td", null, "16")), /*#__PURE__*/ Didact.createElement("h1", null, "bee")), /*#__PURE__*/ Didact.createElement("h1", null, "hoo")), /*#__PURE__*/ Didact.createElement("h1", null, "hahaha"), /*#__PURE__*/ Didact.createElement("button", null, "Click me"));
const container = document.getElementById("root");
const updateValue = (e)=>{
    rerender(e.target.value);
};
const rerender = (value)=>{
    const element = /*#__PURE__*/ Didact.createElement("div", null, /*#__PURE__*/ Didact.createElement("input", {
        onInput: updateValue,
        value: value
    }), /*#__PURE__*/ Didact.createElement("h2", null, "Hello ", value), /*#__PURE__*/ Didact.createElement("h1", null, "hahaha"));
    Didact.render(element, container);
};
rerender("World");
