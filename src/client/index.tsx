import "./styles.css";

import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import createGlobe from "cobe";
import usePartySocket from "partysocket/react";

// The type of messages we'll be receiving from the server
import type { OutgoingMessage } from "../shared";
import type { LegacyRef } from "react";

function App() {
  // All hooks must be called unconditionally at the top level
  const [route, setRoute] = useState(window.location.pathname);
  const [counter, setCounter] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>();
  const positions = useRef<
    Map<
      string,
      {
        location: [number, number];
        size: number;
      }
    >
  >(new Map());

  // Navigation effect
  useEffect(() => {
    const onPopState = () => setRoute(window.location.pathname);
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  // Connect to the PartyServer server
  const socket = usePartySocket({
    room: "default",
    party: "globe",
    onMessage(evt) {
      const message = JSON.parse(evt.data as string) as OutgoingMessage;
      if (message.type === "add-marker") {
        // Add the marker to our map
        positions.current.set(message.position.id, {
          location: [message.position.lat, message.position.lng],
          size: message.position.id === socket.id ? 0.1 : 0.05,
        });
        // Update the counter
        setCounter((c) => c + 1);
      } else {
        // Remove the marker from our map
        positions.current.delete(message.id);
        // Update the counter
        setCounter((c) => c - 1);
      }
    },
  });

  // Globe effect
  useEffect(() => {
    // Only create globe if we're on the home route
    if (route !== "/") return;

    // The angle of rotation of the globe
    // We'll update this on every frame to make the globe spin
    let phi = 0;

    const globe = createGlobe(canvasRef.current as HTMLCanvasElement, {
      devicePixelRatio: 2,
      width: 400 * 2,
      height: 400 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 0.8,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.8, 0.1, 0.1],
      glowColor: [0.2, 0.2, 0.2],
      markers: [],
      opacity: 0.7,
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.

        // Get the current positions from our map
        state.markers = [...positions.current.values()];

        // Rotate the globe
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, [route]);

  const navigate = (path: string) => {
    window.history.pushState({}, "", path);
    setRoute(path);
  };

  // Conditional rendering after all hooks are declared
  if (route === "/privacy-policy") {
    const PrivacyPolicy = React.lazy(() => import("./PrivacyPolicy"));
    return (
      <React.Suspense fallback={<div style={{color:'#ccc'}}>Loading…</div>}>
        <PrivacyPolicy />
        <p style={{marginTop:32}}>
          <a href="#" onClick={e => { e.preventDefault(); navigate("/"); }} style={{color:'#ccc'}}>← Back to Home</a>
        </p>
      </React.Suspense>
    );
  }

  // Home page render
  return (
    <div className="App">
      <h1>Lunea Astrology</h1>
      {counter !== 0 ? (
        <p>
          <b>{counter}</b> {counter === 1 ? "person" : "people"} orbiting on purpose.
        </p>
      ) : (
        <p>&nbsp;</p>
      )}

      {/* The canvas where we'll render the globe */}
      <canvas
        ref={canvasRef as LegacyRef<HTMLCanvasElement>}
        style={{ width: 400, height: 400, maxWidth: "100%", aspectRatio: 1 }}
      />

      {/* Let's give some credit */}
      <p>
        Powered by <a href="https://cobe.vercel.app/">🌏 Cobe</a>,{" "}
        <a href="https://www.npmjs.com/package/phenomenon">Phenomenon</a> and{" "}
        <a href="https://npmjs.com/package/partyserver/">🎈 PartyServer</a>
      </p>
      <p style={{marginTop:32}}>
        <a href="#" onClick={e => { e.preventDefault(); navigate("/privacy-policy"); }} style={{color:'#ccc'}}>Privacy Policy</a>
      </p>
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById("root")!).render(<App />);
