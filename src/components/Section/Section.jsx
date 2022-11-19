import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
    return (
        <div>
            <h1>{title}</h1>
            {children}
        </div>
    );
};

Section.prototypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
};

export default Section;