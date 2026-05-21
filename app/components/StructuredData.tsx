const SITE_URL = "https://www.tbkpro.in";

export default function StructuredData() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Bhargava Kishore Tsavatapalli",
    url: SITE_URL,
    image: `${SITE_URL}/profile.jpg`,
    jobTitle: "Node.js Backend Developer",
    worksFor: {
      "@type": "Organization",
      name: "Redblocks Solutions",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hyderabad",
      addressCountry: "IN",
    },
    email: "mailto:bhargavnaidu23494@gmail.com",
    telephone: "+91-91330-07708",
    sameAs: [
      "https://www.linkedin.com/in/bhargava-kishore-tsavatapalli-284b5b25a",
    ],
    knowsAbout: [
      "Node.js",
      "TypeScript",
      "REST APIs",
      "Microservices",
      "RabbitMQ",
      "PostgreSQL",
      "MySQL",
      "AWS Lambda",
      "AWS RDS",
      "AWS API Gateway",
      "ReactJS",
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: SITE_URL,
    name: "Bhargava Kishore Tsavatapalli — Portfolio",
    inLanguage: "en",
    author: {
      "@type": "Person",
      name: "Bhargava Kishore Tsavatapalli",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
