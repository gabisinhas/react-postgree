import { createContext } from "react";

export const EmployeeContext = createContext({
  employeeData: null,
  setEmployeeData: () => {}
});

