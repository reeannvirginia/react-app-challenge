export const formatDate = (d: string) => {
  if (!d) return '';
  const date = new Date(d);
  const formattedDate = [date.getMonth(), date.getDay(), date.getFullYear()];
  return formattedDate.join('/');
};
