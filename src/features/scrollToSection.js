import React from 'react'

const scrollToSection = () => {
    const projectElement = document.getElementById('project');
    if (projectElement) {
      projectElement.scrollIntoView({ behavior: 'smooth' });
    }
}

export default scrollToSection