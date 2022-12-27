// @types.todo.ts

export enum LetterCase {
  lowercase = "lowercase",
  uppercase = "uppercase",
  both = "both",
}

export interface IPassword {
  password: string;
}

export interface IPasswordAttributes {
  length: number;
  upperCase: boolean;
  lowerCase: boolean;
  numbers: boolean;
  symbols: boolean;
  repeatChars: boolean;
}

export type PasswordContextType = {
  passwords: IPassword[];
  passAtributes: IPasswordAttributes;
  tmpLength: Number;
  enableNumbers: (numbers: boolean) => void;
  enableSymbols: (symbols: boolean) => void;
  setCase: (letters: LetterCase) => void;
  ConfTmpLength: (length: number) => void;
};

export type PasswordProviderProps = {
  children: React.ReactNode; // 👈️ added type for children
};
