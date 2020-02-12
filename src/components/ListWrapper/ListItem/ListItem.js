import React from 'react';
import PropTypes from 'prop-types'
import './ListItem.css';

const ListItem = ({ 
    name,
    description,
    image,
    twitterLink
}) => (
    <li className="listItem__wrapper">
        <img 
        src={image} 
        className="listItem__image"
        alt={name}
        />
        <div>
            <h2 className="listItem__name">{name}</h2>
            <p className="listItem__description">{description}</p>
            <a href={twitterLink} className="listItem__button">Visit Twitter Page</a>
        </div>
    </li>
);

ListItem.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string, //is not required, if the description is blank it will obtain the data from listItem.defaultprops
    image: PropTypes.string.isRequired,
    twitterLink: PropTypes.string.isRequired,
};

ListItem.defaultProps = {
    description: "One of the React creators" //the message that will come up if the description props is empty
}

export default ListItem;