import { useState } from "react";
import { Link } from "react-router-dom";

import close from './img/close.svg';
import triangular from './img/triangular-r.png';

const Triangular = () => {
    const [l, setL] = useState(null);
    const [b, setB] = useState(null);
    const [h, setH] = useState(null);
    const [s, setS] = useState(null);

    const [area, setArea] = useState(0);
    const [volume, setVolume] = useState(0);

    const [showForm, setShowForm] = useState(true);
    const [showResults, setShowResults] = useState(false);
    

    const handleSubmit = (e) =>{
        e.preventDefault();
        setShowResults(true);
        setShowForm(false);

        const calcArea = (b*h) + (2*l*s) + (l*b);
        setArea(calcArea.toFixed(2));
    
        const calcVolume = 0.5*b*l*h;
        setVolume(calcVolume.toFixed(2));
    }

    const displayForm = () =>{
        setL(null);
        setB(null);
        setH(null);
        setS(null);
        setShowResults(false);
        setShowForm(true);
    }
    return (  
        <div className="objects">
            <div>
                <Link to={'/area-volume-calculator'}><img src={close} alt="close" className="close"/></Link>
                <br></br>
            </div>            
        { showForm &&  <form onSubmit={handleSubmit}>
        <img width={350} className="shapeimg" src={triangular} alt="sphere" />
          <label>length:</label><input type="text" required value={l} onChange={(e) => setL(e.target.value)} /> {/*bunu yapmazsan form degismez*/}
          <label>base:</label><input type="text" required value={b} onChange={(e) => setB(e.target.value)} />
          <label>height:</label><input type="text" required value={h} onChange={(e) => setH(e.target.value)} />
          <label>slant:</label><input type="text" required value={s} onChange={(e) => setS(e.target.value)} />
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
 
export default Triangular;