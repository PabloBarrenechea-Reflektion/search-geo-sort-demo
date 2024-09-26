# Search SDK GEO Sorting example

This repository has an example implementation of a Search results widget with a GEO sorting option configured.
It shows 2 input fields on the main page to change the coordinates and updating widget content by setting the Geo Location Context.
## Prerequisites

### Node.js
To run the project a Node.js installation is needed. to build the project. We recommend using the LTS version of Node.js. You can find it [here](https://nodejs.org/en/).

### Environment variables
The project needs some environment variables to work.
You can get the values for them in the Developers resources section of Customer Engagement Console (CEC). 
For full functionality, create a .env file in the root of the project and add the following environment variables.

The following variables should exist within the .env file:

VITE_SEARCH_CUSTOMER_KEY=<customer key>
VITE_SEARCH_API_KEY=<API key provided in CEC>


## Commands

- Running the project: On a terminal, execute `npm run dev`
- Building the project: On a terminal, execute `npm run build`
