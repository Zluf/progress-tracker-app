"use client";
import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { entries } from "../store";
import "./AddActivity.css";

export default function AddActivity() {
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  const addActivityHandler = (event: React.FormEvent): void => {
    event.preventDefault();
    dispatch(entries.actions.addActivity(inputRef.current?.value));
  };

  return (
    <form onSubmit={addActivityHandler} className="add-activity-form wrapper">
      <input ref={inputRef}></input>
      <button className="add-activity-btn" type="submit">
        + Add a new activity
      </button>
    </form>
  );
}
