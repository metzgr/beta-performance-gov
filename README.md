# Beta.Performance.Gov

## About this Project
Beta.Performance.gov displays U.S. federal agencies two-year priority goals and their strategic objectives. Users are able to explore the U.S. strategic portfolio and discover opportunities that impact what the Federal government achieved for the American people.

## Built With
* ![Hugo Logo](https://d33wubrfki0l68.cloudfront.net/c38c7334cc3f23585738e40334284fddcaf03d5e/2e17c/images/hugo-logo-wide.svg) Format: ![Alt Text](url) 
* ![Tailwind Logo]()

## Setup
1. Install Hugo using [these instructions](https://gohugo.io/installation/)
2. Run `npm install npm@latest -g` to get dependencies to build the project
3. Run `npm install tailwindcss@latest` to install Tailwind
4. Run `hugo server` to build the site

## Structure
Click [here](https://gohugo.io/getting-started/) for the full Hugo documentation

* The `/layouts` directory in this project contains html templates.
    * The `/layouts/partials/goals.html` contains reusable html components for the "Discover" or "Goals" page. This file is injected into the `/layouts/index.html` template.

* The `/data` directory stores additional data that is used in the `/layouts/partials/goals.html` file when generating the site. This directory contains JSON files for Goals and Target data.

* The core project configuration is stored in the `config.toml` file. The data here is accessible from any template in the `/layouts` directory. Top-level data like the site name and the menu configuration is stored here.
