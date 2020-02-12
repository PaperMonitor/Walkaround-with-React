import React from 'react';
import ListWrapper from './components/ListWrapper/ListWrapper';
import './index.css';

class App  extends React.Component{
    state = {
        items: [],
    }
    render (){
        return (
    <div>
        <ListWrapper 
        items={this.state.items}
        />
    </div>
        )
    }
    };

export default App;
