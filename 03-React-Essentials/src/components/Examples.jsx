import TabButton from "./TabButton.jsx";
import { useState } from "react";
import { EXAMPLES } from "../data.js";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

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

  const buttons = ["components", "jsx", "props", "state"];

  return (
    <Section id="examples" title="Examples">
      <Tabs
        buttons={buttons.map((btn, index) => (
          <TabButton
            isActive={selectedTopic === btn}
            onClick={() => handleSelect(btn)}
            key={index}
          >
            {btn.toUpperCase()}
          </TabButton>
        ))}
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
