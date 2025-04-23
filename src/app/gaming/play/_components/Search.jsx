import { Search } from "lucide-react";

export const Input = () => {
  return (
    <div className="z-50 bg-white relative w-[500px] h-[80px] m-[40px] rounded-[8px] flex">
      <Search className="absolute top-7 left-4" />
      <input
        className="bg-gray border pl-[50px] border-gray-300 text-gray-900 text-l rounded-lg w-full h-full"
        type="text"
        placeholder="search"
      />
    </div>
  );
};
