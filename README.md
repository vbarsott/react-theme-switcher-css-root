# React Theme Switcher CSS Root

## Link to the project

https://vbarsott.github.io/react-theme-switcher-css-root/

## Package starter

- Install react: `npx create-react-app project-name`
- Run: `npm start`
- Clean up extra files
- Include information on .gitignore (ex: exclude docs folder)

### Styling

- Install sass: `npm i sass`
- Create directories inside src folder:
  - styles
    - css
    - scss
- Include script on package.json:
  `"scripts": { "sass": "sass src/styles/scss:src/styles/css --watch --no-source-map" }`
- Import inside App.js: `import './styles/css/styles.css';`
- Run sass: `npm run sass`

## Setup to run all together:

- Stop sass (if running)
- Install: `npm i concurrently`
- Include script on package.json (DON'T DELETE WHAT WAS INSTALLED BEFORE):
  `"scripts": { "dev": "concurrently --kill-others \"npm start\" \"npm run sass\"" }`
- Run dev: `npm run dev`
