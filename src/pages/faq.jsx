import { useState } from "react";
import styles from "./faq.module.css";

function Faq() {
  const [openItems, setOpenItems] = useState([false, false, false, false, false]);

  const handleToggle = (index) => {
    const newOpenItems = [...openItems];
    newOpenItems[index] = !newOpenItems[index];
    setOpenItems(newOpenItems);
  };

  return (
    <div className={styles.topdiv}>
      <div className={styles.lol}><span className="text-5xl text-blue-800">FAQ</span>s</div>
      <div className={styles.faqContainer}>
        <div className={styles.faqItem}>
          <h3>What services do you offer?</h3>
          <button className={styles.toggleBtn} onClick={() => handleToggle(0)}></button>
          {openItems[0] && (
            <div className={styles.faqAnswer}>
              <p>
              We offer a wide range of services including [list key services, e.g., plumbing, electrical repairs, home maintenance, etc.]. For a full list of services, please visit our [Services page].
              </p>
            </div>
          )}
        </div>

        <div className={styles.faqItem}>
          <h3>How can I book a service?</h3>
          <button className={styles.toggleBtn} onClick={() => handleToggle(1)}></button>
          {openItems[1] && (
            <div className={styles.faqAnswer}>
              <p>
              You can book a service through our website by clicking on the "Book Now" button, or you can contact us directly at [phone number] or [email address]. We also offer walk-in appointments at our office.


              </p>
            </div>
          )}
        </div>

        <div className={styles.faqItem}>
          <h3>What areas do you serve?</h3>
          <button className={styles.toggleBtn} onClick={() => handleToggle(2)}></button>
          {openItems[2] && (
            <div className={styles.faqAnswer}>
              <p>
              We currently serve clients in [list areas, e.g., Prayagraj, Uttar Pradesh, and nearby regions]. If you’re unsure whether we cover your location, please contact us for confirmation.
              </p>
            </div>
          )}
        </div>

        <div className={styles.faqItem}>
          <h3>What is your pricing structure?</h3>
          <button className={styles.toggleBtn} onClick={() => handleToggle(3)}></button>
          {openItems[3] && (
            <div className={styles.faqAnswer}>
              <p>
              Our pricing varies depending on the type of service. For an accurate quote, you can request an estimate via our website or contact us directly. We also offer package deals for certain services.
              </p>
            </div>
          )}
        </div>

        <div className={styles.faqItem}>
          <h3>What is your cancellation policy</h3>
          <button className={styles.toggleBtn} onClick={() => handleToggle(4)}></button>
          {openItems[4] && (
            <div className={styles.faqAnswer}>
              <p>
              Cancellations can be made up to 24 hours before the scheduled service without any charges. For cancellations made less than 24 hours before the appointment, a small cancellation fee may apply
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Faq;
