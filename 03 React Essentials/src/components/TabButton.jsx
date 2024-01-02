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

export default function TabButton(props) {
  function handleClick() {
    console.log("Hello World!");
  }

  return (
    <li>
      <button onClick={handleClick}>{props.children}</button>
    </li>
  );
}
