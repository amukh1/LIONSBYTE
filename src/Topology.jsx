// src/components/VantaTopologyCDN.jsx
import React, { useEffect, useRef } from "react";

export default function Topology({
  disabledOnMobile = true,
  options = {},        // optional extra options object you can pass in
}) {
  const elRef = useRef(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    // client-only guard (SSR-safe)
    if (typeof window === "undefined") return;

    // mobile detection to save perf if desired
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    if (isMobile && disabledOnMobile) return;

    // make sure VANTA and the effect exist
    if (!window.VANTA || !window.VANTA.TOPOLOGY) {
      console.error("VANTA.TOPOLOGY not found — did you include the CDN scripts?");
      return;
    }

    // init once
    if (!vantaRef.current && elRef.current) {
      vantaRef.current = window.VANTA.TOPOLOGY({
        el: elRef.current,
        // common options — tweak these
        backgroundColor: 0x030012, // hex number (not string)
        color: 0x9b5cff,           // main topology color
        scale: 1.0,                // global scale
        scaleMobile: 1.0,
        // pass any extra options the user provided
        ...options,
      });
    }

    // cleanup
    return () => {
      if (vantaRef.current) {
        try { vantaRef.current.destroy(); } catch (e) { /* ignore */ }
        vantaRef.current = null;
      }
    };
  }, [disabledOnMobile, options]);

  // container should cover where you want the effect (absolute full-bleed in example)
  return <div ref={elRef} style={{ position: "absolute", inset: 0, zIndex: 0 }} />;
}
