"use client";
export default function StripeButton() {
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
    <div style={{ display: "flex", justifyContent: "center", marginTop: 24 }}>
      <button
        onClick={handleBuy}
        style={{
          padding: "12px 24px",
          fontSize: 18,
          background: "#635bff",
          color: "#fff",
          border: "none",
          borderRadius: 8,
          cursor: "pointer",
          zIndex: 9999,
        }}
      >
        Buy Pro Plan ($10)
      </button>
    </div>
  );
} 