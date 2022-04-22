import { useState } from "react";
import { Link } from "react-router-dom";

import close from './img/close.svg';
import rectangular from './img/rectangular-r.png';

const Rectangular = () => {
    const [l, setL] = useState(null);
    const [w, setW] = useState(null);
    const [h, setH] = useState(null);

    const [area, setArea] = useState(0);
    const [volume, setVolume] = useState(0);

    const [showForm, setShowForm] = useState(true);
    const [showResults, setShowResults] = useState(false);
    

    const handleSubmit = (e) =>{
        e.preventDefault();
        setShowResults(true);
        setShowForm(false);

        const calcArea = 2*(l*w+l*h+w*h);
        setArea(calcArea.toFixed(2));
    
        const calcVolume = l*w*h;
        setVolume(calcVolume.toFixed(2));
    }

    const displayForm = () =>{
        setL(null);
        setW(null);
        setH(null);
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
            <img width={350} className="shapeimg" src={rectangular} alt="sphere" />
              <label>length:</label><input type="text" required value={l} onChange={(e) => setL(e.target.value)} /> {/*bunu yapmazsan form degismez*/}
              <label>width:</label><input type="text" required value={w} onChange={(e) => setW(e.target.value)} />
              <label>height:</label><input type="text" required value={h} onChange={(e) => setH(e.target.value)} />
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
 
export default Rectangular;