import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Section.module.css';

const Section = ({ title, children }) => (
  <section className={Styles.section}>
    <h1 className={Styles.title}>{title}</h1>
    {children}
  </section>
);

Section.propType = {
  title: PropTypes.string,
};

export default Section;
