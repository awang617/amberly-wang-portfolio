import React, { useState, useEffect } from 'react';
import {
    useLocation
} from "react-router-dom";

function Navigation(props) {

    return (
        <div id="navigation" className="sticky top-0 z-10 py-5 bg-slate-50">
            <div className="md:grid md:grid-cols-2 w-3/4 mx-auto">
                <div className="md:text-left">
                    <h3><a href="/">Amberly Wang</a></h3>
                </div>
                <ul className="md:text-right my-auto">
                    <li className='inline mx-4'><a href="/">Home</a></li>
                    <li className='inline mx-4'><a href="/about-me">About Me</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navigation;