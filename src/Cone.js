import { useState } from "react";

const Cone = () => {
    const [r, setR] = useState(null);
    const [pi, setPi] = useState(3.14);
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

        const calcArea = pi*r*s + pi*r*r;
        setArea(calcArea.toFixed(2));
    
        const calcVolume = 1/3 * pi * r * r * h;
        setVolume(calcVolume.toFixed(2));
    }

    const displayForm = () =>{
        setR(null);
        setH(null);
        setS(null);
        setPi(3.14);
        setShowResults(false);
        setShowForm(true);
    }

    return (         
        <div className="objects">
            { showForm &&  <form onSubmit={handleSubmit}>
              <label>radius:</label><input type="text" required value={r} onChange={(e) => setR(e.target.value)} /> {/*bunu yapmazsan form degismez*/}
              <label>height:</label><input type="text" required value={h} onChange={(e) => setH(e.target.value)} />
              <label>side:</label><input type="text" required value={s} onChange={(e) => setS(e.target.value)} />
              <label>pi:</label><input type="text" required value={pi} onChange={(e) => setPi(e.target.value)} />
              <button type="submit">Submit</button> {'\u00A0'}
            </form>}
            {showResults && 
            <div className="results">
                <h3>Results</h3>
                <br></br>
                <p>Area : {area}</p>
                <p>Volume : {volume}</p>
                <br></br>
                <button style={{background:"gray"}} onClick={displayForm}>Calculate Again</button>
            </div>}
            
        </div>
    );
}
 
export default Cone;