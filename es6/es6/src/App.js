import logo from './logo.svg';
import './App.css';
let courses = [
  {
    id: 1,
    title: "ReactJS Tutorial",
    rating: 4.2,
  },
  {
    id: 2,
    title: "Angular Tutorial",
    rating: 2.5,
  },
  {
    id: 3,
    title: "VueJS Tutorial",
    rating: 3.8,
  },
  {
    id: 4,
    title: "Java Tutorial",
    rating: 4,
  },
  {
    id: 5,
    title: "JavaScript Tutorial",
    rating: 3.5,
  },
];
function App() {
  return (
    <div>
      <div>
        {courses.map(course => {
          if (course.rating >= 4) {
            return <li>{course.rating}</li>
          }
        })}
      </div>


    </div>

  );
}

export default App;
