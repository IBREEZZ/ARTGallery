import React from "react";
import { Link } from 'react-router-dom';

export function ExploreBut() {
    return (
        <div>
            <Link to="/profile">
                <button type="button" className="btn btn-success btn-lg">EXPLORE NOW!</button>
            </Link>
        </div>
    )
}
