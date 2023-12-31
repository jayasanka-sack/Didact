/** @jsx Didact.createElement */
function Counter(props) {
  const [state, setState] = Didact.useState(1)
  const [state2, setState2] = Didact.useState(1)

  return (
    <div>
    <h1 onClick={() => setState(c => c + 1)}>
      Count: {state}
    </h1>
      <button onClick={() => setState2(c => c + 1)}>+</button>
    </div>
  )
}

const element = <Counter />
const container = document.getElementById("root")
Didact.render(element, container)
