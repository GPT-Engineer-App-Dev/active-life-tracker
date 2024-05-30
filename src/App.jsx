import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import LogWorkout from "./pages/LogWorkout.jsx"; // Import the new LogWorkout page

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/log-workout" element={<LogWorkout />} /> {/* Add route for LogWorkout */}
      </Routes>
    </Router>
  );
}

export default App;
