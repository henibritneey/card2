
import './App.css'
import Content from './component/Content'
function App() {
  return (
    <div className="app">

      <h1>Civil Engineering Alumni Journey</h1>

      <div className="card-container">

        <Content
          alumniname="Arun Kumar"
          role="Site Engineer"
          company="L&T Construction"
          completed="B.E Civil Engineering"
          before="Had less practical knowledge"
          after="Worked on large construction projects"
          struggle="Managing site workers and deadlines"
          projects="Bridge Construction, Highway Project"
          salary="₹45,000/month"
          software="AutoCAD, STAAD Pro"
          juniors="Learn software skills and communication"
        />

        <Content
          alumniname="Priya Sharma"
          role="Structural Engineer"
          company="Tata Projects"
          completed="B.Tech Civil Engineering"
          before="Fear of interviews"
          after="Became confident in design analysis"
          struggle="Learning structural software"
          projects="Mall Design, Apartment Structures"
          salary="₹60,000/month"
          software="ETABS, Revit"
          juniors="Practice projects regularly"
        />

        <Content
          alumniname="Rahul Verma"
          role="Project Manager"
          company="Shapoorji Pallonji"
          completed="B.E Civil Engineering"
          before="No industrial exposure"
          after="Leading a construction team"
          struggle="Handling project pressure"
          projects="Metro Rail Project"
          salary="₹85,000/month"
          software="Primavera, AutoCAD"
          juniors="Gain internship experience"
        />

      </div>

    </div>
  )
}

export default App
