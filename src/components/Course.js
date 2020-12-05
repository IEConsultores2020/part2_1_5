import React from 'react'

const Course =  ({ course }) => {
    return (
        <header><ul>
        {course.map(course =>
          <li key={course.id}>
            <h1>{course.name}</h1>    
            {course.parts.map(parts => 
              <li key={parts.id}>
                <li> {parts.name} {parts.exercises}</li>
              </li>
            )}
            <h3>Total of {course.parts.reduce((a, c) =>  a = a + c.exercises, 0)} Exercises
            </h3>
          </li>
        )}
        </ul></header>
    )
}

export default Course

