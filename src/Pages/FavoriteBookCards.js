import React, {Component} from 'react';
import FavoriteCards from './FavoriteCards'


class FavoriteBookCards extends Component {
    
    render() {
        // console.log(this.props.search);
        const bookRender = this.props.favorites.map((item) =>{
            // console.log(item);
            
            return(
                <FavoriteCards book={item} 
                favoriteClickCard = {this.props.favoriteClick}
                />
            )
        })   

        
        return (
            
            bookRender? bookRender: null
        )
    }
}


export default FavoriteBookCards;