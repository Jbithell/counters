import { useCallback, useEffect, useState } from "react";

export const Counter = (props) => {
  const [counterValue, setCounterValue] = useState(0);

  const handleKeyPress = useCallback((event) => {
    if (event.key == props.number) {
      setCounterValue(counterValue + (event.altKey ? -1 : 1));
    }
  }, [counterValue, setCounterValue, props.number]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div>
      <h1>Counter {props.number} = {counterValue}</h1>
    </div>
  );
}

