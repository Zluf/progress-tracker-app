"use client";
import React, { useRef } from "react";
import "./AddActivity.css";

export default function AddActivity() {
  const inputRef = useRef<HTMLInputElement>(null);

  const addActivityHandler = (event: React.FormEvent): void => {
    event.preventDefault();
    console.log(inputRef.current!.value);
  };
  return (
    <form onSubmit={addActivityHandler} className="add-activity-form wrapper">
      <input ref={inputRef}></input>
      <button className="add-activity-btn" type="submit">
        + Add an activity
      </button>
    </form>
  );
}
