## Login App Screen

### Todo

- [x] Design login form in react .
- [x] Setup login api.
- [x] Add login form validation.
- [x] Used styled-component react library for LESS/SASS.
- [x] Used react-hooks-form for setup login form.
- [x] Pushed code to github.

### Bonus

- [x] Deployed app on heroku server.

## Tech Stack

### Frontend
- Reactjs
- typescript
- Styled-components
- react-hook-form
### Backend
- Node
- typescript
- express
- JWT

## Setup

Clone the project from `https://github.com/tanujdave/login-app.git` using SSH or HTTPS.

### **Install dependencies**
```sh
yarn install
```

### **Start server**
```sh
yarn start
```

Note: Just hit `http://localhost:3000` address into browser.


## Project structure
#### **/src**
- `index.tsx` The main application bootstrap file.
- `App.tsx` This App is main application initializer that application theme and basic containers.

#### **/src/components**
- `Button` The basic button component.
- `Checkbox` The basic form checkbox component.
- `Input` The basic form input component.

### **/src/containers**
- `Login` This is the login container that contain all the view and business logic.
- `Login/index.tsx` This is the main login container that load the login screen.
- `Login/service.ts` This service file contains all api services related to logi module.
- `Login/style.ts` This style file contains all login module styling.

### **/src/lib**
 - `theme/global.tsx` This global file include all the default styling.
 - `config.ts` The main application configuration that load based on the environment.

### **/src/utils**
- `api.tsx` This api utils contains all the api related helper function that wrap around axios library.