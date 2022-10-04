import React from 'react';
import PropTypes from "prop-types";
import SearchMovie from "./SearchMovie";

class View extends React.Component {

    componentDidMount(){
        console.log(this.props);
        const { location, history } =  this.props;
        console.log(location);
        console.log(history);
    }

    render() {

        const {location:{state}} = this.props;
        if(state) {
        return(
            <div className="contents_wrap">
                <div className="poster">
                    {/*<img src={poster} alt={title}/>*/}
                </div>
                <div className="view_wrap">
                    {/*제목 : {title}*/}
                </div>
            </div>
        )

        } else {
            return null
        }
    }
}


SearchMovie.propTypes = {
    id: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    actor: PropTypes.string.isRequired

};

export default View;