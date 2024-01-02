/**
 * props.children is simply all content between the tags.
 *
 * `<TabButton>Components</TabButton>`
 *
 * `props.children` is `Components`
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */

export default function TabButton({ children, onSelect, isActive }) {
  return (
    <li>
      <button className={isActive ? "active" : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
