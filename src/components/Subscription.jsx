import React, { useState } from "react";
import styles from "./Subscirption.module.css";

const PricingTable = () => {
  const [selectedPlan, setSelectedPlan] = useState("growth");
  const [isMonthly, setIsMonthly] = useState(true);

  const monthlyPricing = {
    growth: "USD 9.99",
    professional: "USD 19.99",
    enterprise: "USD 39.99",
  };

  const yearlyPricing = {
    growth: "USD 12.99",
    professional: "USD 22.99",
    enterprise: "USD 42.99",
  };

  const pricing = isMonthly ? monthlyPricing : yearlyPricing;

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  const handleToggleChange = (event) => {
    setIsMonthly(event.target.value === "monthly");
  };

  return (
    <div className={styles.lol}>
      {" "}
      <div className={styles.toggle}>
        <input
          type="radio"
          name="billing"
          id="monthly"
          value="monthly"
          checked={isMonthly}
          onChange={handleToggleChange}
        />
        <label htmlFor="monthly">7 AM to 2 PM</label>
        <input
          type="radio"
          name="billing"
          id="yearly"
          value="yearly"
          checked={!isMonthly}
          onChange={handleToggleChange}
        />
        <label htmlFor="yearly">3:30 PM to 9:30 PM</label>
      </div>
      <div className={styles.container}>
        <div className={styles.pricingTable}>
          {Object.keys(pricing).map((plan, index) => (
            <div
              key={plan}
              className={styles[`box${index}`]}
              onClick={() => handlePlanSelect(plan)}
            >
              <div className={styles.overlay}></div>
              <div className={styles.content}>
                <center className="text-white">
                  {plan === "growth"
                    ? "Less than 2 hours"
                    : plan === "professional"
                      ? "2 to 5 hours"
                      : "More than 5 hours"}
                </center>
                <img
                  className="lol2"
                  src="https://cdn-icons-png.freepik.com/256/543/543135.png?semt=ais_hybrid"
                  alt={plan}
                />
                <p className={styles.price}>{pricing[plan]}</p>
                <center><button className={styles.button}>Book now</button></center>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingTable;
