import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StudentInfo from './component/Ex_01/StudentInfo'
import Header from './component/Ex_01/Header'
import Footer from './component/Ex_01/Footer'
import Counter from './component/Ex_02/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Bài Tập React Tuần 2</h1>
        <hr />
        <h3>Bài Tập 1</h3>
        <Header/>
        <StudentInfo
          hoten= "Nguyen Hoang Thai Binh"
          mssv= "23720251"
          lop= "DHKTPM19BTT"
        />
        <Footer/>
        <hr />
        <h3>Bài Tập 2</h3>
        <Counter/>
      </div>
      
    </>
  )
}

export default App
