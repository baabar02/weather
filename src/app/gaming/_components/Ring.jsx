export const Ring = ({ styles }) => {
  return (
    <div>
      {styles.map((style, index) => {
        return (
          <div
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 rounded-full border border-black-500`}
            key={index}
            style={style}
          ></div>
        );
      })}
    </div>
  );
};
