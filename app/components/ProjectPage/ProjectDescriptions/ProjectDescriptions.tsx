import React from 'react';
import ProjectSection from './ProjectSectionComponent';

export const OpenLib: React.FC = () => {
  return (
    <ProjectSection
      title="Internet Archive's Open Library"
      descriptionSubtitle="What is Open Library?"
      contributionSubtitle="Contributions:"
      description="Open Library is a collaborative open-source initiative for a universal catalog for book metadata. The goal is to create a web page for every book ever published. Anyone can contribute to the Open Library catalog."
      contribution="I contribute to the project as a volunteer developer. In collaboration with other contributors, I work on issues presented on GitHub. Recently, I redesigned and implemented a sort options dropdown menu under the search page."
      projectLink="https://openlibrary.org"
      repoLink="https://github.com/aarasawa/openlibrary" 
    />
  );
};

export const AgriGuard: React.FC = () => {
  return (
    <ProjectSection
      title="AgriGuard Insight"
      descriptionSubtitle="Concept"
      contributionSubtitle="Purpose"
      description="AgriGuard Insight is a project submitted to the Gemini API development competition hosted by Google. The contest surrounds creating a project with Gemini Generative AI as the driving piece for creating a new idea or project concept."
      contribution="This project is still under development. The purpose is to use Gemini API to analyze datasets for pesticide applications to alert the general populace about where and when common pesticides are going to be applied in California."
      projectLink="https://google.com"
      repoLink="https://github.com/aarasawa/agriguard-insight"
    />
  );
};

export const PhotoFilm: React.FC = () => {
  return (
    <ProjectSection
      title="PhotoFilm.dev"
      descriptionSubtitle="Purpose"
      contributionSubtitle="Opinion on Wix Studio"
      description="An entry to the Wix Studio development contest on dev.to for creating a concept e-commerce platform, highlighting accessibilty, ingenuity, and utilizing Wix APIs and components."
      contribution="The website is not a fully-functioning due to some features locked behind a subscription paywall. However, I think that the tools that Wix provides are markedly more sophisticated than they were when I had used it before."
      projectLink="https://aarasawa7.wixstudio.io/photofilm"
      repoLink="https://github.com/aarasawa/wix-studio-challenge"
    />
  );
};

export const AgriTag: React.FC = () => {
  return (
    <ProjectSection
      title="AgriTag"
      descriptionSubtitle="Purpose"
      contributionSubtitle="Goals"
      description="Entry into the AWS Amplify Gen 2 development competition. The purpose was to use AWS Amplify Gen 2 workflows and processes to create a typescript application. I chose this concept because after completing my senior design project a professor asked if our endpoints were public. I thought it would be beneficial for the public to have access to it."
      contribution="Create a public database for historical pesticide data displayed on a map of California. Users can query between a range of dates to see hotspots. This project is still under development."
      projectLink="https://main.d2rw2a2tboa74s.amplifyapp.com/"
      repoLink="https://github.com/aarasawa/agritag"
    />
  );
};


export const PesticideNOI: React.FC = () => {
  return (
    <ProjectSection
      title="Pesticide Notification System"
      descriptionSubtitle="Purpose"
      contributionSubtitle="Results"
      description="A proof-of-concept project to present to the California Department of Pesticide Regulation (CDPR) in persuasion for the release of real-time pesticide information. Our focus was a particularly harmful set of pesticides known as Restricted Materials that require applicants to file a Notice of Intent (NOI) to apply.
                   Our system would track the CDPR database and notify users in real-time. We implemented over web, mobile, and a low-tech SMS text service."
      contribution="Although our presentation was unfruitful, CDPR has started to create pilot county pesticide systems."
      projectLink="https://pesticidenoi.netlify.app"
      repoLink="https://github.com/judyz01/pesticide-notification-system"
    />
  );
};

export const ProjectSwampfish: React.FC = () => {
  return (
    <ProjectSection
      title="Project SwampFish"
      descriptionSubtitle="Description"
      contributionSubtitle="Goals"
      description="A repository of my attempts at various excursions into learning and participating in cybersecurity events."
      contribution="No goals. For funsies. Always wanted to learn about hacking since I started using computers. May convert into a blog later."
      projectLink="#"
      repoLink="https://github.com/aarasawa/Project_SwampFish"
    />
  );
};