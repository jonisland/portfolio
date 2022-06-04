import classes from "./Certificate.module.css";
import Card from "../UI/Card";

const Certificate = () => {
  const certificates = [
    {
      href: "https://www.credential.net/475ed24b-f8ab-4f7e-83d5-709f66e1e9de#gs.58js84",
      name1: "Front End Web Development",
      name2: "Tech Degree",
      src: "https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/34549920",
      alt: "front end web development tech degree",
    },
    {
      href: "https://www.udemy.com/certificate/UC-8c333204-2d8f-44e1-b257-c13c4dea276d/",
      name1: "React JS, React Router and Redux",
      name2: "Certificate",
      src: "https://udemy-certificate.s3.amazonaws.com/image/UC-8c333204-2d8f-44e1-b257-c13c4dea276d.jpg?v=0",
      alt: "React Js Certificate",
    },
  ];

  const CertificatesHandler = () => {
    return (
      <div className={classes.cardsContainer}>
        {certificates.map((certificate) => (
          <Card key={Math.random()}>
            <h2>{certificate.name1}</h2>
            <a href={certificate.href} target="_blank" rel="noreferrer">
              <h3>{certificate.name2}</h3>
              <img
                className={classes.techDegree}
                src={certificate.src}
                alt={certificate.alt}
              />
            </a>
          </Card>
        ))}
      </div>
    );
  };

  return (
    <div className={classes.container}>
      <h1 id="certificate">Certificates</h1>
      <CertificatesHandler />
    </div>
  );
};

export default Certificate;
