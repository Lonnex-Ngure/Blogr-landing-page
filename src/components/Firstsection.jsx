// firstsection.jsx
import React from 'react';
import introImage from '../assets/illustration-editor-desktop.svg';

const Firstsection = () => {
  return (
    <section className="main-section">
      <div className="intro">
        <h2>Designed for the future</h2>
      </div>
      <div className="future">
        <div className="text-content">
          <h3>Introducing an extensible editor</h3>
          <p>Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change te looks of a blog.</p>
          <h3>Robust content management</h3>
          <p>Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.</p>
        </div>
        <img src={introImage} alt="Extensible editor" />
      </div>
    </section>
  );
}

export default Firstsection;
