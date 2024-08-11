# corm-repository
 React MERN Portfolio Site with Tailwind 
 https://corm-repository.onrender.com/

## It's hosted as a free site on Render so it may be asleep.  Please keep that in mind when it fist loads.  


# About
This site was created soon after I completed my coding bootcamp, and was one of my first efforts at using Tailwind, and my first large MERN site.  Please forgive the random notes here and there- I'm still working on making the site better as I learn more.  I learned some surprising lessons about routing, and about general structure, that will inform my future efforts.  

## About the Idea for a Citation Repository
This project began as a way for me to explore/learn the MERN stack by creating a useful app that should help users save citations in a way that encourages use/reuse. 
The internet is full of useful and unique images, but it is often difficult to know whether they can be reproduced legally.  A repository like this one serves as a curated list to gather clearly licensed images that have been used before, and promise to be useful again.  

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts
In the project directory, (terminal) corm-repository scotcorm$ you can run:
### `npm run dev`
Runs nodemon and connects Mongo DB

in second open terminal 
### cd client then
### `npm run dev`
Runs VITE v5.2.11 on Local host to view it in browser.


# Structure
 
```
├── src
│   ├── api
│   │   ├── controllers
│   │   │   ├──auth.controller.js
│   │   │   ├──citation.controller.js
│   │   │   ├──comment.controller.js
│   │   │   ├──genealogyrecord.controller.js
│   │   │   ├──genealogyrecordcomment.controller.js
│   │   │   ├──note.controller.js
│   │   │   ├──notecomment.controller.js
│   │   │   ├──project.controller.js
│   │   │   ├──projectcomment.controller.js
│   │   │   ├──record.controller.js
│   │   │   ├──recordcomment.controller.js
│   │   │   └── user.controller.js
│   │   ├── models
│   │   │   ├──citation.model.js
│   │   │   ├──comment.model.js
│   │   │   ├──genealogyrecord.model.js
│   │   │   ├──genealogyrecordcomment.model.js
│   │   │   ├──note.model.js
│   │   │   ├──notecomment.model.js
│   │   │   ├──project.model.js
│   │   │   ├──projectcomment.model.js
│   │   │   ├──record.model.js
│   │   │   ├──recordcomment.model.js
│   │   │   └── user.model.js
│   │   ├── routes
│   │   │   ├──auth.route.js
│   │   │   ├──citation.route.js
│   │   │   ├──comment.route.js
│   │   │   ├──genealogyrecord.route.js
│   │   │   ├──genealogyrecordcomment.route.js
│   │   │   ├──note.route.js
│   │   │   ├──notecomment.route.js
│   │   │   ├──project.route.js
│   │   │   ├──projectcomment.route.js
│   │   │   ├──record.route.js
│   │   │   ├──recordcomment.route.js
│   │   │   └── user.route.js
│   │   ├── utils
│   │   │   ├──error.js
│   │   │   └── verifyUser.js
│   │   └── index.js
│   ├── client
│   │   ├── node_modules
│   │   │   └── npm add node modules
│   │   ├── public
│   │   │   └── favicon.png
│   │   ├── src
│   │   │   ├──assets
│   │   │   │   └──images
│   │   │   │   │   ├──corm.png
│   │   │   │   │   ├──image600x.png
│   │   │   │   │   └──NMNH-03826631_screen.jpg
│   │   │   ├──components
│   │   │   │   ├──AboutMain.jsx
│   │   │   │   ├──AboutSidebar.jsx
│   │   │   │   ├──AverageBarProduction.jsx
│   │   │   │   ├──AverageCohort.jsx
│   │   │   │   ├──AverageCompleted.jsx
│   │   │   │   ├──AvgCohort.jsx
│   │   │   │   ├──BarData.jsx
│   │   │   │   ├──CallToAction.jsx
│   │   │   │   ├──CallToActionAbout.jsx
│   │   │   │   ├──CallToActionProjects.jsx
│   │   │   │   ├──CCMain.jsx
│   │   │   │   ├──CCSidebar.jsx
│   │   │   │   ├──CitationCard.jsx
│   │   │   │   ├──CitationMain.jsx
│   │   │   │   ├──CitationSidebar.jsx
│   │   │   │   ├──Comment.jsx
│   │   │   │   ├──CommentSection.jsx
│   │   │   │   ├──Dash2022.jsx
│   │   │   │   ├──Dash2023.jsx
│   │   │   │   ├──Dash2024.jsx
│   │   │   │   ├──DashboardComponent.jsx
│   │   │   │   ├──DashCitationComments.jsx
│   │   │   │   ├──DashCitations.jsx
│   │   │   │   ├──DashCumulative.jsx
│   │   │   │   ├──DashGenealogyRecordComments.jsx
│   │   │   │   ├──DashGenealogyRecords.jsx
│   │   │   │   ├──DashNoteComments.jsx
│   │   │   │   ├──DashNotes.jsx
│   │   │   │   ├──DashProfile.jsx
│   │   │   │   ├──DashProjectComments.jsx
│   │   │   │   ├──DashProjects.jsx
│   │   │   │   ├──DashRecordComments.jsx
│   │   │   │   ├──DashRecords.jsx
│   │   │   │   ├──DashSection1.jsx
│   │   │   │   ├──DashSidebar.jsx
│   │   │   │   ├──DashUsers.jsx
│   │   │   │   ├──FeralPigCommentSection.jsx
│   │   │   │   ├──Footer.jsx
│   │   │   │   ├──GenealogyMain.jsx
│   │   │   │   ├──GenealogyrecordCard.jsx
│   │   │   │   ├──GenealogyrecordComment.jsx
│   │   │   │   ├──GenealogyrecordCommentSection.jsx
│   │   │   │   ├──Header.jsx
│   │   │   │   ├──Hero.jsx
│   │   │   │   ├──HomeHeadlineCards.jsx
│   │   │   │   ├──NoteCard.jsx
│   │   │   │   ├──NoteComment.jsx
│   │   │   │   ├──NoteCommentSection.jsx
│   │   │   │   ├──NoteSection.jsx
│   │   │   │   ├──OAuth.jsx
│   │   │   │   ├──OnlyAdminPrivateRoute.jsx
│   │   │   │   ├──PrivateRoute.jsx
│   │   │   │   ├──Production2022BarChart.jsx
│   │   │   │   ├──Production2022Card.jsx
│   │   │   │   ├──Production2022CardR.jsx
│   │   │   │   ├──Production2022LeftColumn.jsx
│   │   │   │   ├──Production2022QACard.jsx
│   │   │   │   ├──Production2022RightColumn.jsx
│   │   │   │   ├──Production2022Table.jsx
│   │   │   │   ├──Production2023BarChart.jsx
│   │   │   │   ├──Production2023Card.jsx
│   │   │   │   ├──Production2023CardR.jsx
│   │   │   │   ├──Production2023LeftColumn.jsx
│   │   │   │   ├──Production2023QACard.jsx
│   │   │   │   ├──Production2023RightColumn.jsx
│   │   │   │   ├──Production2023Table.jsx
│   │   │   │   ├──Production2024BarChart.jsx
│   │   │   │   ├──Production2024Card.jsx
│   │   │   │   ├──Production2024CardR.jsx
│   │   │   │   ├──Production2024LeftColumn.jsx
│   │   │   │   ├──Production2024QACard.jsx
│   │   │   │   ├──Production2024RightColumn.jsx
│   │   │   │   ├──Production2024Table.jsx
│   │   │   │   ├──ProductionBarChart.jsx
│   │   │   │   ├──ProductionCard.jsx
│   │   │   │   ├──ProductionCard2023.jsx
│   │   │   │   ├──ProductionCardR.jsx
│   │   │   │   ├──ProductionDashNavbar.jsx
│   │   │   │   ├──ProductionDataSidebar.jsx
│   │   │   │   ├──ProductionLeftColumn.jsx
│   │   │   │   ├──ProductionNavbar.jsx
│   │   │   │   ├──ProductionProfile.jsx
│   │   │   │   ├──ProductionQACard.jsx
│   │   │   │   ├──ProductionRightColumn.jsx
│   │   │   │   ├──ProductionTable.jsx
│   │   │   │   ├──ProjectCard.jsx
│   │   │   │   ├──ProjectComment.jsx
│   │   │   │   ├──ProjectCommentSection.jsx
│   │   │   │   ├──ProjectSection.jsx
│   │   │   │   ├──ProjectsMain.jsx
│   │   │   │   ├──ProjectsSection.jsx
│   │   │   │   ├──ProjectsSidebar.jsx
│   │   │   │   ├──RecordCard.jsx
│   │   │   │   ├──RecordChart.jsx
│   │   │   │   ├──RecordComment.jsx
│   │   │   │   ├──RecordCommentSection.jsx
│   │   │   │   ├──RecordTable.jsx
│   │   │   │   ├──ScrollToTop.jsx
│   │   │   │   └──ThemeProvider.jsx
│   │   │   ├──pages
│   │   │   │   ├──About.jsx
│   │   │   │   ├──CcCert.jsx
│   │   │   │   ├──CitationPage.jsx
│   │   │   │   ├──CitationRepo.jsx
│   │   │   │   ├──CreateCitation.jsx
│   │   │   │   ├──CreateGenealogyRecord.jsx
│   │   │   │   ├──CreateNote.jsx
│   │   │   │   ├──CreateProject.jsx
│   │   │   │   ├──CreateRecord.jsx
│   │   │   │   ├──Dashboard.jsx
│   │   │   │   ├──DeleteRecord.jsx
│   │   │   │   ├──DigitalMusic.jsx
│   │   │   │   ├──EditRecord.jsx
│   │   │   │   ├──FeralSwine.jsx
│   │   │   │   ├──Genealogy.jsx
│   │   │   │   ├──GenealogyRecordPage.jsx
│   │   │   │   ├──Home.jsx
│   │   │   │   ├──NotePage.jsx
│   │   │   │   ├──Notes.jsx
│   │   │   │   ├──Privacy.jsx
│   │   │   │   ├──ProductionDashboard.jsx
│   │   │   │   ├──ProjectPage.jsx
│   │   │   │   ├──Projects.jsx
│   │   │   │   ├──RecordPage.jsx
│   │   │   │   ├──Search.jsx
│   │   │   │   ├──SearGenealogyrecords.jsx
│   │   │   │   ├──SearchNotes.jsx
│   │   │   │   ├──SearchProjects.jsx
│   │   │   │   ├──ShowRecord.jsx
│   │   │   │   ├──SignIn.jsx
│   │   │   │   ├──SignUp.jsx
│   │   │   │   ├──TermsConditions.jsx
│   │   │   │   ├──UpdateCitation.jsx
│   │   │   │   ├──UpdateGenealogyRecord.jsx
│   │   │   │   ├──UpdateNote.jsx
│   │   │   │   ├──UpdateProject.jsx
│   │   │   │   └──UpdateRecord.jsx
│   │   │   ├──redux
│   │   │   │   ├──theme
│   │   │   │   │   └──themeSlice.js
│   │   │   │   ├──user
│   │   │   │   │   └──userSlice.js
│   │   │   │   └──store.js
│   │   │   ├──App.jsx
│   │   │   ├──firebase.js
│   │   │   ├──index.css
│   │   │   └──main.jsx
│   │   ├── .env
│   │   ├── .eslintrc.cjs
│   │   ├── index.html
│   │   ├── package-lock.json
│   │   ├── package.json
│   │   ├── postcss.config.js
│   │   ├── README.md
│   │   ├── tailwind.config.js
│   │   └── vite.config.js
│   ├── node_modules
│   ├── .env
│   ├── .gitignore
│   ├── favicon.png
│   ├──packagelock.json
│   └──package.json


 

```
