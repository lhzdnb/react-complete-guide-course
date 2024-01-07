/**
 * props.children is simply all content between the tags.
 *
 * `<TabButton>Components</TabButton>`
 *
 * `props.children` is `Components`
 * @param children
 * @param isActive
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */

export default function TabButton({ children, isActive, ...props }) {
  return (
    <li>
      <button className={isActive ? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}
