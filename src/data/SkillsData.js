import React from 'react';

import {
    DiAngularSimple,
    DiCss3,
    DiDocker,
    DiDojo,
    DiHtml5,
    DiJava,
    DiJavascript1,
    DiNodejs,
    DiOpenshift,
    DiReact
} from 'react-icons/di';

const SkillsData = [
    /****** FRONTEND ******/ 
    {
        name: "react",
        type: "frontend",
        level: 8,
        icon: <DiReact size="3em" />
    },
    {
        name: "angular",
        type: "frontend",
        level: 7,
        icon: <DiAngularSimple size="3em" />
    },
    {
        name: "javascript",
        type: "frontend",
        level: 8,
        icon: <DiJavascript1 size="3em" />
    },
    {
        name: "dojo",
        type: "frontend",
        level: 6,
        icon: <DiDojo size="3em" />
    },
    {
        name: "html",
        type: "frontend",
        level: 9,
        icon: <DiHtml5 size="3em" />
    },
    {
        name: "css",
        type: "frontend",
        level:8,
        icon: <DiCss3 size="3em" />
    },

    /****** BACKEND ******/ 
    {
        name: "java",
        type: "backend",
        level: 9,
        icon: <DiJava size="3em" />
    },
    {
        name: "nodejs",
        type: "backend",
        level: 7,
        icon: <DiNodejs size="3em" />
    },
    /****** OPERATIONS ******/ 
    {
        name: "bpm",
        type: "middleware",
        level: 8,
        icon: <div className="project-skill-logo"><strong>BPM</strong></div>
    },
    {
        name: "content-navigator",
        type: "middleware",
        icon: <img className="project-skill-logo" src={`/images/content-navigator-logo.png`} alt="content-navigator"/>
    },
    {
        name: "odm",
        type: "middleware",
        level: 9,
        icon: <div className="project-skill-logo"><strong>ODM</strong></div>
    },
    
    

    /****** MIDDLEWARE ******/ 
    {
        name: "docker",
        type: "operations",
        level: 9,
        icon: <DiDocker size="3em" />
    },
    {
        name: "openshift",
        type: "operations",
        level: 8,
        icon: <DiOpenshift size="3em" />
    },
    

    /****** DATABASE ******/ 
    {
        name: "db2",
        icon: <img className="project-skill-logo" src={`/images/db2-logo.png`} alt="db2"/>
    },
    


]

export default SkillsData;