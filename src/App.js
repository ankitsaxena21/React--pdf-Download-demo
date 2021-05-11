import React, { useState } from 'react'
import './App.css';

export default function App() {

  const [url, setUrl] = useState("")
  const getPDF = async () => {
    const dataURL = encodeURI(url);
    fetch(`https://api.html2pdf.app/v1/generate?url=${dataURL}&apiKey=socmojfnJASmCHrI4p4JaL3LQnRK9mJw92dyZdRhXrW16B1nHtHpF9YXc6DfWNAj`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/pdf',
        'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhc2hpc2hAb25hdG8uaW4iLCJhdXRoIjp7ImF1dGhvcml0eSI6IkFETUlOIn0sInJvbGVfdHlwZSI6IkFETUlOIiwiZW1haWwiOiJhc2hpc2hAb25hdG8uaW4iLCJpZCI6MSwiaWF0IjoxNjIwMzgzMTYwLCJleHAiOjE3MDY3ODMxNjB9.qoncz2W1fhSzbamYcG8JsupZxZt-3S9KZ-tqWfBQaXQ`
      },
    })
      .then((response) => response.blob())
      .then((blob) => {
        // Create blob link to download
        const url = window.URL.createObjectURL(
          new Blob([blob]),
        );
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute(
          'download',
          `sample.pdf`,
        );

        // Append to html link element page
        document.body.appendChild(link);

        // Start download
        link.click();

        // Clean up and remove the link
        link.parentNode.removeChild(link);
      });
  }
  return (
    <>
      <h2 style={{ textAlign: "center" }}>HMTL To PDF Download Demo</h2>
      <div className="App">
        <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} className="pdfInput" />
        <button onClick={getPDF} className="pdfBtn">Get PDF</button>
      </div>
    </>
  );
}
