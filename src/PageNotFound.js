import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (  
        <div className="404">
            <h5>404</h5>
            <p>Hey! This page is not found</p>
            <Link to="/area-volume-calculator" style={{fontWeight:'bold', fontSize:'20px'}}>Go Home...</Link>
        </div>
    );
}
 
export default PageNotFound;