import React,{Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {latestNews,articleNews,galleryNews} from '../actions';
import LatestDisplay from '../components/Home/LatestDisplay';
import ArticleDisplay from '../components/Home/ArticleDisplay';
import GalleryDisplay from '../components/Home/GalleryDisplay';

class Home extends Component{
    componentDidMount(){
        this.props.dispatch(latestNews())
        this.props.dispatch(articleNews())
        this.props.dispatch(galleryNews())
    }

    render(){
        return(
            <div>
               <LatestDisplay ldata={this.props.datalist.latestdata}/>
               <ArticleDisplay adata={this.props.datalist.articledata}/>
               <GalleryDisplay gdata={this.props.gallerylist.gallerydata}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        datalist:state.article,
        gallerylist:state.gallery
    }
}

Home.protoTypes={
    dispatch:PropTypes.func
}


export default connect(mapStateToProps)(Home)