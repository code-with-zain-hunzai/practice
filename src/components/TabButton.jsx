export default function TabButton({ children, isSelect, ...props}) {
  return (
    <li>
      <button
        className={`px-4 py-2 rounded-md transition-all ${
          isSelect ? "bg-blue-500 text-white" : undefined
        }`}
        {...props}
      >
        {children}
      </button>
    </li>
  );
}
