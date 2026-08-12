import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router";

const PROJECTS = [
  {
    title: "Andinet Marketplace",
    client: "H&B Consulting (Luxembourg)",
    category: "FULL-STACK / DEVOPS",
    type: "Professional",
    role: "Software Engineer",
    period: "06/2023 – Present",
    status: "LIVE",
    featured: true,

    description:
      "Full-stack marketplace platform built for digital commerce, payments, and scalable production operations.",

    images: ["/src/assets/projects/andinet/andinet.png"],

    stack: [
      "React",
      "Node.js",
      "PostgreSQL",
      "Docker",
      "NGINX",
      "Stripe",
      "PayPal",
    ],

    highlights: [
      "Full-stack marketplace development",
      "Scalable database architecture",
      "Payment and authentication integrations",
      "Production deployment and maintenance",
    ],

    url: "https://www.hbconsulting-lu.com/",
    github: null,
  },

  {
    title: "ABK Opé | Easy Compta",
    client: "Embassy of Niger in Cuba",
    category: "BACKEND / SECURITY",
    type: "Professional",
    role: "Software Engineer",
    period: "02/2024 – 05/2024",
    status: "COMPLETED",
    featured: true,

    description:
      "Financial management system designed to modernize accounting workflows and secure institutional data.",

    images: ["/src/assets/projects/abk-ope/abk-ope.jpeg"],

    stack: ["React", "Node.js", "PostgreSQL", "Authentication", "REST API"],

    highlights: [
      "Digitalization of financial workflows",
      "Secure data and user management",
      "Administrative reporting",
      "Backend security practices",
    ],

    url: null,
    github: null,
  },

  {
    title: "PlanB SRL Shop",
    client: "PlanB SRL",
    category: "E-COMMERCE",
    type: "Professional",
    role: "Software Engineer",
    period: "06/2024 – 11/2024",
    status: "COMPLETED",
    featured: true,

    description:
      "An e-commerce website built with WordPress and WooCommerce for a retail business, designed to showcase products and enable basic online sales functionality.",

    images: ["/src/assets/projects/planbsrl/planbsrl.jpeg"],

    stack: ["WordPress", "WooCommerce", "PHP", "MySQL"],

    highlights: [
      "E-commerce platform implementation",
      "WordPress and WooCommerce configuration",
      "Online store setup",
      "End-to-end project delivery",
    ],

    url: "https://planbsrlshop.com",
    github: null,
  },

  // // ─────────────────────────────────────────
  // // TECHNICAL / PERSONAL PROJECTS
  // // ─────────────────────────────────────────

  {
    title: "Gamor",
    client: "Avangenio",
    category: "FRONTEND / UI",
    type: "Technical Project",
    role: "Developer",
    period: "03/2026 – 04/2026",
    status: "DEMO",
    featured: false,

    description:
      "Gaming platform concept created as a technical frontend project and UI implementation.",

    images: ["/src/assets/projects/gamor/gamor.png"],

    stack: ["React", "TailwindCSS"],

    highlights: [
      "Responsive gaming interface",
      "Component-based architecture",
      "Interactive UI implementation",
    ],

    url: "#",
    video: "/src/assets/projects/gamor/gamor-video.mp4",
    github:
      "https://github.com/Jxs7er/streaming-platform-gamor/tree/refactor/tailwindcss-to-css",
  },
];

const ProjectsSection = ({ projects = PROJECTS }) => {
  return (
    <>
      <section
        id="project"
        className="bg-stone-950 relative min-h-screen"
        style={{
          zIndex: 100,
        }}
      >
        {/* Header */}
        <div className="px-4 py-12 flex justify-center items-center sticky top-1">
          <span
            className="text-xs font-bold tracking-[0.3em] uppercase backdrop-blur-3xl 
          text-amber-400 bg-amber-400/10 border border-amber-400/30 px-4 py-1 rounded-full"
          >
            Projects
          </span>
        </div>

        {/* SubTitle */}
        <div
          className="flex flex-col w-full px-8 min-h-[200px] 
        justify-center items-center mt-16"
        >
          <p
            className=" text-stone-500 max-w-2xl w-full md:pr-44 
              text-sm md:text-lg font-semibold md:max-w-none mx-auto md:mx-0 text-start"
          >
            Experienced in delivering end-to-end digital transformation projects
            — from architecture design to infrastructure — applying Clean Code
            principles, modular architecture, and security best practices.
          </p>

          <div className="flex flex-col justify-center items-center my-10 z-0">
            <div className="w-2 h-2 bg-amber-200 rounded-full opacity-40" />
            <div
              className="w-[1px] h-20 bg-gradient-to-r from-amber-200 
            via-amber-400 to-amber-600 opacity-40"
            />
            <div className="w-2 h-2 bg-amber-600 rounded-full" />
          </div>

          <p
            className=" text-stone-400 max-w-2xl w-full md:pl-44
              text-xs md:text-sm font-semibold md:max-w-none mx-auto md:mx-0 text-end"
          >
            Focused on scalable system design, service-oriented backend
            architectures, and distributed systems, with a strong interest in
            the role of technology as a driver of institutional and economic
            modernization.
          </p>
        </div>

        <div className="mt-24">
          {projects.map((project) => (
            <>
              <div className="min-h-screen">
                {/* IMAGE */}
                <div className="h-[550px] overflow-hidden bg-gradient-to-b from-transparent to-amber-200/20 relative">
                  <div className="flex justify-around items-center">
                    {project.images.map((src) => (
                      <div className="group relative flex items-center justify-center py-12 [perspective:1200px]">
                        {/* Glow / shadow */}
                        <div
                          className=" absolute h-[70%] w-[75%] rounded-2xl 
                          bg-amber-500/20 blur-3xl transition-all duration-700 
                          group-hover:bg-amber-400/30 group-hover:scale-110"
                        />

                        {/* Back panel */}
                        <div
                          className=" absolute h-[75%] w-[80%] rounded-xl border 
                          border-stone-700/50 bg-stone-900/80 shadow-2xl 
                          rotate-6 translate-x-4 translate-y-3 transition-all 
                          duration-700 group-hover:rotate-3 group-hover:translate-x-6"
                        />

                        {/* Main screen */}
                        <div
                          className="relative w-[85%] overflow-hidden rounded-xl border 
                          border-stone-600/70 bg-stone-950 shadow-[0_30px_80px_rgba(0,0,0,0.45)] 
                          -rotate-3 transition-all duration-700 
 
                          [transform-style:preserve-3d] 
 
                          group-hover:rotate-0 group-hover:scale-[1.03]
                          
                          [transform:rotateX(2deg)_rotateY(-18deg)_rotateZ(4deg)]
                          group-hover:[transform:rotateX(0deg)_rotateY(0deg)_rotateZ(0deg)]
                          group-hover:scale-105
                          "
                        >
                          {/* Browser / window header */}
                          <div className="flex h-8 items-center gap-2 border-b border-stone-800 bg-stone-900 px-3">
                            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                            <div className="ml-3 h-3 flex-1 rounded bg-stone-800" />
                          </div>

                          {/* Image */}
                          {/* <img
                            src={src}
                            alt={project.title}
                            className=" block w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          /> */}

                          {project.video ? (
                            <video
                              autoPlay
                              loop
                              muted
                              playsInline
                              className=" block w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                              // className={styles.video}
                            >
                              <source src={project.video} />
                            </video>
                          ) : (
                            <img
                              src={src}
                              alt={project.title}
                              className=" block w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                          )}

                          {/* Glass reflection */}
                          <div
                            className=" pointer-events-none absolute inset-0 bg-gradient-to-br 
                            from-white/10 via-transparent to-transparent opacity-60"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="w-full h-full bg-black/30 absolute top-0 left-0 " />
                </div>

                {/* CONTENT */}
                <div
                  className="p-6 bg-stone-900 relative"
                  style={{ zIndex: 101 }}
                >
                  <span
                    className={`font-mono text-sm px-2 py-1  border-2 rounded-full
                  absolute -top-10  backdrop-blur-2xl
                  ${
                    project.status === "COMPLETED"
                      ? "text-emerald-500 border-green-900/20 bg-green-300/10"
                      : project.status === "LIVE"
                        ? "text-red-500 border-red-900/20 bg-red-300/10 animate-pulse"
                        : project.status === "DEMO"
                          ? "text-amber-500 border-amber-900/20 bg-amber-300/10"
                          : "text-stone-500 border-stone-900/20 bg-stone-300/10"
                  }
                  `}
                  >
                    ● {project.status}
                  </span>

                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2 sticky top-1 flex flex-col justify-center items-center">
                      <h1
                        className="mt-4 text-3xl md:text-6xl lg:text-9xl font-normal text-stone-200 leading-tight"
                        style={{ fontFamily: "'Georgia', serif" }}
                      >
                        <span className="font-bold uppercase">
                          {project.title}
                        </span>{" "}
                        /
                        <p className="text-sm text-amber-500 align-top ml-1 ">
                          {project.category}
                        </p>
                      </h1>
                    </div>
                  </div>

                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-stone-400">
                    {project.description}
                  </p>

                  <span className="font-mono text-xs text-stone-100/30">
                    {project.period}
                  </span>
                  {project.client && (
                    <p className="text-xs text-amber-500/50 align-bottom ml-1 ">
                      to: {project.client}
                    </p>
                  )}

                  {/* STACK */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="border border-stone-700 px-2 py-1
                     font-mono text-xs text-stone-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* LINKS */}
                  <div className="mt-6 flex gap-4">
                    {project.github && (
                      <Link
                        to={project.github}
                        className="font-mono text-sm text-stone-800 
                      hover:text-stone-900 hover:font-normal cursor-pointer bg-stone-100 px-2 py-1"
                      >
                        <span className=" flex justify-center items-center gap-x-1">
                          [ GITHUB ]
                        </span>
                      </Link>
                    )}

                    <Link
                      to={``}
                      className="font-mono text-sm text-stone-800 
                      hover:text-stone-900 hover:font-semibold cursor-pointer bg-amber-200 px-2 py-1"
                    >
                      <span className=" flex justify-center items-center gap-x-1">
                        Explore <ArrowRightIcon className="w-4 h-4" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  );
};
export default ProjectsSection;
