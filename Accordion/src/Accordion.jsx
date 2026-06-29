import React, { useState } from "react";
import "./Accordion.css";

const faqs = [
  {
    id: 1,
    question: "What is React and why use it?",
    answer:
      "React is a JavaScript library for building composable UI components. It makes it easy to build interactive UIs with declarative code and efficient updates via the virtual DOM.",
  },
  {
    id: 2,
    question: "What are components in React?",
    answer:
      "Components are reusable pieces of UI. They can be function components or class components and can accept props to make them configurable.",
  },
  {
    id: 3,
    question: "When should I use state vs props?",
    answer:
      "Use props to pass data from parent to child components. Use state to hold data that changes over time within a component.",
  },
  {
    id: 4,
    question: "What is a hook in React?",
    answer:
      "Hooks are functions like `useState` and `useEffect` that let you use React features in function components without classes.",
  },
  {
    id: 5,
    question: "How do I lift state up?",
    answer:
      "Lifting state up means moving shared state to the nearest common parent so multiple children can access and update it via props and callbacks.",
  },
];

export default function Accordion() {
  const [openId, setOpenId] = useState(null);

  function handleClick(id) {
    setOpenId((prev) => (prev === id ? null : id));
  }

  return (
    <div className="page">
      <div className="card">
        <h2 className="title">FAQ</h2>
        <p className="subtitle">Click a question to see the answer</p>

        <div className="accordion">
          {faqs.map((item) => (
            <div
              key={item.id}
              className={`accordion-item${item.id === openId ? " open" : ""}`}
            >
              <button
                className="accordion-header"
                onClick={() => handleClick(item.id)}
                aria-expanded={item.id === openId}
              >
                <span className="question-text">{item.question}</span>
                <span className="accordion-icon">
                  {item.id === openId ? "×" : "+"}
                </span>
              </button>

              <div className="accordion-body">
                <p className="answer-text">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
