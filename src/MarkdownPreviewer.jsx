import React, { useState, useEffect } from 'react';
import { marked } from 'marked';

// Enable line breaks for optional bonus
marked.setOptions({
  breaks: true,
});

const defaultMarkdown = `# Welcome to my Markdown Previewer!

## This is a sub-heading

Here's a [link](https://www.freecodecamp.org).

\`inline code\`

\`\`\`
// This is a code block
function sayHello() {
  console.log("Hello, world!");
}
\`\`\`

- List item 1
- List item 2
- List item 3

> This is a blockquote.

![Image](https://upload.wikimedia.org/wikipedia/commons/6/62/FCCLogo.svg)

**This is bold text**
`;

const MarkdownPreviewer = () => {
  const [markdown, setMarkdown] = useState(defaultMarkdown);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '960px', margin: 'auto' }}>
      <h1 style={{ textAlign: 'center' }}>Markdown Previewer</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        <textarea
          id="editor"
          value={markdown}
          onChange={handleChange}
          style={{
            width: '100%',
            minHeight: '200px',
            padding: '10px',
            fontSize: '16px',
            flex: '1 1 45%',
          }}
        />
        <div
          id="preview"
          style={{
            width: '100%',
            minHeight: '200px',
            padding: '10px',
            border: '1px solid #ccc',
            backgroundColor: '#f9f9f9',
            flex: '1 1 45%',
          }}
          dangerouslySetInnerHTML={{ __html: marked(markdown) }}
        />
      </div>
    </div>
  );
};

export default MarkdownPreviewer;
