# Carto Assignment

Project built with create-react-app for visualizing 3 layers from CARTO:
- `carto-demo-data.demo_tables.airports`
- `carto-demo-data.demo_tables.retail_stores`
- `carto-demo-data.demo_tilesets.sociodemographics_usa_blockgroup`

# How to use

## Map Setup

- Create a map inside carto builder.
- Add all 3 sources.
- Give a name to the new map so it can be shared
- Share the map and configure it as public, then copy the new token and set it as the environment variable `REACT_APP_PUBLIC_MAP_TOKEN`.
- Set the env variable `REACT_APP_PUBLIC_API_BASE_URL` as your developer carto API base URL

## Start

- Start with `npm run start`,
- Deploy with `npm run deploy`, configured for github pages

# Explanation

The architecture of the project is meant to be scalable, so in "components" folder is a structure with the directories "elements" and "modules" to differentiate between shared/visual/presentational components with punctual components of a certain module. This wasn't needed for the size of the assignment, but I made it this way to show how to build scalable projects. 
The project is using redux-toolkit so the state can be shared between the map and the controls easily. I choose this particular library because of the easy setup and simplicity.
I used Material UI v5 for building the visual components, but the styling is very simple because it wasn't the focus of the assignment.
I couldn't implement the token POST form the "carto-api" as was asked because I had problems with the docs, but I kept the implementations of the fetch function so it can be seen how I would do it. Now is using a non-expiring token as an environment value

# Place to improve
- As it wasn't a UI test, I didn't make it responsive for mobile, so it should be taken as a desktop-only page, and with some use of MaterialUI, I should adapt it for mobile.
- The map layer constructors could be taken outside the map component for better implementation.
- Credentials and map initial view state can be incorporated inside the store.# Explinations
