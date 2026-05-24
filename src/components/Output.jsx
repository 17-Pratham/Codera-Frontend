function Output({ output, error }) {

  return (

    <div
      style={{
        marginTop: "20px",
      }}
    >

      <div
        style={{
          background: "#1e1e1e",
          color: "#00ff88",
          padding: "20px",
          borderRadius: "10px",
          minHeight: "120px",
          marginBottom: "20px",
        }}
      >

        <h2>Output</h2>

        <pre>{output}</pre>

      </div>

      <div
        style={{
          background: "#1e1e1e",
          color: "red",
          padding: "20px",
          borderRadius: "10px",
          minHeight: "120px",
        }}
      >

        <h2>Error</h2>

        <pre>{error}</pre>

      </div>

    </div>
  );
}

export default Output;