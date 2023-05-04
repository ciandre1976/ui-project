import * as esbuild from "esbuild-wasm";
import { useState, useEffect, useRef } from "react";

function App() {
  const [input, setInput] = useState("");
  const [code, setCode] = useState("");
  const r = useRef<any>();

  const startService = async () => {
    r.current = await esbuild.startService({
      worker: true,
      wasmURL: "/esbuild.wasm",
    });
  };

  const onClick = async () => {
    if (!r.current) {
      return;
    }
    const res = await r.current.transform(input, {
      loader: "JSX",
      target: "es2015",
    });
  };

  useEffect(() => {
    startService();
  }, []);

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
