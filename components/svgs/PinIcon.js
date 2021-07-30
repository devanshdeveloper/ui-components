function PinIcon(props) {
  return (
    <svg
      width={props.height}
      height={props.width}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={props.classes}
        d="M22 11C22 15.346 15.8077 20.9022 13.1687 23.0727C12.4838 23.636 11.5162 23.636 10.8313 23.0727C8.19234 20.9022 2 15.346 2 11C2 5.47715 6.47715 1 12 1C17.5228 1 22 5.47715 22 11Z"
        stroke={props.stroke}
        strokeWidth={props.strokeWidth}
      />
      <circle
        cx="12"
        cy="11"
        r="3"
        stroke={props.stroke}
        strokeWidth={props.strokeWidth}
      />
    </svg>
  );
}

PinIcon.defaultProps = {
  stroke: "#000",
  strokeWidth: "2",
  height: "20",
  width: "20",
};

export default PinIcon;
