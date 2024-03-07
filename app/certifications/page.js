
// import Info from 'app/components/Info'

// import styles from "./info.module.scss";
// import InfoUnit from "./infounit";
import InfoContainer from "../components/info";

const certificationData = [
  {
    title: "Certified Lake Manager",
    description: "Nicole White is a Certified Lake Manager by the North American Lake Management Society (NALMS).",
    subdescription: "Cert # 21-05M3 /n NJ #: 92152B",
    image: "/images/certifications/lakemanager.png",
    imageStyle: "circle",
    imagePlacement: "right",
  },
  {
    title: "New York Women Business Enterprise (WBE)",
    description: "Little Bear Environmental Consulting LLC. is certified by The New York State Department of Economic Development, Divison of Minority and Women &#8217;s Business Development (DMWBD) as a Women Business Enterprise (WBE) in New York State.",
    subdescription: "FileID #: 70703",
    image: "/images/certifications/wbe-3.png",
    imageStyle: "circle",
    imagePlacement: "right",
  },
  {
    title: "Invasive Species Management",
    description: "Invasive species are plants, animals, or pathogens that are non-native to the ecosystem under consideration and whose introduction causes or is likely to cause harm.",
    image: "/images/pond-temp-5.jpg",
    imagePlacement: "left",
  },
  {
    title: "Environmental Permits & Grants",
    description: "Preparing environmental permits and grant applications for pond and lake management projects.",
    image: "/images/pond-temp-7.jpg",
    imagePlacement: "right",
  },
  {
    title: "Water Quality Testing",
    description: "Water quality testing is an important part of environmental monitoring. When water quality is poor, it affects not only aquatic life but the surrounding ecosystem as well.",
    image: "/images/pond-temp-8.jpg",
    imagePlacement: "left",
  },
];

export default function Certifications() {
  return (
    <section>
        <InfoContainer infoUnitsData={certificationData}/>

    </section>
    // <div className={styles.info__container}>
    //   {infoUnitsData.map((infoUnitData) => (
    //     <InfoUnit key={infoUnitData.title} {...infoUnitData} />
    //   ))}
    // </div>
  );
}



// import React from 'react'

// export default function page() {
//   return (
//     <div>page</div>
//   )
// }
