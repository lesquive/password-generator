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
};

export type PasswordProviderProps = {
  children: React.ReactNode; // 👈️ added type for children
};
