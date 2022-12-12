export type Props = {
  menuToggle: string;
  setMenuToggle: React.Dispatch<React.SetStateAction<string>>;
  theme?: string;
};

export const HamburgerIcon: React.FC<Props> = ({ menuToggle, setMenuToggle, theme }) => {
  return (
    <div
      className={`page-header-button-small ${menuToggle === 'open' && 'open'}`}
      onClick={() => {
        if (menuToggle === 'closed') {
          setMenuToggle('open');
        } else setMenuToggle('closed');
      }}
    >
      <span className={`${theme === 'lightTheme' ? 'darkTheme' : 'lightTheme'}`}></span>
      <span className={`${theme === 'lightTheme' ? 'darkTheme' : 'lightTheme'}`}></span>
      <span className={`${theme === 'lightTheme' ? 'darkTheme' : 'lightTheme'}`}></span>
    </div>
  );
};
