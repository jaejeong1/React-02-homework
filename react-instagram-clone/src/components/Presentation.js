import React, { useState } from "react";
import "./Presentation.css";

function Presentation() {
    
    const stories = ["1", "2", "3", "4", "5", "6"];

    return (
        <div>
            <div className="slider">
                <div className="slider__arrow-left">
                    <span className="arrow">
                        {"<"}
                    </span>
                </div>
                <div className="row__story_view">
                    {stories.map((story) => (
                        <div>
                        <img
                            key={story}
                            src="/compass.png"
                            className="row__story"
                        />        
                        NAME
                        </div>
                    ))}
                </div>
                <div className="slider__arrow-right">
                    <span className="arrow">
                        {">"}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Presentation;
