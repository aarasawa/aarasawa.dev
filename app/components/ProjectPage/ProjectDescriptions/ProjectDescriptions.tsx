import React from 'react';
import ProjectSection from './ProjectSectionComponent';

export const OpenLib: React.FC = () => {
  return (
    <ProjectSection
      title="Internet Archive's Open Library"
      descriptionSubtitle="What is Open Library?"
      contributionSubtitle="Contributions:"
      description="Open Library is an initiative of the Internet Archive, a non-profit library of Internet sites and other cultural artifacts in digital form. This project specially has the mission of providing a universal catalog for book metadata online. The goal is to create a web page for every book ever published for any person to use. The Open Library is a collaborative open-source initiative for anyone to use and contribute to its catalog, with links to discover, borrow, and read from the Internet Archive's collections. "
      contribution="As a software developer contributing to the OpenLibrary project, I have successfully redesigned and implemented a dropdown menu for sorting search results, enhancing the user experience by providing more intuitive and efficient sorting options. This involved close collaboration with fellow developers, designers, and project leads to ensure seamless integration and alignment with the project's overall design principles. My role required a keen eye for detail and a proactive approach to problem-solving, contributing to a more user-friendly interface and improved functionality within the OpenLibrary platform."
      projectLink="https://openlibrary.org"
      repoLink="https://github.com/aarasawa/openlibrary" 
    />
  );
};

export const AgriGuard: React.FC = () => {
  return (
    <ProjectSection
      title="AgriGuard Insight"
      descriptionSubtitle="Purpose"
      contributionSubtitle="Project Description"
      description="AgriGuard Insight is a project submitted to the Gemini API development competition hosted by Google. Participants are challenged to harness the capabilities of Gemini Generative AI to create projects that address real-world problems and introduce novel concepts. This contest aims to encourage out-of-the-box thinking and utilize Gemini API to push the boundaries of what AI can achieve."
      contribution="AgriGuard Insight aims to analyze extensive datasets related to pesticide use, including application schedules, locations, and types of pesticides used. By processing this data, the project intends to generate real-time alerts to inform the general populace about where and when common pesticides will be applied. I created this project because it addresses a critical need for public health and safety, particularly for communities living near agricultural areas. Timely and accurate dissemination of pesticide application information can help residents take necessary precautions, thereby reducing potential exposure."
      projectLink="https://google.com"
      repoLink="https://github.com/aarasawa/agriguard-insight"
    />
  );
};

export const AgriTag: React.FC = () => {
  return (
    <ProjectSection
      title="AgriTag"
      descriptionSubtitle="Purpose"
      contributionSubtitle="Project Description"
      description="The AWS Amplify 2024 contest challenges developers to leverage the capabilities of Generation 2 AWS Amplify ecosystem for creating innovative applications. Participants are required to utilize AWS Amplify's workflows and processes, integrating its robust set of tools and services to build applications that demonstrate technical excellence and practical utility."
      contribution="Inspired by a college professor, I decided to implement a publicly accessible pesticide database user interface aimed at creating an application to democratize and promote access to this information. This project focuses on implementing public endpoints to share valuable data, allowing users to interact with decades of historical pesticide application data provided by the California Department of Pesticide Regulation."
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
      contributionSubtitle="Contributions"
      description="A proof-of-concept project to present to the California Department of Pesticide Regulation (CDPR) in persuasion for the release of real-time pesticide information. Our focus was a particularly harmful set of pesticides known as Restricted Materials that require applicants to file a Notice of Intent (NOI) to apply. Our system would track the CDPR database and notify users in real-time. Our application displays applications of Restricted Materials within a radius around a user's current location. It is available over web, mobile, and a low-tech SMS text service."
      contribution="My participation on the backend team: drafting system architecture mockups, implementing PSQL stored procedures for finding NOIs and NOI data near a given coordinate, investigating restricted products and product labels, and setting up a Google Cloud SQL database. Coding scripts and processing NOI data, implementing a REST API for finding information by location and county, adjusting query parameters to allow for filtering and sorting information on the frontend, and creating an endpoint for adding new NOIs to the database. Highlight application security by managing vulnerable information using Google Secret Manager. While on the mobile team: implement a settings screen on the mobile application, adding Spanish language functionality, and publishing the application to the App Store. "
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
      contributionSubtitle="Contents"
      description="A repository of my attempts at various excursions into learning and participating in cybersecurity events."
      contribution="I have always wanted to learn about hacking since I started using computers. These are artifacts and products of my participation in courses, Capture the Flag (CTF) competitions, and notes pertaining to cybersecurity."
      projectLink="#"
      repoLink="https://github.com/aarasawa/Project_SwampFish"
    />
  );
};