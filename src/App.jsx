import React, { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import FileUpload from "./components/FileUpload.jsx";
import ResultCard from "./components/ResultCard.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);

  return (
    <div className="app">
      <Navbar />

      <main className="main-container">
        <div className="grid">
          <div className="card">
            <h1 className="card-title">SigSecure</h1>
            <p className="card-subtitle">
              Verify SES, AES, and QES signatures using your Flask backend.
            </p>

            <FileUpload
              setResult={setResult}
              setError={setError}
              setIsVerifying={setIsVerifying}
              isVerifying={isVerifying}
            />
          </div>

          <ResultCard
            result={result}
            error={error}
            isVerifying={isVerifying}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
