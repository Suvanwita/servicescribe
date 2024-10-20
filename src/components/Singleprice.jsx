import React, { useState } from "react";
import styles from "./Singleprice.module.css";

const PriceSingle = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState("free");

  const monthlyPricing = {
    free: "USD 1.00",
    growth: "USD 19.99",
    professional: "USD 49.99",
    enterprise: "USD 79.99",
  };

  const yearlyPricing = {
    free: "USD 3.00",
    growth: "USD 199.99",
    professional: "USD 499.99",
    enterprise: "USD 799.99",
  };

  const pricing = isMonthly ? monthlyPricing : yearlyPricing;

  const handleToggleChange = (event) => {
    setIsMonthly(event.target.id === "monthly");
  };

  const handlePlanSelect = (id) => {
    setSelectedPlan(id);
  };

  return (
    <div className={styles.lol}>
      {" "}
      <div className={styles.container}>
        <div className={styles.toggle}>
          <input
            type="radio"
            name="billing"
            id="monthly"
            checked={isMonthly}
            onChange={handleToggleChange}
          />
          <label htmlFor="monthly">Monthly</label>
          <input
            type="radio"
            name="billing"
            id="yearly"
            checked={!isMonthly}
            onChange={handleToggleChange}
          />
          <label htmlFor="yearly">Yearly</label>
        </div>

        <div className={styles.pricingTable}>
          {Object.keys(pricing).map((key,index) => (
            <div
              key={key}
              className={styles[`box${index}`]}
              onClick={() => handlePlanSelect(key)}
              id={key}
            >
              <div className={styles.overlay}></div>
              <div className={styles.content}>
                <center className="text-black"><h3>{key.charAt(0).toUpperCase() + key.slice(1)}</h3></center>
                <img
                  src="https://images.vexels.com/content/135824/preview/dollar-bag-square-icon-d3f6c9.png"
                  alt={`${key} Plan Icon`}
                />
                <p className={styles.price}>{pricing[key]}</p>
                <center><button className={styles.lol2}>Sign up Now!</button></center>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PriceSingle;
