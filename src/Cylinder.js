import { useState } from "react";

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

    return (         
        <div className="objects">
            { showForm &&  <form onSubmit={handleSubmit}>
              <label>radius:</label><input type="text" required value={r} onChange={(e) => setR(e.target.value)} /> {/*bunu yapmazsan form degismez*/}
              <label>height:</label><input type="text" required value={h} onChange={(e) => setH(e.target.value)} />
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
 
export default Cylinder;