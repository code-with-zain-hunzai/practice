export default function TabButton({ children, onSelect, isSelect }) {
  return (
    <li>
      <button
        className={`px-4 py-2 rounded-md transition-all ${
          isSelect ? "bg-blue-500 text-white" : undefined
        }`}
        onClick={onSelect}
      >
        {children}
      </button>
    </li>
  );
}
