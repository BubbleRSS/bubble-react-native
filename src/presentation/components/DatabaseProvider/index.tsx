import { FC, ReactNode, useEffect } from "react";
import { PrismaDatabaseClient } from "@/infra/database";

type DatabaseProviderProps = {
  children: ReactNode;
}

export const DatabaseProvider: FC<DatabaseProviderProps> = ({ children }) => {
  const prismaDatabaseClient = new PrismaDatabaseClient();

  useEffect(() => {
    async function initDatabase() {
      try {
        await prismaDatabaseClient.initializeDb();
        console.log("Database successfully initialized");
      } catch (error) {
        console.error("Error initializing the database:", error);
      }
    }

    initDatabase();
  }, []);

  return children;
}