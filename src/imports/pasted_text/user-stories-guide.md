Skip to content
Join Now
Account Help
Member Portal
Log in
Agile Alliance Logo | PMI
Membership

Events
Agile Essentials


Resources


Community


About Us

Search








PMI Agile 2026 – Early Bird Registration
Agile Glossary
User Stories
What is User Stories?
In consultation with the customer or product owner, the team divides up the work to be done into functional increments called “user stories.”

Each user story is expected to yield, once implemented, a contribution to the value of the overall product, irrespective of the order of implementation; these and other assumptions as to the nature of user stories are captured by the INVEST formula.

To make these assumptions tangible, user stories are reified into a physical form: an index card or sticky note, on which a brief descriptive sentence is written to serve as a reminder of its value. This emphasizes the “atomic” nature of user stories and encourages direct physical manipulation: for instance, decisions about scheduling are made by physically moving around these “story cards.”

Common Pitfalls
a classic mistake consists, in teams where the Agile approach is confined to the development team or adopted after a non-Agile requirements phase, to start from a requirements document in narrative format and derive user stories directly based on its structure: for instance one story for each section of the document
as the 3 C’s model emphasizes, a user story is not a document; the term encompasses all of the knowledge required to transform version V of the product into version V’ which is more valuable with respect to a particular goal
the level of detail corresponding to a user story is not constant, it evolves over time as a function of the “planning horizon”; for instance, a user story that is scheduled for the next iteration should be better understood than one which will not be implemented until the next release
a user story is not a Use Case; although it is often useful to compare and contrast the two notions, they are not equivalent and do not admit a one-to-one mapping
a user story does not in general correspond to a technical or user interface component: even though it may sometimes be a useful shortcut to talk about e.g. “the search dialog story”, screens, dialog boxes, and buttons are not user stories
Expected Benefits
For most Agile teams user stories are the main vehicle of incremental software delivery, and offer the following benefits:

mitigating the risks of delayed feedback, all the more so
if the increments are small
if the software is released to production frequently
for the customer or product owner, the option to change their mind on the details or the scheduling priority of any user story not yet implemented
for developers, being given clear and precise acceptance criteria, and ongoing feedback as they complete work
promoting a clear separation of responsibilities between defining the “what” (province of the customer or product owner) and the “how” (province of the technical team), leveraging the skills and creativity of each
Potential Costs
Incremental development in general, and the “nano-incremental” strategy embodied in user stories in particular, have significant impacts on projects’ testing strategies, and in particular all but mandate significant test automation.

This follows from the so-called “quadratic growth” problem: after the implementation of feature F1 it is normal to test that feature. After the implementation of feature F2, the risk of regression dictates re-testing F1 as well as testing F2. A test sequence assuming incremental development therefore goes: F1,F1+F2,F1+F2+F3, etc. – this grows as the square of the number of features, and can therefore quickly become unmanageable as projects grow in size. Test automation (in a particular unit and acceptance testing) mitigates this effect, although it does come at a cost.

Origins
User Stories originate with Extreme Programming, their first written description in 1998 only claims that customers define project scope “with user stories, which are like use cases”. Rather than offered as a distinct practice, they are described as one of the “game pieces” used in the “planning game”.

However, most of the thrust of further writing centers around all the ways user stories are “unlike” use cases, in trying to answer in a more practical manner “how requirements are handled” in Extreme Programming (and more generally Agile) projects. This drives the emergence, over the years, of a more sophisticated account of user stories.

cf. the Role-feature-benefit template, 2001
cf. the 3 C’s model, 2001
cf. the INVEST checklist, 2003
cf. the Given-When-Then template, 2006
Signs Of Use
the team uses visual planning tools (release plan, story map, task board) and index cards or stickies on these displays to reflect product features
the labels on cards that stand for user stories contain few or no references to technical elements (“database”, “screen” or “dialog”) but generally refer to end users’ goals
Skill Levels
An Agile team will benefit if the skills that underpin the effective use of user stories are widely distributed among the team; however, it is likely that people with a background in “requirements analysis” or with a history in “analyst” roles will have a leg up in acquiring these skills.

As an individual contributor:

Beginner

able to start from another formalism for requirements (narrative document, use cases) and transpose that to user stores
knows at least one standard format for expressing user stories
able to illustrate a user story with an example (including the user’s goal, existing context, user’s actions, and expected outcomes)
Intermediate

able to divide up the functional goals of a development effort into user stories (possibly epics), ensuring no gaps are left
knows several formats for expressing user stories and can choose the most appropriate one
able to express the acceptance criteria for a user story in terms that will be directly usable as an automated acceptance test
knows or can identify the relevant user roles and populations and refers to them appropriately in user stories
can assess a user story using the INVEST checklist or an equivalent, and rephrase or split the user story as necessary
Advanced

able to interpret so-called “non-functional requirements” in terms of user stories
able to link user stories to higher-level descriptions of project goals (e.g. project charter) and to provide grounds for the relevance and business value of each user story
Collectively, as a team:

Beginner

the team organizes project activities around user stories
the team is able to obtain, “just in time”, the information necessary to implement user stories, for instance by having access to the product owner or domain expert
Intermediate

the team formalizes all activity as work on user stories, each team member can answer at any moment the question “what user story are you working on at the moment”
Advanced

at any moment, any member of the team can answer the question “what is the most important user story in the backlog, and why”
Further Reading
User Stories Applied, by Mike Cohn
Software By Numbers examines the economics of iterative software development
Academic Publications
“Agile requirements engineering practices: An empirical study” discusses an investigation of 16 software development organizations’ Agile requirements practices, and provides an overview of some previous literature on Agile requirements and user stories. (The study takes a mildly adversarial attitude to Agile and comes to somewhat strange conclusions, such as ranking test-driven development among requirements engineering practices.)
<  View all Glossary Terms  |  Provide feedback on this term

 
 
 
 
Thank you to our Annual Partners​
Gehtsoft - Agile Alliance Corporate Partner
BYOC - Lean Coffee
Join us today!
Agile Alliance offers many online and in-person events and workshops for our members. If you’re not currently a member, you can join now to take advantage of our many members-only resources and programs. LEARN MORE >

Meet the New ACP – sidebar
Get the latest Agile news!
Full Name
Email
By subscribing, you acknowledge the Agile Alliance Privacy Policy, and agree to receive our emails.

Additional Agile Glossary Terms
Continuous Deployment
Continuous deployment aims to reduce the time elapsed between writing a line of code and making that code available to users in production. To achieve continuous deployment, the team relies on infrastructure that automates and instruments the various steps leading up to deployment, so that after each integration successfully meeting these release criteria, the live application is updated with new code.
Read More >
Scrumban
Scrumban is a mixture of the Scrum Method and the Kanban Method.
Read More >
Three Questions
The daily meeting is structured around the following three questions: What have you completed? What will you do next? What is getting in your way?
Read More >
Iteration
An iteration is a timebox during which development takes place. The duration may vary from project to project and is usually fixed.
Read More >
Help us keep the definitions updated

Ready to join Agile Alliance?
Unlock members-only access to online learning sessions, Agile resources, annual conference discounts, and more! And when you join, you’ll be supporting our member initiatives, regional events, and global community groups.

Log in now
Learn more
Thank you to our Agile Alliance Strategic Partners
Agile Alliance is partnering with these organizations to promote the principles of the Agile Manifesto and the Manifesto for Enterprise Agility to a larger audience and deliver a wider range of resources and benefits to our members.

Lucid Software Partner
Agile Business Consortium Logo Footer
Gehtsoft Partner Footer Logo
Comparative Agility Partner Logo Footer
Enterprise Agility Network Partner Footer
Agile Community
Reimagining Agility
Community Groups
Community Events
Sponsored MeetUp Groups
Community Services
Member Initiatives
Volunteer Signup
Agile Essentials
Essentials Overview
Agile 101 – What is Agile?
Agile Glossary
Agile Manifesto
The 12 Principles
Introductory Videos
Short History of Agile
Agile Practices Timeline
Agile Practice Subway Map
Agile Resources
Resources Overview
Webinar + Event Videos
The Agile Blog
Agile Glossary
Experience Reports
Research Papers
Agile Games
Enterprise Agility
The Agile Practice Guide
Agile Bookstore
Agile Alliance Videos
Product/Service Providers
Global Affiliates
Agile Alliance Brazil
Agile Alliance New Zealand
Agile Events
Upcoming Agile Events
Community Events
Meetup Groups
Submit an Event
Global Events Calendars
Agile Training
Past Conferences
About Us
About the Alliance
Our Team
Board of Directors
Become a Sponsor
Logo Files
Submit a Blog Post
Newsletter Signup
Contact Us
Membership
Join Agile Alliance
Why Join?
Membership FAQ
Corporate Member Directory
Product/Service Providers
Account Assistance
Member Portal  
Member Log In
Policies + Principles
Code of Conduct
Policies, Reports & Bylaws
Financial Reports
Content Standards
Privacy Policy
Cookie Policy
Sign up for Agile News
Get the latest news and updates, including event announcements, special offers, discounts, and more by becoming a newsletter subscriber today. 

Sign Up Now
25 Years of Agile badge
©2026 Agile Alliance  |  Sponsorship  |  Privacy Policy

Linkedin-in
  Mastodon
 Facebook-f
 Instagram
 Tiktok
 Envelope

