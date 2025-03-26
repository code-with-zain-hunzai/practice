const reactDescription = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

import headerImage from "../../public/premium.png"
export function Header() {
  const description = reactDescription[genRandomInt(2)];

  return (
    <header className="">
      <img src={headerImage} alt="hello"  className="mx-auto"/>
      <h1>React Essentials</h1>
      <p>{description} React concepts you will need for almost any project you are going to build.</p>
    </header>
  );
}
    