/**
 * props.children is simply the content between the tags.
 *
 * `<TabButton>Components</TabButton>`
 *
 * `props.children` is `Components`
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */

export default function TabButton(props) {
  return (
    <li>
      <button>{props.children}</button>
    </li>
  );
}
