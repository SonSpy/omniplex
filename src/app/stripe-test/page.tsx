"use client";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function StripeTestPage() {
  const handleBuy = async () => {
    const res = await fetch("/api/stripe/checkout-session", { method: "POST" });
    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    } else {
      alert("Error creating Stripe session");
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: 100 }}>
      <h1>Stripe Integration Test</h1>
      <button
        onClick={handleBuy}
        style={{
          marginTop: 24,
          padding: "12px 24px",
          fontSize: 18,
          background: "#635bff",
          color: "#fff",
          border: "none",
          borderRadius: 8,
          cursor: "pointer",
        }}
      >
        Buy Pro Plan ($10)
      </button>
    </div>
  );
} 