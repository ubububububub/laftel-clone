export function Star({ color, isTheme }: { color: string; isTheme?: boolean }) {
  return (
    <svg
      width={isTheme ? "18" : "12"}
      height={isTheme ? "18" : "12"}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='sc-coCPJf esSrQl'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M8.092 20.746c-1.273.699-2.346-.114-2.103-1.596l.731-4.45a.37.37 0 00-.05-.16l-3.095-3.151c-1.03-1.049-.622-2.365.803-2.581l4.278-.65a.34.34 0 00.131-.099L10.7 4.011c.637-1.348 1.962-1.348 2.6 0l1.913 4.048a.346.346 0 00.13.1l4.28.649c1.423.216 1.833 1.531.803 2.58L17.33 14.54a.37.37 0 00-.05.16l.73 4.45c.244 1.481-.828 2.295-2.103 1.596l-3.826-2.101a.329.329 0 00-.162 0l-3.827 2.1z'
        fill={color}
      />
    </svg>
  );
}
