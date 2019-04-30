Description:
Collaborator is a vision for a tool to find open projects with open opportunities
and reach out to the project leaders to collaborate.

Back end link:
https://github.com/tsosvielle/Full-Stack-Project-Back-End

Project planning:
The original project was far too wide in scope (see future iteration plans below)
this posed an immediate problem since we had only four in office days to complete
the project. The first task was to scope down V1 to bare essentials to provide
a mvp experience. This consisted of a functional api, functional front end, and
a single set of tables with a one to many relationship.

For the schedule the back end was the first priority most specifically api.
Using scaffolding serializers, models, and controllers were generated for
both user objects and projects.

Next api calls and test curl scripts were added for both objects to ensure that
we had functionality to create projects and users.

From here I needed to add a clean presentation and interactive element to the
program to make sure it was easily usable. The core functionality is a series
of buttons with show/hide events attached for each action ensuring that the user
only ever sees the bare minimum amount of interface.

Finally in order to ensure all projects could be displayed in a clean and
consistent way boot strap was utilized to popualte projects with an if statement
for ownership that ensured only owned projects displayed update and delete buttons.

The last piece to be added before the scheduled release date was modals for
updating projects rather than slamming down a form in the middle of the page.

V1 Functioanlity:
Users can post new projects with title, date, project owner
contact email, and description. Anyone can view all open projects. Project
owners and project owners only can update or delete projects.

Front end features:
Using bootstrap all projects are populated to the page when clicking the view
projects button. Projects can be cleared with the clear projects button. If
an entry belongs to the current user a delete or update button will appear
that can handle those features. Choosing update opens project change fields in
a new modal. Signin/up/out and account creation functionality is all available.

User Stories:
https://github.com/tsosvielle/Full-Stack-Project-Front-End/blob/master/userstories.md

Wireframe and ERD:
https://imgur.com/a/qbSPGj3

Technologies Used:
html
css
javascript
api created with rails
boootstrap
handlebars

Unsolved problems:
Future iterations need a search feature
Individual projects should be openable in modals to be viewed alone
Projects need to be displayed in a grid format rather than linear

Vision and future plans:
Collaborator is a tool that seeks to simplify the process of creating like minded
professionals to contribute to projects together in any industry. Traditionally
finding passion project can be an extremely uphill endeavor as without funding,
contributors, venues, prohect management tools, and every other ancillary
prerequisite you tend to find youself at the mercy of what well funded companies
are focusing on. The idea is to make putting together projects and teams in the
hands of the everyman, easily post projects and recruit or easily browse and
apply to contribute to projects that speak to you.

Collaborator allows individual collaborators to upload their portfolios, resumes
and relevant tags with their expertise to make themselves searchable and easily
recruited to projects.

Project leads can create team staff requirements, fill pre-determined team slots
review resumes, send requests for collaboration, and faciliate communication.

Individual account types and hubs for collaborators, project leads, business
suppliers and venture capitalists

Functionality to flag the industry your project is in and the industry you
collaborate within

A centralized project visualization hub that shows the filled slots on a team,
the milestones they are working toward, their progress, their salary/reimbursement,
the space being used to work on the project (if necessary), the level of funding
the project currently has/needs, documentation management (legal, financial),
visualization for project creative documentation, team assignment setting, and
team appointment/meeting setting and finally equipment has/wants/needs.

Drag and drop functionality to confirm and place elements of a project as cards
to indicate and easily pull up project elements. If you want to recruit someone
simply drag their card onto the appropriate team slot, a message box prompt will
appear with an email for you to fill out and a space will temporarily be held
on that slot, if they accept the opportunity to collaborate the card slot will
be filled in, this will also apply to space locations, investors etc.

Search venture capitalists who match the category of your project and seamlessly
submit proposals directly to them

A hub for venture capitalists to anonymously browse projects looking for funding
and reach out if interested.

A hub for suppliers (working spaces, equipment etc.) to post their prices prices
availability and inventory

Functionality to browse suppliers with filters for elements like price, sq feet,
capabilities, etc.

Financial visualization and management, how is your budget being applied and
how does this extend you?

Milestone visualization and management how is your team progressing to overall
goals, metrically who is hitting target and not?

Project deployment, a hub to ensure all your legal ducks are in a row before
going live for profit with a project. Legal staff recruited? Business model
legal elements properly submitted? e.g. 501c3 status. Financial reporting
documentation complete? Again this would have a visual hub.

Tiered collaborator access to project portals.
