import React from 'react';

import { Box, Heading } from 'rebass';


import SkillsData from '../data/SkillsData'

function Skills() {
    const skillsData = SkillsData;
    const skillTypes = [
        "frontend",
        "backend",
        "middleware",
        "operations"
    ]
    return (
        <Box className="skills-container">
            <Heading
                className="section-heading"
                fontSize={[5, 6, 7]}
                color='primary'>
                Skills
            </Heading>
            {
                skillTypes.map(type => {
                    return (
                        <Box className="skill-type-container">
                            <Heading as="h2" pb={3}>{type.replace(/^./, type[0].toUpperCase())}</Heading>
                            <Box className="skill-rows-container">
                                {
                                    skillsData.map(skill => {
                                        if (!skill.level || skill.type !== type)
                                            return null;

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
                                    })
                                }
                            </Box>
                        </Box>
                    )
                })
            }

        </Box>
    )
}

export default Skills;