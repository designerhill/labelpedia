export function loadRazorpayScript(): Promise<boolean> {
  return new Promise((resolve) => {
    if (document.querySelector('script[src="https://checkout.razorpay.com/v1/checkout.js"]')) {
      return resolve(true);
    }
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

export type RazorpayCheckoutOptions = {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description?: string;
  order_id: string;
  prefill?: {
    name?: string;
    email?: string;
    contact?: string;
  };
  notes?: Record<string, string>;
  theme?: { color?: string };
  handler?: (response: any) => void;
};

export function openRazorpayCheckout(options: RazorpayCheckoutOptions) {
  // @ts-ignore
  const Razorpay = (window as any).Razorpay;
  if (!Razorpay) throw new Error('Razorpay SDK not loaded');
  // @ts-ignore
  const rzp = new Razorpay(options);
  rzp.open();
}
