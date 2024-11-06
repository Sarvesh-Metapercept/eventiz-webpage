import React from 'react'

function Title() {
    return (
        <div>
            <div className="container heading">
                <div className="row align-items-start">
                    <div className="col">
                        <h4 className="pink">Big Event 2024</h4>
                        <h1 className="text-white">
                            <span className="head">World Biggest 2023</span>
                            <br />
                            <span className="head">CONFERENCE</span>
                        </h1>
                        <h5 className="text-white">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At
                            eligendi dolorem distinctio ab.
                        </h5>
                    </div>
                    <div className="col">{/* One of two columns */}</div>
                </div>
            </div>
        </div>
    )
}

export default Title