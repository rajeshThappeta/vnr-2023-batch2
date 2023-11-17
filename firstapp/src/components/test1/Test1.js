import Test2 from "../test2/Test2";
import { useState } from "react";

function Test1() {
  //state
  let [counter, setCounter] = useState(100);
  let [user, setUser] = useState({ id: 1, name: "ravi" });

  return (
    <div className="bg-warning p-5 m-5">
      <h1>Parent</h1>
      <h2>Counter : {counter}</h2>
      {/* nest Test2 */}
      <Test2 counter={counter} user={user} setCounter={setCounter} />
    </div>
  );
}

export default Test1;
