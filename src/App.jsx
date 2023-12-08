
import './App.css';

function App() {
  const myName = "Veronika"
  const src = "https://img.freepik.com/free-photo/landscape-of-morning-fog-and-mountains-with-hot-air-balloons-at-sunrise_335224-794.jpg?size=626&ext=jpg&ga=GA1.1.1222169770.1701993600&semt=sph"
  const alt = "Photo of nature"

  const obj = {
    syteName: "Google",
    url: "https://www.google.com/"
  }
  const a = 5
  const b = 6

const arr = ["Червоний", "Синій", "Зелений"] 

  return (
    
    <>
    <h1>{myName}</h1>
    <p>Ласкаво просимо до нашого сайту!</p>
    <img src={src} alt={alt} />
    <a href={obj.url}>{obj.syteName}</a>
    <p>{a+b}</p>
 
    <ul>
    <li>{arr.map(color => <li>{color}</li>  )}</li>
    </ul>
    </>
 
  );
}

export default App;
