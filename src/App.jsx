import { useState } from "react";
import { Header } from "./components/Header";
import { Examples, coreConcepts } from "./components/data";
import TabButton from "./components/TabButton";
import CoreConcept from "./components/CoreConcept";
import "./App.css";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selected) {
    setSelectedTopic(selected);
  }

  return (
    <>
      <div className="mx-auto p-6 min-h-screen">
        <Header />
        <main className="mt-6">
          <section className="text-center">
            <h2 className="text-3xl font-semibold">Core Concepts</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
              {coreConcepts.map((conceptItem) => (
                <CoreConcept key={conceptItem.title} {...conceptItem} />
              ))}
            </ul>
          </section>

          <section className="mt-16 text-center">
            <h2 className="text-3xl font-semibold">Example</h2>
            <menu className="mt-6">
              <div className="flex flex-wrap justify-center gap-4 pb-10">
                <TabButton
                  isSelect={selectedTopic === "Components"}
                  onSelect={() => handleSelect("Components")}
                >
                  Components
                </TabButton>
                <TabButton
                  isSelect={selectedTopic === "Jsx"}
                  onSelect={() => handleSelect("Jsx")}
                >
                  Jsx
                </TabButton>
                <TabButton
                  isSelect={selectedTopic === "State"}
                  onSelect={() => handleSelect("State")}
                >
                  State
                </TabButton>
                <TabButton
                  isSelect={selectedTopic === "Props"}
                  onSelect={() => handleSelect("Props")}
                >
                  Props
                </TabButton>
              </div>
              {!selectedTopic && <p>Please select a topic</p>}
              {selectedTopic && (
                <div className="mt-8 p-6 bg-white shadow-lg rounded-lg w-full  mx-auto">
                  <h3 className="text-2xl font-semibold text-gray-700">
                    {Examples[selectedTopic]?.title}
                  </h3>
                  <p className="text-gray-600 mt-2">
                    {Examples[selectedTopic]?.description}
                  </p>
                  <pre className="bg-gray-900 text-white p-4 rounded-md mt-4 text-left overflow-x-auto">
                    <code className="text-sm">
                      {Examples[selectedTopic]?.code}
                    </code>
                  </pre>
                </div>
              )}
            </menu>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
