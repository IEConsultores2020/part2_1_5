import React from 'react';
import ReactDOM from 'react-dom';
import Course from './components/Course'

const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>    
  )
}

const Content = ({ course }) => {
  return (
    <div>
      <Part part={course.parts[0]} />
      <Part part={course.parts[1]} />
      <Part part={course.parts[2]} />
    </div>
  )
}

const courses =  [
{ id: 1,
  name: 'Half Stack application development',
  parts: [
    { id: 1,
      name: 'Fundamentals of React',
      exercises: 10
    },
    { id: 2,
      name: 'Using props to pass data',
      exercises: 7
    },
    { id: 3,
      name: 'State of a component',
      exercises: 14
    },
    {
      id: 4,
      name: 'Redux',
      exercises: 11
    }
  ]
},
{ id: 2,
  name: 'Node.js',
  parts: [
    {
      id: 1,
      name: 'Routing',
      exercises: 3
    },
    {
      id: 2,
      name: 'Middlewares',
      exercises: 2
    }
  ]
  }
]

const total2 = ({ course }) => {
  const sum = course.parts[0].exercises + course.parts[1].exercises 
  return(
    <p>Number of exercises {sum}</p>
  ) 
}

const reducer = (accumulator, currentValue) => accumulator + currentValue

const Total = ({course}) => [0, 1, 2, 3, 4].reduce((accumulator, currentValue, currentIndex, array) => {
  return accumulator + currentValue
}, 1)

const App = (props) => {
  const { courses } = props
  return (
    <div>
      <Course key={courses.id} course={courses} />
    </div>
  )
}


ReactDOM.render(
  <App courses={courses} />, 
  document.getElementById('root')
  )