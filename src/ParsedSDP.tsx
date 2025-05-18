export default function ParsedSDP({ parsed }: { parsed: any }) {
  return (
    <div className="space-y-6 p-4">
      <h1 className="text-2xl font-bold">SDP Details</h1>

      {/* <div className="space-y-4">
        <h2 className="text-xl font-bold">Session Information</h2>
        <p>
          <strong>Version:</strong> {parsedSDP.version}
        </p>
        <p>
          <strong>Origin:</strong> {JSON.stringify(parsedSDP.origin)}
        </p>
        <p>
          <strong>Session Name:</strong> {parsedSDP.name}
        </p>

        {parsedSDP.media.map((media: any, idx: any) => (
          <div key={idx}>
            <h3 className="text-lg font-semibold">Media: {media.type}</h3>
            <p>
              <strong>Port:</strong> {media.port}
            </p>
            <p>
              <strong>Protocol:</strong> {media.protocol}
            </p>
            <p>
              <strong>Payloads:</strong> {media.payloads}
            </p>
            {media.rtp?.map((rtp: any) => (
              <p key={rtp.payload}>
                <strong>Codec:</strong> {rtp.codec} ({rtp.payload})
              </p>
            ))}
          </div>
        ))}
      </div> */}

      {/* Session Info */}
      <section className="bg-gray-100 p-4 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-2">Session Information</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Version:</strong> {parsed.version}
          </li>
          <li>
            <strong>Origin:</strong> {JSON.stringify(parsed.origin)}
          </li>
          <li>
            <strong>Session Name:</strong> {parsed.name}
          </li>
          <li>
            <strong>Timing:</strong> {JSON.stringify(parsed.timing)}
          </li>
          <li>
            <strong>Groups:</strong> {JSON.stringify(parsed.groups)}
          </li>
          <li>
            <strong>ICE Options:</strong> {parsed.icelite}
          </li>
          <li>
            <strong>Fingerprint:</strong> {JSON.stringify(parsed.fingerprint)}
          </li>
          <li>
            <strong>MSID Semantic:</strong> {JSON.stringify(parsed.msidSemantic)}
          </li>
        </ul>
      </section>

      {/* Media Sections */}
      {parsed.media.map((media: any, idx: any) => (
        <section key={idx} className="bg-white p-4 border rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">Media: {media.type}</h2>
          <ul className="list-disc list-inside">
            <li>
              <strong>Port:</strong> {media.port}
            </li>
            <li>
              <strong>Protocol:</strong> {media.protocol}
            </li>
            <li>
              <strong>Payloads:</strong> {media.payloads}
            </li>
            <li>
              <strong>Connection:</strong> {JSON.stringify(media.connection)}
            </li>
            <li>
              <strong>ICE Ufrag:</strong> {media.iceUfrag}
            </li>
            <li>
              <strong>ICE Pwd:</strong> {media.icePwd}
            </li>
            <li>
              <strong>ICE Candidates:</strong>{' '}
              <pre className="whitespace-pre-wrap">{JSON.stringify(media.candidates, null, 2)}</pre>
            </li>
            <li>
              <strong>Fingerprint:</strong> {JSON.stringify(media.fingerprint)}
            </li>
            <li>
              <strong>Setup:</strong> {media.setup}
            </li>
            <li>
              <strong>Direction:</strong> {media.direction}
            </li>
            <li>
              <strong>Mid:</strong> {media.mid}
            </li>
            <li>
              <strong>RTCP:</strong> {JSON.stringify(media.rtcp)}
            </li>
            <li>
              <strong>RTCP Mux:</strong> {media.rtcpMux ? 'Yes' : 'No'}
            </li>
            <li>
              <strong>RTCP Rsize:</strong> {media.rtcpRsize ? 'Yes' : 'No'}
            </li>
            <li>
              <strong>Ext:</strong> <pre className="whitespace-pre-wrap">{JSON.stringify(media.ext, null, 2)}</pre>
            </li>
            <li>
              <strong>RTP:</strong> <pre className="whitespace-pre-wrap">{JSON.stringify(media.rtp, null, 2)}</pre>
            </li>
            <li>
              <strong>RTCP Feedback:</strong>{' '}
              <pre className="whitespace-pre-wrap">{JSON.stringify(media.rtcpFb, null, 2)}</pre>
            </li>
            <li>
              <strong>FMT Params:</strong>{' '}
              <pre className="whitespace-pre-wrap">{JSON.stringify(media.fmtp, null, 2)}</pre>
            </li>
            <li>
              <strong>SSRCs:</strong> <pre className="whitespace-pre-wrap">{JSON.stringify(media.ssrcs, null, 2)}</pre>
            </li>
            <li>
              <strong>SSRC Groups:</strong>{' '}
              <pre className="whitespace-pre-wrap">{JSON.stringify(media.ssrcGroups, null, 2)}</pre>
            </li>
            <li>
              <strong>MSID:</strong> {media.msid}
            </li>
            <li>
              <strong>Attributes:</strong>{' '}
              <pre className="whitespace-pre-wrap">{JSON.stringify(media.invalid, null, 2)}</pre>
            </li>
          </ul>
        </section>
      ))}
    </div>
  );
}
