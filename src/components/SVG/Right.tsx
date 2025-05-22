interface IProps {}

const RightArrowIcon: React.FC<IProps> = () => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      role="img"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 4l8 8-8 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default RightArrowIcon;
