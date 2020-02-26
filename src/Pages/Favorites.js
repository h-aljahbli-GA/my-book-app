import React, {Component} from 'react';
import FavoriteBookCards from './FavoriteBookCards'


class Favorites extends Component {

    removeAllOnClick = (e) => {
        e.stopPropagation()
        // console.log('on click work');
        this.props.removeAll()
    }


    render () {
        // console.log(this.props.favorites);
        
        return(
            <div className='favoriteContainer'>
                <div className='container'>

                <FavoriteBookCards 
                    favorites={this.props.favorites}
                    favoriteClick = {this.props.favoriteClick}/>

                </div>

                <button
                    onClick = {this.removeAllOnClick}>
                    Activate Lasers
                </button>
                
            </div>
            
        )

        
    }
}



export default Favorites;