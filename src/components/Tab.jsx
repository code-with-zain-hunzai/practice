export default function Tab({ children, buttons }) {
  return (
    <>
      <menu className="flex flex-wrap justify-center gap-4">{buttons}</menu>
      {children}
    </>
  );
}
