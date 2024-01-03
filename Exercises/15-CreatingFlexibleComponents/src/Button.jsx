export default function Button({ mode = "filled", children, Icon, ...props }) {
  // Todo: Build this component!

  // !!! Important:
  // Wrap the icon with a <span className="button-icon"> to achieve the target look
  // Also wrap the children prop with a <span>
  let btn;
  const icon = Icon ? Icon() : undefined;
  btn = (
    <button
      className={`${icon ? "icon-button" : null} ${mode}-button`}
      {...props}
    >
      {icon ? <span className="button-icon">{icon}</span> : null}
      <span>{children}</span>
    </button>
  );

  return btn;
}
