import { coreConcepts } from "./data";
import CoreConcept from "./CoreConcept";

export default function CoreFeature() {
  return (
    <section className="text-center">
      <h2 className="text-3xl font-semibold">Core Concepts</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
        {coreConcepts.map((conceptItem) => (
          <CoreConcept key={conceptItem.title} {...conceptItem} />
        ))}
      </ul>
    </section>
  );
}
