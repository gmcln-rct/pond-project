

import InfoContainer from "../components/info";

import { certificationData } from "../data/certifications";

const certificationStyleClass = "certification";

export default function Certifications() {
  return (
    <section className={certificationStyleClass}>
        <InfoContainer infoUnitsData={certificationData}/>
    </section>
  );
}

