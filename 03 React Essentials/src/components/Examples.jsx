import TabButton from "./TabButton.jsx";
import { useState } from "react";
import { EXAMPLES } from "../data.js";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedBtn) {
    // selectedBtn => Components, JSX, Props, State
    setSelectedTopic(selectedBtn);
  }

  let tabContent = selectedTopic ? (
    <div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>{EXAMPLES[selectedTopic].code}</code>
      </pre>
    </div>
  ) : (
    <p>Please select a topic.</p>
  );

  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton
          isActive={selectedTopic === "components"}
          onSelect={() => handleSelect("components")}
        >
          Components
        </TabButton>
        <TabButton
          isActive={selectedTopic === "jsx"}
          onSelect={() => handleSelect("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isActive={selectedTopic === "props"}
          onSelect={() => handleSelect("props")}
        >
          Props
        </TabButton>
        <TabButton
          isActive={selectedTopic === "state"}
          onSelect={() => handleSelect("state")}
        >
          State
        </TabButton>
      </menu>
      {tabContent}
    </section>
  );
}
