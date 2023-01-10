interface CustomButton {
  className: string;
  title: string;
}

export const CustomButton = (props: CustomButton) => {
  const { className, title } = props;

  return (
    <button className={className} onClick={() => undefined}>
      {title}
    </button>
  );
};
