export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nethmi Hapuarachchi",
    url: "https://nethmihapuarachchi.com",
    jobTitle: "Software Engineer & Developer",
    description:
      "Software engineer and developer passionate about designing efficient, scalable, and user-focused software solutions",
    sameAs: [
      "https://github.com/nethmiH",
      "https://www.linkedin.com/in/nethmi-hapuarachchi",
    ],
    knowsAbout: [
      "Web Development",
      "React",
      "Next.js",
      "Full Stack Development",
      "Mobile Development",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
