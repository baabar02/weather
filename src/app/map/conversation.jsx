"use client";
export const ConversationChat = ({
  conversation,
  toonuud,
  usegnuud,
  weeks,
  hehe,
  handle,
  setWeeks,
  handleDec,
}) => {
  return (
    <div>
      {/* {weeks.map((el, index) => {
        return <div key={index}>{el.toonuud} </div>;
      })} */}
      {toonuud.map((el, index) => {
        // toonuud = [1,2,3,4] = 3
        if (el === 8) {
          return <div key={index}>{el} </div>;
        } else {
          return <div key={index}>sorry</div>;
        }
      })}
      {usegnuud.map((el, index) => {
        if (el === "a") {
          return (
            <button onClick={handle} key={index}>
              {el}
            </button>
          );
        } else {
          return <div key={index}>{el}</div>;
        }
      })}
      {/* (
      <button onClick={handleDec} key={index}>
        {el}
      </button>
      ); */}
    </div>
  );
};

// <div>
//   {conversation.map(({ userName, msg }, { index }) => {
//     return (
//       <div key={index}>
//         hhh {userName} {msg}
//       </div>
//     );
//   })}
// </div>
