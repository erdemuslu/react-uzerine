import React, { useState, useEffect } from 'react'

import List from './components/List'
import Form from './components/Form'

const App = () => {
  const [jobs, setJobs] = useState([]);

  const handleAdd = (job) => {
    jobs.push(job)

    setJobs(jobs)
  }

  useEffect(() => {
    fetch('https://codepen.io/jobs.json')
      .then(response => response.json())
      .then(data => setJobs(data.jobs))
  }, [])

  return (
    <div>
      <Form
        handleAdd={handleAdd}
      />
      <List data={jobs} />
    </div>
  )
}

export default App
