function App(): React.ReactElement {
  return (
    <>
      <div style={{ margin: "10px" }}>
        <textarea>Code Here</textarea>
        <div>
          <button style={{ background: "black", color: "white" }}>
            Submit
          </button>
        </div>
        <pre></pre>
      </div>
    </>
  );
}
export default App;
