"use client";

import { useState } from "react";
import { ConversationChat } from "./conversation";

const MapSurah = () => {
  const [weeks, setWeeks] = useState({
    toonuud: [1, 2, 3, 4, 5, 6, 7, "goy", 213],
    usegnuud: ["a", "b", "c", "d"],
  });

  const conversation = [
    { userName: "Elbeg", msg: "ddd" },
    { userName: "Bat", msg: "goy" },
    { userName: "dulmaa", msg: "goy" },
  ];

  const handleAdd = () => {
    setWeeks((prev) => ({
      ...prev,
      usegnuud: [...prev.usegnuud, "p"],
    }));
  };

  const handleRemove = () => {
    setWeeks((prev) => ({
      ...prev,
      usegnuud: prev.usegnuud.filter((item) => item !== "p"),
    }));
  };

  const handleUpdate = () => {
    setWeeks((prev) => ({
      ...prev,
      toonuud: prev.toonuud.map((el) => (el === "goy" ? "updated" : el)),
    }));
  };

  return (
    <div className="font-bold text-3xl">
      <ConversationChat
        conversation={conversation}
        toonuud={weeks.toonuud}
        usegnuud={weeks.usegnuud}
        handleAdd={handleAdd}
        handleRemove={handleRemove}
        handleUpdate={handleUpdate}
      />
    </div>
  );
};

export default MapSurah;