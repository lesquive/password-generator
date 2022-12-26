// context/todoContext.tsx
import { FC, useState, createContext } from "react";
import {
  PasswordContextType,
  IPasswordAttributes,
  IPassword,
  PasswordProviderProps,
} from "../types/types";

export const PasswordContext = createContext<PasswordContextType | null>(null);

const uppers = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
const lowers = ["abcdefghijklmnopqrstuvwxyz"];
const nums = ["0123456789"];
const specialChars = ["!@#$%^&*()"];

//https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript

const PasswordProvider: FC<PasswordProviderProps> = ({ children }) => {
  const [passwords, setPasswords] = useState<IPassword[]>([]);
  const [passAtributes, setPassAtributes] = useState<IPasswordAttributes>({
    length: 8,
    upperCase: true,
    lowerCase: true,
    numbers: true,
    symbols: true,
    repeatChars: false,
  });

  const values = {
    passAtributes,
    passwords,
  };

  return (
    <PasswordContext.Provider value={values}>
      {children}
    </PasswordContext.Provider>
  );
};

export default PasswordProvider;
