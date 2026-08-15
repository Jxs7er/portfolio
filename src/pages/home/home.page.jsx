import { HeroBannerSection } from "@/components";
import { CertificatesSection } from "@/components/certificates";
import { ContactSection } from "@/components/contact";
import { EducationSection } from "@/components/education";
import { ProfessionalEngagement } from "@/components/engagment";
import EngineeringPracticeSection from "@/components/engineering/EngineeringPractices";
import { ExperiencesSection } from "@/components/experience";
import { ProjectsSection } from "@/components/projects";
import { ResumeSection } from "@/components/resume";
import { SkillsSection } from "@/components/skills";
import { SEO } from "@/ui/meta";
import { Helmet } from "react-helmet";

const HomePage = () => {
  return (
    <>
      <SEO
        Helmet={Helmet}
        title="Ariel Alejandro Marzo Gomez | Computer Engineer | Jxs7er"
        description="Ariel Alejandro Marzo Gomez (Jxs7er) — Computer Engineer and Software Engineer focused on full-stack development, networking, infrastructure, DevOps, and cybersecurity."
        type="website"
        keywords={[
          "Ariel Alejandro Marzo Gomez",
          "Ariel Marzo Gomez",
          "Jxs7er",
          "Computer Engineer",
          "Software Engineer",
          "Full Stack Developer",
          "Full Stack Engineer",
          "Network Administrator",
          "Network Engineer",
          "DevOps",
          "Cybersecurity",
          "Network Security",
          "Infrastructure",
          "Frontend Developer",
          "Backend Developer",
          "JavaScript",
          "TypeScript",
          "React",
          "Redux",
          "Tailwind CSS",
          "HTML5",
          "CSS3",
          "Next.js",
          "Node.js",
          "Express.js",
          "Python",
          "FastAPI",
          "REST APIs",
          "PostgreSQL",
          "MySQL",
          "MongoDB",
          "Redis",
          "RabbitMQ",
          "Docker",
          "NGINX",
          "Apache",
          "Git",
          "Bash",
          "Andinet Marketplace",
        ]}
        locale="en_US"
        themeColor="#292524"
        twitterHandle="jxs7er"
        canonicalUrl={`${window.location.origin}${window.location.pathname}`}
      />
      <div className="">
        <div className="flex items-stretch justify-center">
          <HeroBannerSection />
        </div>
        <ExperiencesSection />
        <EducationSection />
        <EngineeringPracticeSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificatesSection />
        <ProfessionalEngagement />
        <ResumeSection />
        <ContactSection />
      </div>
    </>
  );
};
export default HomePage;
