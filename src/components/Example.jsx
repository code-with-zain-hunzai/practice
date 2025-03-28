import { useState } from "react";
import TabButton from "./TabButton";
import Tab from "./Tab";
import { Examples } from "./data.js";

export default function Example() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  function handleSelect(selected) {
    setSelectedTopic(selected);
  }

  let tabContent = <p className="text-gray-500 mt-4">Please select a topic</p>;
  if (selectedTopic) {
    tabContent = (
      <div className="mt-8 p-6 bg-white shadow-lg rounded-lg w-full mx-auto">
        <h3 className="text-2xl font-semibold text-gray-700">
          {Examples[selectedTopic]?.title}
        </h3>
        <p className="text-gray-600 mt-2">
          {Examples[selectedTopic]?.description}
        </p>
        <pre className="bg-gray-900 text-white p-4 rounded-md mt-4 text-left overflow-x-auto">
          <code className="text-sm">{Examples[selectedTopic]?.code}</code>
        </pre>
      </div>
    );
  }

  return (
    <section className="mt-16 text-center">
      <h2 className="text-3xl font-semibold">Example</h2>

      <Tab
        buttons={
          <>
            <TabButton
              isSelect={selectedTopic === "Components"}
              onClick={() => handleSelect("Components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelect={selectedTopic === "Jsx"}
              onClick={() => handleSelect("Jsx")}
            >
              Jsx
            </TabButton>
            <TabButton
              isSelect={selectedTopic === "State"}
              onClick={() => handleSelect("State")}
            >
              State
            </TabButton>
            <TabButton
              isSelect={selectedTopic === "Props"}
              onClick={() => handleSelect("Props")}
            >
              Props
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tab>
    </section>
  );
}
