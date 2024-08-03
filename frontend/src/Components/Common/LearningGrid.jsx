import React from 'react';
import HighlightText from '../Homepage/HighlightText';
import CTAButton from "../Homepage/CTAButton";

const LearningGridArray = [
  {
    order: -1,
    heading: "Empowering Volunteering for",
    highlightText: "Everyone, Everywhere",
    description:
      "Feed Forward collaborates with numerous local organizations and community groups to offer flexible, accessible, and impactful volunteering opportunities worldwide.",
    BtnText: "Learn More",
    BtnLink: "/",
  },
  {
    order: 1,
    heading: "Initiatives Aligned with Community Needs",
    description:
      "Make a difference effectively! Feed Forward's programs are designed to address critical community issues and provide support where it's needed most.",
  },
  {
    order: 2,
    heading: "Our Volunteer Approach",
    description:
      "Feed Forward partners with a wide range of organizations to offer volunteering experiences that match your interests and skills.",
  },
  {
    order: 3,
    heading: "Certification and Recognition",
    description:
      "Feed Forward provides certification for volunteers, acknowledging your contributions and skills gained through our programs.",
  },
  {
    order: 4,
    heading: "Impact Tracking",
    description:
      "Keep track of the impact you're making. Feed Forward ensures transparency and provides detailed reports on the results of our initiatives.",
  },
  {
    order: 5,
    heading: "Building Stronger Communities",
    description:
      "Feed Forward is dedicated to strengthening communities by providing resources and support, promoting sustainability and long-term growth.",
  },
];

const LearningGrid = () => {
  return (
    <div className="container mx-auto p-8 grid grid-cols-1 lg:grid-cols-4 gap-6 bg-richblack-700">
      {LearningGridArray.map((card, index) => (
        <div
          key={index}
          className={`p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105
          ${index === 0 && "lg:col-span-2 bg-gradient-to-r from-blue-500 to-caribbeangreen-500"}
          ${index % 2 === 0 ? "bg-gradient-to-r from-caribbeangreen-500 to-blue-500" : "bg-gradient-to-r from-yellow-400 to-red-500"}
          ${card.order === 3 && "lg:col-start-2"}
          `}
        >
          {card.order < 0 ? (
            <div className="flex flex-col gap-4 text-white">
              <h2 className="text-2xl font-bold">
                {card.heading}
                <HighlightText text={card.highlightText} />
              </h2>
              <p className="text-lg">{card.description}</p>
              <CTAButton active={true} linkto={card.BtnLink}>
                {card.BtnText}
              </CTAButton>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              <h2 className="text-xl font-semibold text-white">
                {card.heading}
              </h2>
              <p className="text-white">{card.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default LearningGrid;
