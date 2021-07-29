function CloseSvg(props) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.5 5.5L17.2097 17.2097"
        stroke={props.stroke}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.5 17.21L17.2097 5.50026"
        stroke={props.stroke}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

CloseSvg.defaultProps = {
   stroke: '#14142B',
   strokeWidth: '2',
};

export default CloseSvg;
