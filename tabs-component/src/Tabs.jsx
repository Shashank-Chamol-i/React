import { useState } from "react";
import "./Tabs.css";

const tabsData = [
  {
    id: "home",
    label: "Home",
    icon: "🏠",
    content:
      "Welcome to the home tab, where you can quickly access the main dashboard and see a summary of your setup. This area is designed to feel familiar and easy to navigate.",
  },
  {
    id: "about",
    label: "About",
    icon: "🧑‍💻",
    content:
      "Learn more about this project, the tools used, and the design choices behind it. The about tab gives you a concise overview with a friendly introduction.",
  },
  {
    id: "contact",
    label: "Contact",
    icon: "✉️",
    content:
      "Get in touch using the contact information provided here, whether you have a question or want to collaborate. This tab is your direct route to sending a message.",
  },
];

function Tabs() {
  const [activeTab, setActiveTab] = useState(tabsData[0].id);
  const activeContent =
    tabsData.find((tab) => tab.id === activeTab) || tabsData[0];

  return (
    <div className="page">
      <div className="card">
        <div className="tab-header">
          {tabsData.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`tab-btn ${tab.id === activeTab ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="tab-icon">{tab.icon}</span>
              <span className="tab-label">{tab.label}</span>
            </button>
          ))}
        </div>
        <div className="tab-content" key={activeTab}>
          <h3 className="content-title">{activeContent.label}</h3>
          <p className="content-text">{activeContent.content}</p>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
