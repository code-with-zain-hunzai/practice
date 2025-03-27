import { Header } from "./components/Header";
import "./App.css";
import CoreFeature from "./components/CoreFeature";
import Example from "./components/Example";

function App() {
  return (
    <>
      <div className="mx-auto p-6 min-h-screen">
        <Header />
        <main className="mt-6">
          <CoreFeature />
          <Example />
        </main>
      </div>
    </>
  );
}

export default App;
