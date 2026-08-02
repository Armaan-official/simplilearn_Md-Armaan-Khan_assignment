import React, { useEffect, useState } from 'react'

function App() {

  const [studentDetails] = useState({
    name: 'John Doe', 
    age: 26
  })

  const [studentScore, setStudentScore] = useState({
    math: 50, 
    chemistry: 60, 
    physics: 70,
    total: 0
})


  useEffect(() => {
    const timer = setTimeout(() => {
      setStudentScore(prevScore => ({
      ...prevScore,
      total: prevScore.math + prevScore.chemistry + prevScore.physics 
    })) 
    }, 2000);
    return () => clearTimeout(timer)
  }, [studentScore.math, studentScore.chemistry, studentScore.physics])

  function scoreIncrement(prevState){
    setStudentScore(({
      math: prevState.math + 10,
      chemistry: prevState.chemistry + 10,
      physics: prevState.physics + 10,
    }))
  }

  console.log(studentScore.total)

  return (
    <div id='app'>
      <h2>Marksheet</h2>
      <div id='details'>
        <p>Name: {studentDetails.name}</p>
        <p>Age: {studentDetails.age}</p>
      </div>
      
      <div id='score'>
        <div>
          <p>Total: {studentScore.total}</p>
            <p>Maths: {studentScore.math}</p>
            <p>Chemistry: {studentScore.chemistry}</p>
            <p>Physics: {studentScore.physics}</p>
        </div>
        <button onClick={() => scoreIncrement(studentScore)}>Update</button>
        
      </div>

    </div>
  )
}

export default App