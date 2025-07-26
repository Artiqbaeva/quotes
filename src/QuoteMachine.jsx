import React, { useState, useEffect } from 'react';

const QuoteMachine = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const fetchQuote = async () => {
    try {
      const res = await fetch(`https://api.quotable.io/random?timestamp=${new Date().getTime()}`);
      const data = await res.json();
      setQuote(data.content);
      setAuthor(data.author);
    } catch (err) {
      setQuote("Be yourself; everyone else is already taken.");
      setAuthor("Oscar Wilde");
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const handleNewQuote = () => {
    fetchQuote();
  };

  const tweetURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `"${quote}" - ${author}`
  )}`;

  return (
    <div id="quote-box" style={{
      maxWidth: '600px',
      margin: '100px auto',
      padding: '30px',
      backgroundColor: '#ffffff',
      borderRadius: '10px',
      textAlign: 'center',
      boxShadow: '0 0 15px rgba(0,0,0,0.2)',
    }}>
      <div id="text" style={{ fontSize: '24px', marginBottom: '15px' }}>
        "{quote}"
      </div>
      <div id="author" style={{ fontSize: '20px', fontStyle: 'italic', marginBottom: '25px' }}>
        - {author}
      </div>
      <button id="new-quote" onClick={handleNewQuote} style={{
        padding: '10px 20px',
        marginRight: '15px',
        backgroundColor: '#4caf50',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
      }}>
        New Quote
      </button>
      <a
        id="tweet-quote"
        href={tweetURL}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          padding: '10px 20px',
          backgroundColor: '#1da1f2',
          color: '#fff',
          borderRadius: '5px',
          textDecoration: 'none',
        }}
      >
        Tweet
      </a>
    </div>
  );
};

export default QuoteMachine;
