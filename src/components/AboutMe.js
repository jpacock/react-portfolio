import React from 'react';

import { Box, Heading, Text } from 'rebass';

function AboutMe() {
    return (
        <Box className="about-me-container">
            <Heading
                className="section-heading"
                fontSize={[4, 5, 6]}
                color='primary'>
                Hi, I'm a...
            </Heading>


            <Text
                className="about-me-text"
                fontSize={[2, 3, 4]}
                p="20px"
                ls="10px">
                Software delivery consultant disciplined in a wide range of cloud products,
                providing implementation, mentoring, and support services to IBM clients
            </Text>
            
        </Box>

    );
}

export default AboutMe;