import React from 'react';
import GoogleApiComponent from '../../components/GoogleApiComponent/GoogleApiComponent'; 
import Map from '../Map/Map'; 

import { apiKey as __GAPI_KEY__ } from '../../config/config'; 

export class Container extends React.Component{
    render(){
        console.log( '[ map container ] in map container render ' );

        const style = {
            width: '100vw',
            height: '100vh'
        };

        return( 
            <div style={ style } >
                <Map google={ this.props.google } />
            </div> );
    }
}

export default GoogleApiComponent( {
    apiKey: __GAPI_KEY__
})( Container ); 

