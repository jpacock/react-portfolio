import React from 'react';

import {
    DiAngularSimple,
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
    {
        name: "java",
        level: 9,
        icon: <DiJava size="3em" />
    },
    {
        name: "nodejs",
        level: 5,
        icon: <DiNodejs size="3em" />
    },
    {
        name: "openshift",
        level: 8,
        icon: <DiOpenshift size="3em" />
    },
    {
        name: "react",
        level: 7,
        icon: <DiReact size="3em" />
    },

    {
        name: "javascript",
        level: 7,
        icon: <DiJavascript1 size="3em" />
    },
    {
        name: "angular",
        level: 7,
        icon: <DiAngularSimple size="3em" />
    },
    {
        name: "dojo",
        level: 7,
        icon: <DiDojo size="3em" />
    },
    {
        name: "html",
        level: 7,
        icon: <DiHtml5 size="3em" />
    },
    {
        name: "docker",
        level: 7,
        icon: <DiDocker size="3em" />
    },
    {
        name: "bpm",
        level: 8,
        icon: <div className="project-skill-logo">BPM</div>
    },
    {
        name: "odm",
        level: 8,
        icon: <div className="project-skill-logo">ODM</div>
    },
    {
        name: "db2",
        level: 8,
        icon: <img className="project-skill-logo" src={`/images/db2-logo.png`} />
    },
    {
        name: "content-navigator",
        level: 8,
        icon: <img className="project-skill-logo" src={`/images/content-navigator-logo.png`} />
    },
    


]

export default SkillsData;