import React, { useMemo, useState } from "react";
import "./FAQComponent.css";

const faqData = [
  {
    id: 1,
    category: "General",
    question: "What is React?",
    answer:
      "React is a JavaScript library for building user interfaces using components and a virtual DOM.",
  },
  {
    id: 2,
    category: "Technical",
    question: "What is JSX?",
    answer:
      "JSX is a syntax extension that looks like HTML and is used to describe UI in React components.",
  },
  {
    id: 3,
    category: "General",
    question: "How do I create a component?",
    answer:
      "Create a function that returns JSX and export it. Components can accept props to be reusable.",
  },
  {
    id: 4,
    category: "Technical",
    question: "What are props in React?",
    answer:
      "Props are inputs to components passed as attributes. They are read-only and allow data flow from parent to child.",
  },
  {
    id: 5,
    category: "Technical",
    question: "When should I use useEffect?",
    answer:
      "Use `useEffect` to run side effects such as fetching data, subscribing to events, or manually updating the DOM.",
  },
  {
    id: 6,
    category: "General",
    question: "How do I manage state?",
    answer:
      "Use `useState` for local component state, lift state up for shared state, or use a state manager for global state.",
  },
];

function FAQItem({ question, answer, category }) {
  return (
    <div className="faq-item">
      <span className="category-badge">{category}</span>
      <h3 className="faq-question">{question}</h3>
      <p className="faq-answer">{answer}</p>
    </div>
  );
}

function FAQList({ faqs }) {
  return (
    <div className="faq-list">
      {faqs.map((f) => (
        <FAQItem
          key={f.id}
          question={f.question}
          answer={f.answer}
          category={f.category}
        />
      ))}
    </div>
  );
}

export default function FAQComponent() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(() => {
    const cats = Array.from(new Set(faqData.map((f) => f.category)));
    return ["All", ...cats];
  }, []);

  const filteredFaqs = useMemo(() => {
    const q = search.trim().toLowerCase();
    return faqData.filter((f) => {
      const matchesText =
        q === "" ||
        f.question.toLowerCase().includes(q) ||
        f.answer.toLowerCase().includes(q);

      const matchesCategory =
        activeCategory === "All" || f.category === activeCategory;

      return matchesText && matchesCategory;
    });
  }, [search, activeCategory]);

  return (
    <div className="page">
      <div className="card">
        <h2 className="title">FAQ</h2>
        <p className="subtitle">Find answers to common questions</p>

        <input
          className="search-input"
          placeholder="Search questions..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="category-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`tab-btn${cat === activeCategory ? " active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <p className="results-count">Showing {filteredFaqs.length} results</p>

        <FAQList faqs={filteredFaqs} />

        {filteredFaqs.length === 0 && (
          <div className="empty-state">
            <div style={{ fontSize: 36 }}>🔍</div>
            <div>No results found</div>
          </div>
        )}
      </div>
    </div>
  );
}
