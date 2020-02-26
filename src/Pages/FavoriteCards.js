import React, {Component} from 'react';



class FavoriteCards extends Component {
    

    onClickFavorite = (e) => {
        e.stopPropagation()
        // console.log('on click work');
        console.log(this.props.book);
        
        this.props.favoriteClickCard(this.props.book) 
    }
    

    render(){

        
        return(
        <div className ='card'>
            <img src={this.props.book.image_url._text}></img>
            <h3>{this.props.book.title._text}</h3>
            <p>description</p>
            <i class="material-icons"  
            onClick={this.onClickFavorite} >favorite_border</i>
        </div>
        )
    }
}

export default FavoriteCards;