import { useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';

import './MonacoEditor.css';

export function MonacoEditor({ parsedSDP }: { parsedSDP: any }) {
  const [sdp, setSdp] = useState<any>(null);
  const [fontSize, setFontSize] = useState(16);
  const [theme, setTheme] = useState('vs-dark');
  const [showMinimap, setShowMinimap] = useState(false);
  const [readOnly, setReadOnly] = useState(true);

  let timeout: any = null;

  useEffect(() => {
    setSdp(parsedSDP);
  }, [parsedSDP]);

  const handleParseSDPChange = (value: string | undefined) => {
    // Debounce the parsing to avoid performance issues
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      if (value) {
        setSdp(JSON.parse(value));
      }
    }, 2000);
  };

  const copyParsedSDP = () => {
    if (!sdp) {
      alert('No parsed SDP to copy');
      return;
    }

    navigator.clipboard
      .writeText(JSON.stringify(sdp, null, 2))
      .then(() => {
        console.log('Parsed SDP copied to clipboard');
        alert('Parsed SDP copied');
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <>
      <div className="controls-container" style={{ marginBottom: '1rem' }}>
        <label>
          Theme:&nbsp;
          <select value={theme} onChange={(e) => setTheme(e.target.value)}>
            <option value="vs-dark">Dark</option>
            <option value="light">Light</option>
          </select>
        </label>
        &nbsp;&nbsp;
        <label>
          Font Size:&nbsp;
          <input
            type="number"
            min={10}
            max={32}
            value={fontSize}
            onChange={(e) => setFontSize(Number(e.target.value))}
            style={{ width: '3rem' }}
          />
        </label>
        &nbsp;&nbsp;
        <label>
          Minimap:&nbsp;
          <input type="checkbox" checked={showMinimap} onChange={(e) => setShowMinimap(e.target.checked)} />
        </label>
        &nbsp;&nbsp;
        <label>
          Read Only:&nbsp;
          <input type="checkbox" checked={readOnly} onChange={(e) => setReadOnly(e.target.checked)} />
        </label>
      </div>

      <Editor
        height="50rem"
        width="70%"
        defaultLanguage="json"
        defaultValue={JSON.stringify(sdp, null, 2)}
        theme={theme}
        options={{
          readOnly: readOnly,
          minimap: { enabled: showMinimap },
          scrollBeyondLastLine: false,
          lineNumbers: 'on',
          fontSize: fontSize
        }}
        onChange={handleParseSDPChange}
      />

      <button className="btn copy-parsed-btn" onClick={copyParsedSDP}>
        Copy Parsed SDP
      </button>
    </>
  );
}
