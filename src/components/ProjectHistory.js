import React from 'react';

import Project from './Project'
import ProjectsData from '../data/ProjectsData'

import { Box, Heading } from 'rebass';

function ProjectHistory() {
    const projects = ProjectsData;

    return (
        <Box>
            <div style={{ padding: "5px 30px" }}>
                <Heading
                    className="section-heading"
                    fontSize={[5, 6, 7]}
                    color='primary'>
                    Project History
                </Heading>
            </div>

            <div>
                {projects.map((project, idx) => <Project key={idx} project={project} last={idx === projects.length - 1} />)}
            </div>
        </Box>


    )
}

export default ProjectHistory;