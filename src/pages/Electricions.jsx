import React from "react";
import styles from "./Electricians.module.css";
import { Link } from "react-router-dom";
function ElectricianCard({ image, name, contact, information }) {
  return (
    <li className={styles.card}>
      <img src={image} alt="img" className="div-item" />
      <div>
        <h3 className={styles.divItem}>{name}</h3>
        <p>Contact: {contact}</p>
        <p>{information}</p>
        <button className={styles.bookBtn}><Link to="/price">Book Now</Link></button>
      </div>
    </li>
  );
}

function ServicesSection() {
  const electricians = [
    {
      image: `https://www.shutterstock.com/image-photo/male-electrician-works-switchboard-electrical-260nw-2066747609.jpg`,
      name: "Jackson Smith",
      contact: "8795675832",
      information: "Information about the electrician.....",
    },
    {
      image: "https://t3.ftcdn.net/jpg/02/25/35/42/360_F_225354243_OsKPimqbPJaGEzZ0Mya4qszmAC87p584.jpg",
      name: "Harry Brook",
      contact: "8794685832",
      information: "Information about the electrician.....",
    },
    {
      image: "https://thumbs.dreamstime.com/b/female-electrician-checking-fusebox-wiring-34465501.jpg",
      name: "Jackson Smith",
      contact: "8795675832",
      information: "Information about the electrician.....",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv-Kos4HHwxZ4NfBPAsclG-wwJ_-UHwf2XqXwsBVYkvgGGsyNiaUpwi8VNzpQaKg0xuYE&usqp=CAU",
      name: "Harry Brook",
      contact: "8794685832",
      information: "Information about the electrician.....",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmn7NmFSp4eq7KhwI1bIzRed6-iSPu9s9RUQ&s",
      name: "Jackson Smith",
      contact: "8795675832",
      information: "Information about the electrician.....",
    },
    {
      image: "https://media.istockphoto.com/id/1449769318/photo/female-electrician-worker-checking-repair-maintenance-operation-electric-system-in-the.jpg?s=612x612&w=0&k=20&c=Wb9z2KS7HYofL33QJXiDlK8iJlufvjFjgOvtjOoM4tA=",
      name: "Lara Swift",
      contact: "8794685832",
      information: "Information about the electrician.....",
    },
  ];

  return (
    <section className={styles.services} id="services">
      <h2 className='text-white'>Electricians</h2>
      <p className='text-white'>Book your appointment now from the comfort of your home.</p>
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
