/** @jsx Didact.createElement */ // const element = (
//   <div id="foo">
//     <a>bar</a>
//     <b/>
//     <h1>Hi</h1>
//     <div>
//       <table>
//         <tr>
//           <th>Name</th>
//           <th>Age</th>
//         </tr>
//         <tr>
//           <td>Saman</td>
//           <td>10</td>
//         </tr>
//         <tr>
//           <td>Nimal</td>
//           <td>16</td>
//         </tr>
//         <h1>bee</h1>
//       </table>
//       <h1>hoo</h1>
//     </div>
//     <h1>hahaha</h1>
//     <button>Click me</button>
//   </div>
// )
function App(props) {
    return /*#__PURE__*/ Didact.createElement("h1", null, "Hi ", props.name);
}
const element = /*#__PURE__*/ Didact.createElement(App, {
    name: "foo"
});
const container = document.getElementById("root");
Didact.render(element, container);
