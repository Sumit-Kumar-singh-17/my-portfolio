import React, {useState} from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Project from './components/Project'
import Skills from './components/Skills'
import Contact from './components/Contact'
import LoadingScreen from './components/LoadingPage'
// import Hero from './components/Hero'

const App = () => {

  const [loadingDone, setLoadingDone] = useState(false);
  return (
    <div>
      {loadingDone ? (
      
              <>
                <NavBar />
                <Home />
                <Project />
                <About />
                <Skills />
                <Contact />
              </>
              
            ) : (
              // <LoadingPage onFinish={() => setLoadingDone(true)} />
              <LoadingScreen onFinish={() => setLoadingDone(true)} />
            )}
    </div>
  )
}

export default App
