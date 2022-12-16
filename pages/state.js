import { useEffect, useState } from "react";

export default function Page() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function setState() {
      setCount(50, function () {
        console.log("setState callback");
        console.log(count);
      });
    }
    setState();
  }, []);

  return (
    <div>
      {/* center div */}
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        {/* main div */}
        <p>Count: {count}</p>
        <button
          className="btn ptn-primary m-2"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
        <button
          className="btn ptn-primary m-2"
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
        <button className="btn ptn-primary m-2" onClick={() => setCount(0)}>
          Reset
        </button>
        <button className="btn ptn-primary m-2" onClick={() => setCount(10)}>
          State
        </button>
      </div>
    </div>
  );
}
