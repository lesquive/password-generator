// context/todoContext.tsx
import { FC, useState, createContext } from "react";
import {
  PasswordContextType,
  IPasswordAttributes,
  IPassword,
  PasswordProviderProps,
  LetterCase,
} from "../types/types";

export const PasswordContext = createContext<PasswordContextType | null>(null);

const uppers = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
const lowers = ["abcdefghijklmnopqrstuvwxyz"];
const nums = ["0123456789"];
const symbols = ["!@#$%^&*()"];

//https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript

const PasswordProvider: FC<PasswordProviderProps> = ({ children }) => {
  const [passwords, setPasswords] = useState<IPassword[]>([]);
  const [tmpLength, setTmpLength] = useState<number>(8);
  const [tmpRepeatChars, setTmpRepeatChars] = useState<boolean>(true);
  const [passAtributes, setPassAtributes] = useState<IPasswordAttributes>({
    length: 8,
    upperCase: true,
    lowerCase: true,
    numbers: true,
    symbols: true,
    repeatChars: false,
  });

  function enableNumbers(numbers: boolean) {
    setPassAtributes({ ...passAtributes, numbers });
  }

  function enableSymbols(symbols: boolean) {
    setPassAtributes({ ...passAtributes, symbols });
  }

  function confTmpLength(tmpLength: number) {
    setTmpLength(tmpLength);
  }

  function confTmpRepeatChars(tmpRepeatChars: boolean) {
    setTmpRepeatChars(tmpRepeatChars);
  }

  function saveSettings() {
    setPassAtributes({
      ...passAtributes,
      repeatChars: tmpRepeatChars,
      length: tmpLength,
    });
  }

  function cancelSettings() {
    setTmpLength(passAtributes.length);
    setTmpRepeatChars(passAtributes.repeatChars);
  }

  function setCase(letters: LetterCase) {
    switch (letters) {
      case "lowercase": {
        setPassAtributes({
          ...passAtributes,
          lowerCase: true,
          upperCase: false,
        });
        break;
      }
      case "uppercase": {
        setPassAtributes({
          ...passAtributes,
          lowerCase: false,
          upperCase: true,
        });
        break;
      }
      case "both": {
        setPassAtributes({
          ...passAtributes,
          lowerCase: true,
          upperCase: true,
        });
        break;
      }
    }
  }

  const values = {
    passAtributes,
    passwords,
    tmpLength,
    tmpRepeatChars,
    enableNumbers,
    enableSymbols,
    setCase,
    confTmpLength,
    confTmpRepeatChars,
    saveSettings,
    cancelSettings,
  };

  return (
    <PasswordContext.Provider value={values}>
      {children}
    </PasswordContext.Provider>
  );
};

export default PasswordProvider;
