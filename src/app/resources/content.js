import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Rajat",
  lastName: "Asthana",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full Stack Developer",
  avatar: "/images/profile.png",
  location: "Asia/Kolkata",
  languages: ["English"],
};

const newsletter = {
  display: true,
  title: <>Get in Touch with {person.firstName}</>,
  description: (
    <>
      Have a project in mind or want to collaborate? I'd love to hear from you.
      Send me a message and I'll get back to you as soon as possible.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/RyderAsKing",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/rajatasthana12/",
  },
  {
    name: "",
    icon: "x",
    link: "https://x.com/Rajat37517661",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:contact@ryder.pro",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Full Stack Developer </>,
  subline: (
    <>
      I craft scalable web applications using Laravel and modern JS frameworks.
      With over <InlineCode>5 years of experience</InlineCode>, I've helped
      startups ship products fast and efficiently. Let's build something
      impactful.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: false,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm a Full Stack Developer with 5+ years of experience building web
        applications for startups and businesses. My core stack includes
        Laravel, Inertia.js (React/Vue), MongoDB, and modern UI libraries like
        TailwindCSS and shadcn/ui.
        <br />
        <br />
        I've led development teams, co-founded tech companies, and contributed
        to open-source projects used by hundreds of developers. Whether you're
        looking to launch an MVP, automate your business processes, or scale a
        SaaS product—I can help you get there.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Web Comet Systems & Spectivis",
        timeframe: "2023 - Present",
        role: "Full Stack Developer",
        achievements: [
          <>Part-time development and consulting for multiple projects.</>,
          <>Developed a web application for a easy on page SEO optimization.</>,
          <>Made a web application for 3D printing using Laravel and React.</>,
        ],
        images: [
          {
            src: "/images/projects/spectivis/spectivis.png",
            alt: "Project image",
            width: 22,
            height: 12.4,
          },
        ],
      },
      {
        company: "Xentain Solutions",
        timeframe: "2023 - 2025",
        role: "Co-Founder & COO",
        achievements: [
          <>Co-founded a hosting platform serving 1200+ global clients.</>,
          <>Market positioning and business development.</>,
        ],
        images: [
          {
            src: "/images/projects/xentain/xentain.png",
            alt: "Project image",
            width: 22,
            height: 12.4,
          },
        ],
      },

      {
        company: "Next Array",
        timeframe: "2022",
        role: "Full Stack Developer",
        achievements: [<>Part-Time Full Stack Developer role</>],
        images: [],
      },
      {
        company: "VelocityNode (Ghosty)",
        timeframe: "2020 - 2022",
        role: "Founder & CEO",
        achievements: [
          <>Launched a game server hosting company</>,
          <>Successfully served 700+ clients and 2000+ servers</>,
        ],
        images: [],
      },
      {
        company: "MysticNodes",
        timeframe: "2019 - 2020",
        role: "CTO",
        achievements: [
          <>Built the dashboard that scaled to over 4000 active users</>,
          <>Created a rest API for the dashboard using PHP</>,
          <>Marketing and business development for the company</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Birla Institute of Technology And Science",
        description: (
          <>
            Studied computer science and engineering. It is an undergraduate
            program.
          </>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",

    skills: [
      {
        title: "Primary Stack",
        description: (
          <>
            Specialized in{" "}
            <InlineCode> Laravel, Inertia.js (React/Vue), MongoDB</InlineCode>,
            and modern UI libraries like{" "}
            <InlineCode>TailwindCSS and shadcn/ui</InlineCode> for building
            full-stack web applications.
          </>
        ),
        images: [
          {
            src: "/images/tech/primary-stack.png",
            alt: "Primary tech stack visualization",
            width: 22,
            height: 4.4,
          },
        ],
      },
      {
        title: "Frontend Development",
        description: (
          <>
            Proficient in modern frontend technologies including JavaScript,
            TypeScript, React, Vue.js, Next.js, TailwindCSS, Bootstrap, Vite,
            Electron, Webpack, and Sass.
          </>
        ),
        images: [],
      },
      {
        title: "Backend Development",
        description: (
          <>
            Expert in server-side development with Laravel, PHP, Node.js,
            Express, Python, FastAPI, and Django.
          </>
        ),
        images: [],
      },
      {
        title: "AI & Machine Learning",
        description: (
          <>
            Experience with AI technologies including OpenAI, CrewAI, LangChain,
            TensorFlow, PyTorch, and Scikit Learn.
          </>
        ),
        images: [],
      },
      {
        title: "Databases & DevOps",
        description: (
          <>
            Skilled in database management and DevOps using MongoDB, MySQL,
            PostgreSQL, Redis, Docker, Nginx, and AWS.
          </>
        ),
        images: [],
      },
      {
        title: "Development Tools",
        description: (
          <>
            Proficient with Git, GitHub Actions, VS Code, Postman, Figma, and
            Linux for efficient development workflows.
          </>
        ),
        images: [],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `A collection of projects ${person.name} has worked on, including web applications, mobile apps, and more.`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  images: [
    {
      src: "/images/projects/spectivis/spectivis.png",
      alt: "Spectivis",
    },
    // ... more images
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
