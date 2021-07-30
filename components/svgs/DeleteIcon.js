function DeleteIcon(props) {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={props.classes}
        d="M3.80874 20.1498L3.05125 5H20.9487L20.1913 20.1498C20.1114 21.7464 18.7936 23 17.195 23H6.805C5.20637 23 3.88857 21.7464 3.80874 20.1498Z"
        stroke={props.stroke}
        strokeWidth={props.strokeWidth}
      />
      <path
        className={props.classes}
        d="M8 5H16V3C16 1.89543 15.1046 1 14 1H10C8.89543 1 8 1.89543 8 3V5Z"
        stroke={props.stroke}
        strokeWidth={props.strokeWidth}
      />
      <path
        className={props.classes}
        d="M1 5H23"
        stroke={props.stroke}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
      />
      <path
        className={props.classes}
        d="M15 11V16"
        stroke={props.stroke}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
      />
      <path
        className={props.classes}
        d="M9 11V16"
        stroke={props.stroke}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

DeleteIcon.defaultProps = {
  stroke: "#000",
  strokeWidth: "2",
  height: "20",
  width: "20",
};

export default DeleteIcon;
