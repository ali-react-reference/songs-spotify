# Purpose of these projects
These projects are here to help with future projects. They're not special in any way, but, they have good examples of react concepts and best practice. Each project is made by me with help from the (react-redux)[https://www.udemy.com/course/react-redux/learn] course.

## JSX:
- that each component returns jsx
- some differences from html
- using variables in jsx

## Components:
- nested components
- props
- passing in html into props for more reusable components
- using the semantic ui css library

## Seasons:
- classes (intro)
- state
- config objects
- lifecycle methods, when they run and what they're good for
- conditional rendering
- this.sate and the this.setState method

## Pics
- User input/forms - SearchBar
- Event handlers - SearchBar
- Child to parent communication with props - SearchBar and App
- Uncontrolled and controlled elements - SearchBar
- Basic api calls - App with an ajax client (axios)
- Using the async await syntax - App
- Showing lists - ImageList
- React refs - ImageCard
- Grids - ImageList
- grid-row-end styling - ImageCard

## Videos-hooks:
- Hooks: setState, useEffect
- Nesting functions as props - VideoItem > VideoList > App
- Custom hooks - useVideo

## Widgets:
- Hooks: Tools to be able to write reusable code. Primitive hooks include:
  - useState: state can be used in a functional component - Accordian, Search
  - useEffect: use similar to lifecycle methods in a functional component - Search, Dropdown, Translate (with debounced text)
  - useRef: let's you create a ref in a functional component - Dropdown
- Custom hooks
  - custom repeatable tasks
- Throttling requests - Search
- Navigation (via navigation events) - Header, Route, Link

## Songs-spotify:
- Async api calls by action creators (async) - actions/index.js
- Redux thunk middleware to handle action creators not returning js objects (they return a request object instead). When the action creator gets to the reducer, then there is no response yet - src/index.js
- Mapstate to props (get data from the redux store into the component) - any component
- Using action creators from components with react-redux - any component
