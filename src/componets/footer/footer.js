import React from 'react';

import FadeIn from '../transitions/fade-in';

const Footer = () => {
    return (
        <footer className="Footer">
            <FadeIn 
                delay={'1s'}
                direction={'top'}
                length={'20px'}
                duration={500}>
                <a href="" target="_blank" rel="noopener noreferrer"><h3></h3></a>
            </FadeIn>
        </footer>
    )
};

export default Footer;