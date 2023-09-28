
import './App.css';
import Content from './Content';
import Header from './Header';
import Total from './Total';

function App() {
  const course = 'Half Stack application development'
  
  const parts= [{
      part : 'Fundamentals of React',
      exercises : 10
  },
  {
    part : 'Using props to pass data',
    exercises : 7
  },{

    part : 'State of a component',
    exercises : 14
  }
]
   const totals = parts.reduce((total, part) => total + part.exercises, 0);

  return (
    <>
      <div>
      <Header course={course}/>
      <Content parts={parts} />
      <Total totals={totals}/>
      
    </div>
       
    </>
  )
}

export default App

// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14

//   return (
//     <div>
//       <h1>{course}</h1>
//       <p>
//         {part1} {exercises1}
//       </p>
//       <p>
//         {part2} {exercises2}
//       </p>
//       <p>
//         {part3} {exercises3}
//       </p>
//       <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
//     </div>
//   )
// }

// export default App