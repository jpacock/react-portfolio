import React from 'react';

import { Box, Heading } from 'rebass';


import SkillsData from '../data/SkillsData'

function Skills() {
    const skillsData = SkillsData;

    return (
        <Box className="skills-container">
            <Heading
                className="section-heading"
                fontSize={[5, 6, 7]}
                color='primary'>
                Skills
            </Heading>
            <Box className="skill-rows-container">
                {skillsData.map(skill => {
                    return (
                        <div className="skill-row">
                            {skill.icon}
                            <div className="skill-indicator-container">
                                <div className="skill-indicator-full" >
                                    <div style={{ background: "gray", height: "100%", width: `${skill.level}0%` }} />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </Box>
        </Box>
    )
}

export default Skills;