import MonacoEditor from "@monaco-editor/react";

function Editor({ code, setCode }) {
  return (
    <MonacoEditor
      height="500px"
      defaultLanguage="python"
      theme="vs-dark"
      value={code}
      onChange={(value) => setCode(value)}
    />
  );
}

export default Editor;