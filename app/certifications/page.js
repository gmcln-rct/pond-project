
// import Info from 'app/components/Info'

// import styles from "./page.module.scss";
// import InfoUnit from "./infounit";
import InfoContainer from "../components/info";

const certificationData = [
  {
    title: "Certified Lake Manager",
    description: "Nicole White is a Certified Lake Manager by the North American Lake Management Society (NALMS).",
    subdescription: "Cert # 21-05M3 /n NJ #: 92152B",
    image: "/images/certifications/lakemanager.png",
    imageStyle: "certification",
    imagePlacement: "right",
  },
  {
    title: "New York Women Business Enterprise (WBE)",
    description: "Little Bear Environmental Consulting LLC. is certified by The New York State Department of Economic Development, Divison of Minority and Women &#8217;s Business Development (DMWBD) as a Women Business Enterprise (WBE) in New York State.",
    subdescription: "FileID #: 70703",
    image: "/images/certifications/wbe-3.png",
    imageStyle: "certification",
    imagePlacement: "right",
  },
  {
    title: "PRO Certified ProcellaCOR Specialist",
    description: "Little Bear Environmental is a PRO Certified ProcellaCOR Specialist. Only PRO Certified ProcellaCOR Specialists have the training, expertise, and experience to apply ProcellaCOR.",
    image: "/images/certifications/sepro.png",
    imageStyle: "certification",
    imagePlacement: "right",
  },
  {
    title: "Steward of Water",
    description: "Little Bear Environmental is a SePRO Steward of Water partner. These individuals and their companies are dedicated to serving the aquatics industry and the environment using the latest advances in training, technology, and products.",
    image: "/images/certifications/stewards.png",
    imageStyle: "certification",
    imagePlacement: "right",
  },
  {
    title: "Lower Hudson Partnership for Regional Invasive Species Management (LHPRISM) Partner",
    description: "Little Bear Environmental is an LHPRISM Partner.",
    image: "/images/certifications/lhprism.jpeg",
    imageStyle: "certification",
    imagePlacement: "right",
  }
];

const certificationStyleClass = "certification";

export default function Certifications() {
  return (
    <section className={certificationStyleClass}>
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
