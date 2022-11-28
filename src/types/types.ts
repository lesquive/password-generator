export interface Password {
  password: string;
}

export interface PasswordAttributes {
  length: number;
  upperCase: boolean;
  lowerCase: boolean;
  numbers: boolean;
  symbols: boolean;
}
