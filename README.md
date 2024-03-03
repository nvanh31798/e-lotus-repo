# Documentation

# Project - *Movies*

**Movies** is a movies app using the [The Movie Database API](https://developers.themoviedb.org/3).

- Total time: 48 hours

## User Stories

The following **required** functionality is completed:

- [x] User can view a list of movies currently playing in theaters. Poster images load asynchronously.
- [x] Add a tab bar for **Now Playing** and **Top Rated** movies.
- [ ] Add a search bar.
- [ ] User can view movie details by tapping on a cell.
- [x] User sees loading state while waiting for the API.
- [ ] User sees an error message when there is a network error.
- [ ] Simple responsive.

The following **optional** features are implemented:

- [ ] Implement segmented control to switch between list view and grid view.
- [ ] All images fade in.
- [x] Implement lazy load image.
- [ ] Customize the highlight and selection effect of the cell.
- [ ] Improve UX loading by skeleton loading.
- [ ] Enhance responsive.

***
## How to start the project
### Pre-requirement:
* NodeJS: 18.6.0 (or higher)
### Steps:
1. Install the package using `npm install`

2. Start the app locally using `npm start`

3. Open [localhost](http://localhost:3006) to view it in the browser. 
***
## Technical Note:
### 1. Library included
| Library                         | version | Description                                        |
|---------------------------------|---------|----------------------------------------------------|
| customize-cra                     | 5.15.6 | custom craete react app                               |
| redux                           | 5.0.1 | State management                                   |
| react-app-rewired               | 2.2.1 | Start react app with override config opionÏ        |
| cypress                             |13.6.3  | Supporting E2E, integration testing                |

### 2. Test Run
* #### How to execute unit test:
1. Install the package using `npm install`

2. Start testing using `npm test`

* #### unit test adding:
Please following the folder structure below

```
root
  └───src
  │    └───test
  │      └───...
   ...
```

* #### cypress:
Currently, cypress is not fully config.
  * open cypress UI using `npm cypress:open`
  
### 3. Environment

| Variable                        | DEV                       | OTHER |
|---------------------------------|---------------------------|-------|
| REACT_APP_USING_MOCK                     | false                     | TBD   |
| REACT_APP_BASE_URL                           | https://localhost:3006    | TBD   |
| REACT_APP_PORT | 3006                          | TBD   |
| REACT_APP_PRODUCT_SERVICE | https://dummyjson.com/products | TBD   |
