import { React } from "react";

export function Plans() {
  const plans = [
    {
      name: "FREE",
      price: 0,
      features: [
        "Single User",
        "5GB Storage",
        "Unlimited Public Projects",
        "Community Access",
        "Unlimited Private Projects",
        "Dedicated Phone Support",
        "Free Subdomain",
        "Monthly Status Reports",
      ],
      colors: "#6954FF",
    },
    {
      name: "PLUS",
      price: 9,
      features: [
        "Single User",
        "5GB Storage",
        "Unlimited Public Projects",
        "Community Access",
        "Unlimited Private Projects",
        "Dedicated Phone Support",
        "Free Subdomain",
        "Monthly Status Reports",
      ],
      colors: "#6954FF",
    },
    {
      name: "PRO",
      price: 49,
      features: [
        "Single User",
        "5GB Storage",
        "Unlimited Public Projects",
        "Community Access",
        "Unlimited Private Projects",
        "Dedicated Phone Support",
        "Free Subdomain",
        "Monthly Status Reports",
      ],
      colors: "#6954FF",
    },
  ];
  return (
    <div className="Plan">
      {plans.map((plan) => (
        <Card
          name={plan.name}
          price={plan.price}
          features={plan.features}
          colors={plan.colors}
        />
      ))}
    </div>
  );
}

export function Card(props) {
  return (
    <div className="card card-text col-md-2">
      <div className="card-body">
      <p className="Title cardbg">{props.name}</p>
      <p className="Price cardbg" style={{ color: props.colors }}>
        ${props.price}/month
      </p>
      <hr />
      <ul class="features">
        {props.features.map((feature) => (
          <li class="List">{feature}</li>
        ))}
      </ul>
      <button class="btn btn-outline-primary me-2">BUY</button></div>
    </div>
  );
}
