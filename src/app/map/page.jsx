"use client";

import { useState } from "react";
import { ConversationChat } from "./conversation";

const mapSurah = () => {
  const [weeks, setWeeks] = useState({
    toonuud: [1, 2, 3, 4, 5, 6, 7, "goy", 213],

    usegnuud: ["a", "b", "c", "d"],
  });
  console.log(weeks);

  const conversation = [
    {
      userName: "Elbeg",
      msg: "ddd",
    },
    { userName: "Bat", msg: "goy" },
    { userName: "dulmaa", msg: "goy" },
  ];

  const handle = (e) => {
    setWeeks((prev) => {
      return { ...prev, usegnuud: [...prev.usegnuud, "p"] };
    });
  };

  const handleDec = () => {
    setWeeks((prev) => {
      if (usegnuud === "p") {
        return { ...prev, usegnuud: [...prev.usegnuud, ""] };
      }
    });
  };

  //   const convos = ([hehe, setHehe] = useState([
  //     {
  //       userName: "Elbeg",
  //       msg: "ddd",
  //     },
  //     {
  //       userName: "Bat",
  //       msg: "goy",
  //     },
  //   ]));

  return (
    <div className="font-bold text-3xl">
      <ConversationChat
        conversation={conversation}
        weeks={weeks}
        usegnuud={weeks.usegnuud}
        toonuud={weeks.toonuud}
        handle={handle}
        setWeeks={setWeeks}
        handleDec={handleDec}
      />
    </div>
  );
};

export default mapSurah;
