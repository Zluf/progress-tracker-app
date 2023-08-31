import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import "./ActivityDashboard.css";

export default function ActivityDashboard() {
  const entries = useSelector((state: any) => state.entries.entries);
  console.log(entries);

  return (
    <section className="activity-dashboard wrapper">
      <h2>Activity Dashboard</h2>
      <ul>
        {entries.map((entry: string, i: number) => (
          <li key={`e${i}`}>{entry}</li>
        ))}
      </ul>
    </section>
  );
}
