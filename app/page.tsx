"use client";

import styles from "./page.module.css";
import AddActivity from "./components/AddActivity";
import ActivityDashboard from "./components/ActivityDashboard";

export default function Home() {
  return (
    <main className={styles.main}>
      <AddActivity />
      <ActivityDashboard />
    </main>
  );
}
