import { useState } from "react";
import { Link } from "react-router-dom";

import close from './img/close.svg';
import cylinder from './img/cylinder-r.png';

const Cylinder = () => {
    const [r, setR] = useState(null);
    const [pi, setPi] = useState(3.14);
    const [h, setH] = useState(null);

    
    const [area, setArea] = useState(0);
    const [volume, setVolume] = useState(0);

    const [showForm, setShowForm] = useState(true);
    const [showResults, setShowResults] = useState(false);
    

    const handleSubmit = (e) =>{
        e.preventDefault();
        setShowResults(true);
        setShowForm(false);

        const calcArea = 2*pi*r*r + 2*pi*r*h;
        setArea(calcArea.toFixed(2));
    
        const calcVolume = h * pi * r * r;
        setVolume(calcVolume.toFixed(2));
    }

    const displayForm = () =>{
        setR(null);
        setH(null);
        setPi(3.14);
        setShowResults(false);
        setShowForm(true);
    }

/*  
    const Isnull = () =>{
        if(r === null)
            return false;
        if(h === null)
            return false;            
        else
            return true;
    }
*/
    
    return (         
        <div className="objects">
            <div>
                <Link to={'/area-volume-calculator'}><img src={close} alt="close" className="close"/></Link>
                <br></br>
            </div>            
            { showForm &&  <form onSubmit={handleSubmit}>
            <img width={350} className="shapeimg" src={cylinder} alt="sphere" />
            <br /><br />
                <p>Area = &nbsp; {parseFloat((2*pi*r*r + 2*pi*r*h).toFixed(2))}</p>
                <p>Volume = &nbsp;{parseFloat(( h * pi * r * r).toFixed(2))}</p>
              <label>radius:</label><input type="text" required value={r} onChange={(e) => setR(e.target.value)} /> {/*bunu yapmazsan form degismez*/}
              <label>height:</label><input type="text" required value={h} onChange={(e) => setH(e.target.value)} />
              <label>pi:</label><input type="text" required value={pi} onChange={(e) => setPi(e.target.value)} />
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
 
export default Cylinder;