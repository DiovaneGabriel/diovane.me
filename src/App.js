import background from './img/background.jpg';
import profile from './img/profile.jpg';
import './App.css';

function App() {
  return (
    <div className="app" style={{ backgroundImage: `url(${background})` }}>
      <div className="content">
        <div className="img">
          <img src={profile} />
        </div>
        <label className="name">Diovane Barbieri Gabriel</label>
        <label className="job">Full Stack Developer Sapiranga, Brazil</label>
        <label className="tags">#technology #programming #education #crafts #innovation</label>
        <label className="education">Education</label>
        <label className="college">Feevale University</label>
      </div>
    </div>
  );
}

export default App;
