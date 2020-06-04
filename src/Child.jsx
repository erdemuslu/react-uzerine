import React, { useCallback, useState } from "react"

const functionBus = new Set()

const Child = ({ value: valueFromParent }) => {
  const [display, setDisplay] = useState(false)
  const [value, setValue] = useState(0);

  // const increment = useCallback(() => setValue(prevState => prevState + 1), [value])
  // const decrement = useCallback(() => setValue(prevState => prevState - 1), [value])
  // const handleDisplay = useCallback(() => setDisplay(prevState => !prevState), [display])

  const increment = () => setValue(prevState => prevState + 1)
  const decrement = () => setValue(prevState => prevState - 1)
  const handleDisplay = () => setDisplay(prevState => !prevState)

  functionBus.add(increment)
  functionBus.add(decrement)
  functionBus.add(handleDisplay)

  console.log('size', functionBus.size)

  return (
    <div>
      <h3>Child Component</h3>
      <p>Value: {value}</p>
      <p>Value from parent: {valueFromParent}</p>
      {
        display ? <p>Test</p> : null
      }
      <button type="button" onClick={increment}>Increment</button>
      <button type="button" onClick={decrement}>Decrement</button>
      <button type="button" onClick={handleDisplay}>Update display</button>
    </div>
  );
};

export default Child
