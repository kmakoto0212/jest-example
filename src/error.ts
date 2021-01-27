export const callErrorFun = (): never => {
  throw new Error("error");
};

export const callErrorAsyncFun = async (): Promise<never> => {
  throw new Error("asyncError");
};
