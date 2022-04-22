import { useState } from "react";
import { Link } from "react-router-dom";

import close from './img/close.svg';
import sphere from './img/sphere-r.png';

const Sphere = () => {
    const [r, setR] = useState(null);
    const [pi, setPi] = useState(3.14);
    
    const [area, setArea] = useState(0);
    const [volume, setVolume] = useState(0);

    const [showForm, setShowForm] = useState(true);
    const [showResults, setShowResults] = useState(false);
    

    const handleSubmit = (e) =>{
        e.preventDefault();
        setShowResults(true);
        setShowForm(false);

        const calcArea = 4 * pi * r * r;
        setArea(calcArea.toFixed(2));
    
        const calcVolume = 4/3 * pi * r * r * r;
        setVolume(calcVolume.toFixed(2));
    }

    const displayForm = () =>{
        setR(null);
        setPi(3.14);
        setShowResults(false);
        setShowForm(true);
    }

    return (
        <div className="objects">
            <div>
                <Link to={'/'}><img src={close} alt="close" className="close"/></Link>
                <br></br>
            </div>
            { showForm &&  <form onSubmit={handleSubmit}>
                <img width={250} className="shapeimg" src={sphere} alt="sphere" />
              <label>radius:</label><input type="text" required value={r} onChange={(e) => setR(e.target.value)} /> {/*bunu yapmazsan form degismez*/}
              <label>pi:</label><input type="text" required value={pi} onChange={(e) => setPi(e.target.value)} />
              <button type="submit">Submit</button> {'\u00A0'}
            </form>}
            {showResults && 
            <div className="results">
                <h3>Results</h3>
                <br></br>
                <p>Area: {area}</p>
                <p>Volume: {volume}</p>
                <br></br>
                <button style={{background:"gray"}} onClick={displayForm}>Calculate Again</button>
            </div>}
            
        </div>
    );
}
 
export default Sphere;