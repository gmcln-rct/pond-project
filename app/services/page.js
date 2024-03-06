
import styles from "./page.module.scss";



export default function ServicesPage() {

  const services = [
    "Pond & Lake Management",
    "Environmental Permits",
    "Invasive Species Management & Restoration",
    "Environmental Project Management",
    "Ecological Surveys & Mapping",
    "Water Quality & Ecosystem Health Monitoring",
    "Educational Outreach & Community Engagement",
    "Grant Writing & Environmental Compliance"
  ];

  return (
    <section className={styles.services}>
      <h1>Our Services</h1>
      <p>What we do?</p>
      <details className={styles.services__details}>
      <summary>Certifications</summary>
      <p>Our services include:</p>
      <p>Our services include:</p>
      <p>Our services include:</p>
      </details>
      <ul>
        {services.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>
    </section>
  );
}
