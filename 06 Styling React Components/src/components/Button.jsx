export default function Button({ children, ...props }) {
  return (
    <button
      className="px-4 py-2 font-semibold uppercase rounded text-stone-900 bg-stone-400 hover:bg-amber-500 active:bg-amber-800"
      {...props}
    >
      {children}
    </button>
  );
}
