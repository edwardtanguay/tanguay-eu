# Next.js Site with Menu and useContext

This is a simple Next.js site that has Typescript, Sass and Tailwind installed. It uses the new Next.js 13 app folder and so the files and folders in the app folder are automatically URL routes, i.e. no need for React Router. It also has useContext implemented with an example of loading both static and API data in useContext and using these state variables on two separate pages. It has an image that is loaded from `public/images` and has a custom 404 page. I deployed it at both Vercel and Netlify choosing all default choices.

![grafik](https://starters.tanguay.eu/images/starters/blankViteDarkMenuUsecontextNextjs.png)

## features

- built with **create-next-app**
- uses the new **Next.js 13 app folder** and so has automatic URL routing
- **TypeScript** and **ES6 modules**
- a mixture of **Tailwind** and **Sass**, they work nicely together, for each styling task you can choose whichever you want
- custom 404 page
- **useContext** is implemented
- uses Next.js's server-side-rendering and so has **good SEO** and you can make **custom social-media previews** with title, description and image for each page
- fetches data from an **external API via axios**
- **displays image** which is located in the `public/images` directory and accessed with the <img> tag
- deploys at **Vercel** and **Netlify** by default

## install

- go to your projects directory
  - e.g. `cd ~/projects`
- in your projects directory, create your new site e.g. **site001** by cloning this project 
  - `git clone git@github.com:edwardtanguay/et001-nextjs-usecontext.git site001`
- open your newly created site in VSCode
  - `code site001`
- inside VSCode, open the VSCode terminal
  - **CTRL-`**
- delete the connection to this repository by deleting the Git repository
  - `rm -rf .git`
- create a new local Git repository
  - `git init -b main`
- install node_modules
  - `npm i`
- start your site and click given link to view website
  - `npm run dev`

## more starters, templates and frameworks 

https://starters.tanguay.eu
