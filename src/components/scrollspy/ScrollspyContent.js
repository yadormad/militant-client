import React from 'react';
import Scrollspy from 'react-scrollspy';
import './scrollspy-styles.scss';

const getItemStyleByLevel = level => ({
    marginLeft: `${level}rem`,
});

const scrollToRef = ref => {
    window.scrollTo({
        top: ref.current.offsetTop - 12,
        left: 0,
        behavior: 'smooth'
    })
};

const ScrollspyContent = ({scrollspyData}) => (
    <Scrollspy
        items={Object.keys(scrollspyData)}
        componentTag='div'
        currentClassName='current-scroll'
        offset={-72}
    >
        {
            Object.keys(scrollspyData).map(itemKey => (
                <li className='scroll-item' style={getItemStyleByLevel(scrollspyData[itemKey].level)}>
                    <span onClick={() => scrollToRef(scrollspyData[itemKey].headerRef)}>
                        {scrollspyData[itemKey].name}
                    </span>
                </li>
            ))
        }
    </Scrollspy>
);

export default ScrollspyContent;


//behavior: 'smooth'
