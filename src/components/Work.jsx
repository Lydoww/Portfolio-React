import WorkItem from "./WorkItem";
import FadeInSection from "./FadeInSection";

const data = [
  {
    year: 2025,
    title: "Full Stack Developer - WallPit",
    duration: "5 months",
    details: [
      "Full Stack Developer at WallPit, a strategy game inspired by chess with unique mechanics. Developed using a microservices architecture with React, Node.js, and MongoDB.",
      {
        project: "Beta Access",
        description: "Try the private beta version",
        url: "https://client-beta.up.railway.app/",
      },
      {
        project: "Discord Community",
        description:
          "To test the game you'll need to join the Discord server in order to receive your login details",
        url: "https://discord.gg/S6TphCguqV",
      },
    ],
  },
  {
    year: 2024,
    title: "Full Stack Developer - Freelance",
    duration: "14 months",
    details: [
      "Freelance Full Stack Developer working on diverse web applications for various clients. Key projects include:",
      {
        project: "Naiart",
        description:
          "Developed an application for Shopify resellers using Next.js and Prisma to automate abandoned cart reminders and marketing campaigns",
        url: "https://naiart.fr/",
      },
      {
        project: "Makara",
        description: "Participated in the redesign and development of a social media management application for merchants, migrating the backend from PHP to Symfony and the frontend to React.js.",
      },
      {
        project: "Homonoia",
        description: "create a sleek and responsive interface to monitor key metrics such as expenses, customers, and purchases. Built with React, the dashboard leverages Recharts for dynamic data visualization, offering real-time insights with interactive charts for efficient analytics",
        url: "https://stratoboard.netlify.app/",
      },
    ],
  },
  {
    year: 2021,
    title: "Senior Account Manager - Sennder",
    duration: "2.5 year",
    details:
      "I ensure operational excellence for major accounts, including Nestlé, Ecosystèmes, and Decathlon. This involves producing weekly performance reports and optimizing operational processes in collaboration with Carrier Managers. Additionally, I autonomously manage smaller client accounts.",
  },
];
const Work = () => {
  return (
    <FadeInSection>
      <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
        <h1 className="text-4xl font-bold text-center text-[#001b5e] mb-7">
          Work
        </h1>
        {data.map((item, index) => (
          <WorkItem
            key={index}
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
          />
        ))}
      </div>
    </FadeInSection>
  );
};

export default Work;
