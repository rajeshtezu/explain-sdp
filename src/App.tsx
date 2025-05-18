import * as sdpTransform from 'sdp-transform';
import { useState } from 'react';

import { MonacoEditor } from './MonacoEditor';
import './App.css';

function App() {
  const [sdp, setSdp] = useState<string>('');
  const [parsedSDP, setParsedSDP] = useState<any>(null);

  const handleSDPChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const sdpString = e.target.value;
    setSdp(sdpString);
  };

  const handleExplain = () => {
    try {
      if (!sdp) {
        alert('Please enter a valid SDP string');
        return;
      }

      // Parse the SDP string using sdp-transform
      const parsedSDP = sdpTransform.parse(sdp);
      setParsedSDP(parsedSDP);
    } catch (error) {
      console.error('Error parsing SDP:', error);
    }
  };

  const copySDPString = () => {
    navigator.clipboard
      .writeText(sdp)
      .then(() => {
        console.log('SDP copied to clipboard');
        alert('SDP copied');
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  };

  const clearSDP = () => {
    setSdp('');
    setParsedSDP(null);
  };

  return (
    <>
      <h1 className="header">Explain SDP</h1>

      <section className="sdp-input-section">
        <label htmlFor="sdp" className="sdp-textarea-label">
          Enter your SDP string here
        </label>
        <textarea
          name="sdp"
          id="sdp"
          cols={30}
          rows={10}
          placeholder="Enter SDP here"
          className="sdp-textarea"
          onChange={handleSDPChange}
          value={sdp}
        ></textarea>

        <div className="btn-container">
          <button className="btn" onClick={handleExplain}>
            Explain
          </button>
          <button className="btn" onClick={copySDPString}>
            Copy
          </button>
          <button className="btn" onClick={clearSDP}>
            Clear
          </button>
        </div>
      </section>

      <section>
        <h2>Parsed SDP</h2>

        {!!parsedSDP && <MonacoEditor parsedSDP={parsedSDP} />}
      </section>
    </>
  );
}

export default App;
