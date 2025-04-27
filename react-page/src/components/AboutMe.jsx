const Section = ({ title, children }) => {
    return (
      <div className="about-section">
        <h3>{title}</h3>
        {children}
      </div>
    );
  };
  
  const LanguageList = ({ languages }) => {
    return (
      <ul>
        {languages.map((language, index) => (
          <li key={index}>{language}</li>
        ))}
      </ul>
    );
  };
  
  export default function AboutMe() {
    const languages = ["Slovak - Fluent", "English - Fluent"];
    const interests = "To be updated...";
    const bio = `
      A software engineer who worked in FinTech and Higher Education.
      Significantly contributed by developing applications and solutions
      that have improved business and development workflow. Currently, pursuing
      further development in AI and Data Science.
    `;
  
    return (
      <>
        <h2>About Me</h2>
        <p>{bio}</p>
        <Section title="Interests">
          <p>{interests}</p>
        </Section>
        <Section title="Languages">
          <p>
            I know a bit of Italian, Spanish, German, and I am learning to speak Japanese and Mandarin.
          </p>
          <LanguageList languages={languages} />
        </Section>
      </>
    );
  }