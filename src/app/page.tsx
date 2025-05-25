
import React from "react";
import { PROGRESS_ITEMS } from "./consts";



export default function Home() {

  return (
    <div style={{ maxWidth: 600, margin: "2rem auto", fontFamily: "sans-serif", padding: "0 2rem" }}>
      <h1 style={{ margin: "2rem 0" }}>Joel Myers&apos;s AI/ML Learning Progress Tracker</h1>
      {PROGRESS_ITEMS.map(({title, percentCompleted}) => (
        <div key={title} style={{ marginBottom: "2rem" }}>
          <div style={{ marginBottom: 8, fontWeight: "bold" }}>{title}</div>
          <div style={{
            background: "#e0e0e0",
            borderRadius: 8,
            height: 24,
            width: "100%",
            overflow: "hidden"
          }}>
            <div style={{
              background: "#0070f3",
              height: "100%",
              width: `${percentCompleted}%`,
              transition: "width 0.3s"
            }} />
          </div>
          <div style={{ marginTop: 4, textAlign: "right" }}>{percentCompleted}%</div>
        </div>
      ))}
    </div>
  );
}
