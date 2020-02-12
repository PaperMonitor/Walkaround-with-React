import React from 'react';
import ListItem from './ListItem/ListItem';
import './ListWrapper.css';
import {twitterAccounts} from '../../data/twitterAccounts';

const ListWrapper = () => (
    <ul className="listWrapper__wrapper">
        {twitterAccounts.map(item =>(
            // spreading component
            <ListItem key={item.name} {...item} />
        ))}
    </ul>
);

export default ListWrapper;