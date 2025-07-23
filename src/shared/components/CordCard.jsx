import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const code = `
const profile = {
  name: 'Nirob Sarker',
  title: 'Front-End Developer | Problem Solver',
  skills: ['React', 'Node.js', 'MongoDB'],
  hardWorker: true,
  problemSolver: true,
  yearsOfExperience: 1,
  hireable: function () {
    return this.hardWorker &&
    this.problemSolver &&
    this.skills.length >= 3;
  }
};
`;

const CodeSnippet = () => {
  return (
    <div className="relative w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-xl backdrop-blur-sm bg-black/30 border border-gray-700">
      <div className="bg-[#1e1e1e] px-4 py-2 text-white font-mono text-sm rounded-t-xl border-b border-gray-700">
        developer.js
      </div>
      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        customStyle={{
          margin: 0,
          padding: "1.5rem",
          fontSize: "1rem",
          background: "transparent",
          overflow: "visible",
          minHeight: "40vh",
          whiteSpace: "pre-wrap",
        }}
        wrapLongLines
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeSnippet;
