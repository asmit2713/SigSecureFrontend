import React from "react";

export default function ResultCard({ result, error, isVerifying }) {
  const data = result?.data || result || {}; // fallback if backend sends root object

  const signatureType = data.signature_type || "Unknown";
  const isValid = !!data.is_valid;

  return (
    <div className="card">
      <h2 className="result-title">Verification Result</h2>

      {isVerifying && (
        <p className="result-placeholder">Verifying... please wait.</p>
      )}

      {error && <div className="error-box">{error}</div>}

      {!result && !error && !isVerifying && (
        <p className="result-placeholder">
          Upload a signed PDF and click <strong>Verify Signature</strong>.
        </p>
      )}

      {result && !error && (
        <>
          <div className="result-section">
            <h3>Summary</h3>
            <div className="result-row">
              Signature type:{" "}
              <span className="badge badge-type">{signatureType}</span>
            </div>
            <div className="result-row">
              Overall status:{" "}
              <span
                className={
                  "badge " + (isValid ? "badge-valid" : "badge-invalid")
                }
              >
                {isValid ? "Valid" : "Invalid"}
              </span>
            </div>
          </div>

          <div className="result-section">
            <h3>Cryptographic Checks</h3>
            <div className="result-row">
              Hash algorithm: {data.hash_algorithm || "—"}
            </div>
            <div className="result-row">
              Hash match:{" "}
              <span className={data.hash_match ? "status-valid" : "status-invalid"}>
                {data.hash_match ? "Match ✔" : "Mismatch ✖"}
              </span>
            </div>
            <div className="result-row">
              RSA verification:{" "}
              <span className={data.rsa_valid ? "status-valid" : "status-invalid"}>
                {data.rsa_valid ? "Valid ✔" : "Invalid ✖"}
              </span>
            </div>
          </div>

          <div className="result-section">
            <h3>Certificate (if present)</h3>
            {data.certificate ? (
              <>
                <div className="result-row">
                  Subject: {data.certificate.subject || "—"}
                </div>
                <div className="result-row">
                  Issuer: {data.certificate.issuer || "—"}
                </div>
                <div className="result-row">
                  Valid from: {data.certificate.valid_from || "—"}
                </div>
                <div className="result-row">
                  Valid to: {data.certificate.valid_to || "—"}
                </div>
              </>
            ) : (
              <div className="result-row result-placeholder">
                No certificate information returned by backend.
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
