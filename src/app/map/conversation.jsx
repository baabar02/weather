"use client";

export const ConversationChat = ({
  conversation,
  toonuud,
  usegnuud,
  handleAdd,
  handleRemove,
  handleUpdate,
}) => {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-xl font-semibold">Conversation:</h3>
        {conversation.map((item, index) => (
          <div key={`${index}`} className="p-2">
            {item.userName} : {item.msg}
          </div>
        ))}
      </div>

      <div>
        <h3 className="text-xl font-semibold">Toonuud:</h3>
        {toonuud.map((el, index) => (
          <div key={`${el}-${index}`} className="p-2">
            {el === "goy" || el === "updated" ? (
              <span className="text-green">{el}</span>
            ) : (
              el
            )}
          </div>
        ))}
        <button
          onClick={handleUpdate}
          className="mt-2 px-4 py-2 bg-yellow-500 text white rounded"
        >
          {" "}
          Update 'goy' to 'updated'
        </button>
      </div>

      <div>
        <h3 className="text-xl font-semibold">Usegnuud:</h3>
        {usegnuud.map((el, index) => (
          <div key={`${el}-${index}`} className="p-2">
            {el === "a" ? (
              <button
                onClick={handleAdd}
                className="px-2 py-1 bg-blue-500 text-white rounded"
              >
                {el} (Add 'p')
              </button>
            ) : (
              <span>{el}</span>
            )}
          </div>
        ))}
        {usegnuud.includes("p") && (
          <button
            onClick={handleRemove}
            className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
          >
            (Remove 'p')
          </button>
        )}
      </div>
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
