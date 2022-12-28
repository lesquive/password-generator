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

//options for creating password
const letters = "abcdefghijklmnopqrstuvwxyz";
const nums = "0123456789";
const symbols = "!@#$%^&*()";

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

  //generate string with possible variables to form password
  function generateVariables() {
    let variables = "";
    if (passAtributes.lowerCase) {
      variables = variables.concat(letters);
    }
    if (passAtributes.upperCase) {
      variables = variables.concat(letters.toUpperCase());
    }
    if (passAtributes.numbers) {
      variables = variables.concat(nums);
    }
    if (passAtributes.symbols) {
      variables = variables.concat(symbols);
    }
    return variables;
  }

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

  function generatePassword() {
    console.log(passAtributes);
    let charList: string[] = [];
    let possibilities = generateVariables();
    //generate a new random character for length chosen.
    while (charList.length < passAtributes.length) {
      let value = possibilities.charAt(
        Math.floor(Math.random() * possibilities.length)
      );
      charList.push(value);
      //if repeat characters is set to false, same values can't be repeated. EE, @@, ee.
      if (!passAtributes.repeatChars) {
        charList = charList.filter((x, i, a) => a.indexOf(x) === i);
      }
    }
    let result: IPassword = { password: charList.join("") };
    setPasswords((prevPasswords) => [...prevPasswords, result]);
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
    generatePassword,
  };

  return (
    <PasswordContext.Provider value={values}>
      {children}
    </PasswordContext.Provider>
  );
};

export default PasswordProvider;
