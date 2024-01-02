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

export default function TabButton({ children, onSelect }) {
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}
