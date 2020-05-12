import React from 'react';

import { BsFillDiamondFill } from "react-icons/bs";

import SkillsData from '../data/SkillsData';

import { Box } from 'rebass';

function project(props) {
    const skills = SkillsData;
    return (
        <Box className="project-timeline-item">
            <div className="project-timeline-item-date">
                <div className="project-timeline-date">
                    <div style={{ paddingBottom: "10px" }}>{props.project.startDate}</div>
                    <div>{props.project.endDate}</div>
                </div>
            </div>
            <div className="project-timeline-item-line"><BsFillDiamondFill className="project-timeline-item-diamond" /></div>
            <div className="project-timeline-item-details">
                <div className="project-title">{props.project.title}</div>
                <div className="project-description">{props.project.customer}</div>
                <div>{props.project.description}</div>
                <div className="project-timeline">
                    {props.project.highlights.map((highlight, idx) => {
                        return (
                            <div 
                                className="project-highlight"
                                key={idx}>
                                {highlight}
                            </div>
                        )
                    })}
                </div>
                <div className="project-skills-container">
                    {props.project.skills?.map(skill => {
                        const found = skills.find(s => s.name == skill)
                        return found?.icon
                    })}
                </div>
                
            </div>
        </Box>
    )
}

export default project;