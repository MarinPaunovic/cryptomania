export const handleString = (hover: string) => {
  if (!hover) return '';

  const newString = hover.replace(' ', '-').toLocaleLowerCase();
  return newString;
};
