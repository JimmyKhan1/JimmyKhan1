import React, { useState } from "react";

const Index = () => {
  const [count, setcount] = useState(0);
  const [value, setvalue] = useState(0);

  const handle = (val: any) => {
    setvalue(val.target.value);
    console.log(handle);
  };
  const handleClick = () => {
    if (value > 0) {
      setcount(value);
    }
  };
//
  return (
    <div>
      <h1>Counter: {count} </h1>
      {count < 0 ? setcount(0) : null}
      {count > 100 ? setcount(100) : null}
      <button onClick={() => setcount(count + 1)}>Increment</button>
      <button onClick={() => setcount(count - 1)}>Decrement</button> <br />
      <input type="number" onChange={handle} />
      <br />
      <button onClick={handleClick}>Get Value</button>
    </div>
  );
};

//

export default Index;
