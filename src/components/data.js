import { jsx } from "react/jsx-runtime";
import person1 from "../../public/person1.png";
import person2 from "../../public/person2.png";
import person3 from "../../public/person3.png";
import person4 from "../../public/person4.png";

export const coreConcepts = [
  {
    title: "Components",
    description: "Building blocks of React applications.",
    image: person1,
  },
  {
    title: "JSX",
    description: "Syntax extension for JavaScript that looks like HTML.",
    image: person2,
  },
  {
    title: "Props",
    description: "Allows passing data between components.",
    image: person3,
  },
  {
    title: "State",
    description: "Manages dynamic data and re-renders components.",
    image: person4,
  },
];

export const Examples = {
  Components: {
    title: "Components",
    description: "A component is a reusable piece of UI in React.",
    code: `function Welcome() {
  return <h1>Hello, World!</h1>;
}`,
  },
  Jsx: {
    title: "JSX",
    description: "JSX allows us to write HTML-like syntax in JavaScript.",
    code: `const element = <h1>Hello, JSX!</h1>;`,
  },
  Props: {
    title: "Props",
    description: "Props allow components to receive data from their parent.",
    code: `function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}`,
  },
  State: {
    title: "State",
    description: "State allows components to manage dynamic data.",
    code: `function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}`,
  },
};
