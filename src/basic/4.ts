function showMessage(message: string) {
  console.log(message);
}

function calc(num1: number, num2: number) {
  return num1 + num2;
}

let errorFunction: any = function customError() {
  throw new Error("Error");
};
