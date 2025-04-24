export const Ring = ({ styles = [] }) => {
  return (
    <>
      {styles.map((style, index) => (
        <div
          key={index}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/50"
          style={{
            width: style.width,
            height: style.height,
            backgroundColor: style.backgroundColor,
            zIndex: 10,
          }}
        />
      ))}
    </>
  );
};
