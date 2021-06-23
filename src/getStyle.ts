export const getGetStyleFunc = (style: any) => {
  const getStyle = (t: string) => {
    const styles: string[] = t.split(' ');
    const stylelist: string[] = [];
    styles.forEach((st: string) => {
      stylelist.push(style[st] || `WARN_STYLE_${st}_NOTDEFINEDINSTYLESLIST`);
    });
    return `s-${styles.join(' s-')} ${stylelist.join(' ')}`;
  };
  return getStyle;
};
export default getGetStyleFunc;
