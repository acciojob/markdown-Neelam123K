import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

function Markdown() {
  const [markdown, setMarkdown] = useState("");
  const [loading, setLoading] = useState(true);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  const changeLoadingVar = () => {
    setLoading(false);
  };
// UseEffect 
  useEffect(() => {
    setTimeout(changeLoadingVar, 3000);
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="app">
      {/* text area */}
      <textarea className="textarea" onChange={handleChange} />
      <ReactMarkdown className="preview">{markdown}</ReactMarkdown>
    </div>
  );
}

export default Markdown;