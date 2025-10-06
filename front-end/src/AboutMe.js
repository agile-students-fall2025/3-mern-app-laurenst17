import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

/**
 * A React component that represents the About Us page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const About = props => {
  const [aboutData, setAboutData] = useState(null)
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState('')

  const fetchAboutData = () => {
    const API_HOST = (process.env.REACT_APP_SERVER_HOSTNAME || '').replace(/\/$/, '')

    axios
      .get(`${API_HOST}/aboutme`)
      .then(response => {
        setAboutData(response.data)
      })
      .catch(err => {

        const message =
          err?.response?.data
            ? JSON.stringify(err.response.data, null, 2)
            : `${err.message}`
        setError(message)
      })
      .finally(() => {
        setLoaded(true)
      })
  }

  useEffect(() => {
    fetchAboutData()
  }, [])

  if (!loaded) {
    return <div className="About-loading">Loading...</div>
  }

  if (error) {
    return <div className="About-error">Error: {error}</div>
  }

  if (!aboutData) {
    return <div className="About-error">No data available</div>
  }

  return (
    <div className="About-container">
      <h1>About Us</h1>
      <div className="About-content">
        <div className="About-image-container">
          <img 
            src={aboutData.imageUrl} 
            alt={aboutData.name}
            className="About-image"
          />
        </div>
        <div className="About-text">
          <h2>{aboutData.name}</h2>
          <h3>{aboutData.title}</h3>
          <p className="About-description">{aboutData.description}</p>
        </div>
      </div>
    </div>
  )
}

export default About
