import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

const App = () => {
  const [markdown, setMarkdown] = useState("# Hello, Markdown!");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000); 
  }, []);

  return (
    <div>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <textarea value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
          />

          <div>
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
