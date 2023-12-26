// To update toast config
export const UpdateToastConfig = (type: "success" | "error") => {
  return {
    type: type,
    isLoading: false,
    autoClose: 2000,
  };
};
