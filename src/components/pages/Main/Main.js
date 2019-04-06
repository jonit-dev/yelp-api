import React, {Component} from 'react';

class Main extends Component {

   state = {};

    render() {
        return (
           <React.Fragment>
               <div className="ui main text container app-main">
                   <h1 className="ui header">Semantic UI Fixed Template</h1>
                   <p>This is a basic fixed menu template using fixed size containers.</p>
                   <p>A text container is used for the main container, which is useful for single column layouts</p>

               </div>
           </React.Fragment>
        );
    }
}

export default Main;