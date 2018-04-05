import React from 'react'; 
import ReactDOM from 'react-dom'; 

export class Map extends React.Component{

    componentDidUpdate( prevProps, prevState ){
        if ( prevProps.google !== this.props.google ){
            this.loadMap();
        }
    }

    componentDidMount(){
        console.log( '[ map ] did mount ' );
        this.loadMap();
    }

    loadMap(){ 
        console.log( '[ map/ loadMap ] props are: ', this.props ); 
        if ( this.props && this.props.google ){
            const { google } = this.props;
            const maps = google.maps;
            const mapRef = this.refs.map;
            const node = ReactDOM.findDOMNode( mapRef ); 
            console.log( '[ map ] map ref is found: ', mapRef ); 
            let zoom = 16;
            let lat = 42.272313;
            let lng = -83.742381;
            const center = new maps.LatLng(lat, lng);
            const mapConfig = Object.assign({}, {
                center: center,
                zoom: zoom
            })
            this.map = new maps.Map(node, mapConfig);
            const marker = new maps.Marker( {
                position: center,
                map: this.map,
                title: "532 Packard"
            })
        }
     }
 


    render(){
        const mapStyles = {
            width: '1500px',
            height: '800px'
        }
        return(
            <div style={ mapStyles } ref="map" >
            Loading map...
            </div>
        )
    };
};

export default Map; 