import React from 'react';
import { WeWorkWithContainer,
         WeWorkWithTitle,
         Icons,
         Icon1
        } from './styled';

const Body: React.FC<any> = ({ frontmatter }) => {
    return (
        <WeWorkWithContainer>
            <WeWorkWithTitle>We Work With</WeWorkWithTitle>
            <Icon1/>
        </WeWorkWithContainer>
    );
};

export default Body;