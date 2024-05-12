// global default response
type DefaultResponseType = {
  status: "success" | "error" | "fail",
  message: string,
  body?: Object,
};

export default DefaultResponseType;