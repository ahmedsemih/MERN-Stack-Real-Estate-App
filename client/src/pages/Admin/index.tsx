import { useState } from "react";

import { EstateTable, UserTable } from "./components";

const AdminPage = () => {
  const [currentTable, setCurrentTable] = useState<"user" | "estate">("user");

  return (
    <div className="min-h-[50vh] flex flex-col gap-4">
      <div className="flex sm:flex-row flex-col gap-4">
        <button
          className="w-full bg-bgColor-soft rounded-lg border-borderColor border hover:bg-borderColor p-2 transition-all duration-200 text-xl font-semibold"
          onClick={() => setCurrentTable("user")}
        >
          User Table
        </button>
        <button
          className="w-full bg-bgColor-soft rounded-lg border-borderColor border hover:bg-borderColor p-2 transition-all duration-200 text-xl font-semibold"
          onClick={() => setCurrentTable("estate")}
        >
          Estate Table
        </button>
      </div>
      {currentTable === "user" ? <UserTable /> : <EstateTable />}
    </div>
  );
};

export default AdminPage;
