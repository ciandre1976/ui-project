import * as esbuild from "esbuild-wasm";
import { useState, useEffect } from "react";

function App(): React.ReactElement {
  const [input, setInput] = useState("");
  const [code, setCode] = useState("");

  const startService = async () => {
    const service = await esbuild.startService({
      worker: true,
      wasmURL: "/esbuild.wasm",
    });
    console.log(service);
  };

  useEffect(() => {
    startService();
  }, []);

  const onClick = () => {
    console.log(input);
  };
  return (
    <>
      <div style={{ margin: "10px" }}>
        <textarea onChange={(e) => setInput(e.target.value)} />
        <div>
          <button
            style={{ background: "black", color: "white" }}
            onClick={onClick}
          >
            Submit
          </button>
        </div>
        <pre>{code}</pre>
      </div>
    </>
  );
}
export default App;
