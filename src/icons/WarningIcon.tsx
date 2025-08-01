const WarningIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    stroke="#FFCD29"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    className="feather feather-alert-circle"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M12 8v4M12 16h.01"></path>
  </svg>
);

export default WarningIcon;
