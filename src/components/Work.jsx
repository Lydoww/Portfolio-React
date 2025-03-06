import React from "react";
import WorkItem from "./WorkItem";
import FadeInSection from "./FadeInSection";

const data = [
  {
    year: 2020,
    title: "Junior Project Manager - SLB",
    duration: "1 year",
    details:
      "As part of the TUC project objectives, I provide operational support, which includes managing both internal and external relationships, such as those with social media platforms and key account partners. I am also involved in researching ways to optimize KPIs and in implementing ISO 9001 standards.",
  },
  {
    year: 2020,
    title: "Project Consultant Freelance - Homonoia Paris",
    duration: "3 years",
    details:
      "I focus on the ethical optimization of the supply chain, assessing client needs, and developing strategic recommendations. Additionally, I ensure that deadlines and budgets are met.",
  },
  {
    year: 2021,
    title: "Senior Account Manager - Sennder",
    duration: "2.5 year",
    details:
      "I ensure operational excellence for major accounts, including Nestlé, Ecosystèmes, and Decathlon. This involves producing weekly performance reports and optimizing operational processes in collaboration with Carrier Managers. Additionally, I autonomously manage smaller client accounts.",
  },
  {
    year: 2023,
    title: "Web Developer",
    duration: "1 year",
    details:
      "I recently completed a web developer bootcamp, where I gained hands-on experience in coding and web development. During this time, I also worked on several personal projects, which helped me to apply my new skills and deepen my understanding of various development tools and methodologies.",
  },
  {
    year: 2024,
    title: "Full Stack Developer - Fixed-Term Contract - Makara",
    duration: "3 months",
    details:
      "Contributed to the complete redesign and development of an innovative web and mobile application for merchants, enabling them to centralize and manage their social media posts. We worked on the entire stack, migrating the backend from PHP to Symfony and the frontend to React.js.",
  },
  {
    year: 2024,
    title: "Full Stack Developer - Fixed-Term Contract - Naiart",
    duration: "5 months",
    details:
      "I am involved in developing an application for Shopify resellers, created from scratch by a team of two using Next.js and Prisma, aimed at automating abandoned cart reminders and marketing campaigns.",
  },
  {
    year: 2024,
    title: "Co-founder - Full Stack Developer - WallPit",
    duration: "3 months",
    details:
      "Co-founder and full-stack developer at WallPit, a strategy game inspired by chess with unique mechanics. Developed using a microservices architecture with React, Node.js, and MongoDB, this collaborative project aims to deliver a competitive and innovative gaming experience.",
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
