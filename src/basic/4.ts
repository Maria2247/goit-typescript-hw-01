function showMessage(message: string) {
  return message;
}

function calc(num1: number, num2: number) {
  return num1 + num2;
}

export function customError(): never {
  throw new Error("Error");
}

export const task4 = { showMessage, calc, customError };
