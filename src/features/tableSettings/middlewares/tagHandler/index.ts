export const tagHandler =
  () => (next: (arg0: any) => void) => (action: any) => {
    next(action);
  };
