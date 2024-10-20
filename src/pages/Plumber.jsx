import React from "react";
import styles from "./Plumber.module.css";
function ElectricianCard({ image, name, contact, information }) {
  return (
    <li className={styles.card}>
      <img src={image} alt="img" className="div-item" />
      <div>
        <h3 className={styles.divItem}>{name}</h3>
        <p>Contact: {contact}</p>
        <p>{information}</p>
        <button className={styles.bookBtn}>Book Now</button>
      </div>
    </li>
  );
}

function ServicesSection() {
  const electricians = [
    {
      image: `https://bathsense.asianpaints.com/content/dam/ap-bathsense-revamp/findaplumber/plumberd.png`,
      name: "Jackson Smith",
      contact: "8795675832",
      information: "Information about the plumber.....",
    },
    {
      image: "https://t4.ftcdn.net/jpg/06/31/55/67/360_F_631556706_00lXQ8LOAC5iNc516k1g7fqLdHJmxFCA.jpg",
      name: "Harry Brook",
      contact: "8794685832",
      information: "Information about the plumber.....",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ891O3AnmqP_OGFZFJyHlGUuMwHfYh5PurQg&s",
      name: "Jackson Smith",
      contact: "8795675832",
      information: "Information about the plumber.....",
    },
    {
      image: "https://d17x34b9fcvxk7.cloudfront.net/static/marketing/images/hero-backgrounds/plumber.jpg",
      name: "Harry Brook",
      contact: "8794685832",
      information: "Information about the plumber.....",
    },
    {
      image: "https://content.jdmagicbox.com/v2/comp/lucknow/s9/0522px522.x522.200623214058.i5s9/catalogue/janvi-electronics-gomti-nagar-lucknow-plumbers-czmyklp1ah.jpg",
      name: "Jackson Smith",
      contact: "8795675832",
      information: "Information about the plumber.....",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy82JI5YVqx3n3RdNogOzatUF8Cm4yuHroHyzl9VSeBrDTTQc6nt9X9yn9LY0LPKBz8zQ&usqp=CAU",
      name: "Lara Swift",
      contact: "8794685832",
      information: "Information about the plumber.....",
    },
  ];

  return (
    <section className={styles.services} id="services">
      <h2 className="text-white">Plumber</h2>
      <p className="text-white">Book your appointment now from the comfort of your home.</p>
      <ul className={styles.cards}>
        {electricians.map((electrician, index) => (
          <ElectricianCard
            key={index}
            image={electrician.image}
            name={electrician.name}
            contact={electrician.contact}
            information={electrician.information}
          />
        ))}
      </ul>
    </section>
  );
}

export default ServicesSection;
