declare global {
  interface Window {
    Razorpay?: any;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Razorpay: any;
}

export {};
