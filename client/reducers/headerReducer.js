import {
    LOAD_SINGLE_POSTS_REQUEST,
    RESET_HEADER,
    SHOW_POSTDATA_IN_HEADER
} from '../constants/actionTypesPost';


var temp = {
    id: '1',
    title : 'idemooo',
    subTitle : 'some subtitle',
    html: '<div>afasf iasfiasb ifbbasif</div>',
    imageUrl: 'http://teravertical.com/wp-content/uploads/2015/11/blogging-productivity.jpg',
    date: new Date()
};

const defatultTitle = 'acambas blog';
const defaultSubtitle = 'Place for my personal and tech thoughts';
import defaultImageUrl from '../../img/home-bg.jpg';


const constructPostHeaderData  = (postData) => {
    return Object.assign({}, {
        headerImageUrl : postData.imageUrl || defaultImageUrl,
        headerTitle: postData.title,
        headerSubtitle : postData.subTitle
    })
};

const constructDefaultHeaderData  = () => {
    return Object.assign({}, {
        headerImageUrl : defaultImageUrl,
        headerTitle: defatultTitle,
        headerSubtitle : defaultSubtitle
    })
};

const initialHeaderState = constructDefaultHeaderData();

export default (state = initialHeaderState, action) => {
    switch (action.type){
        case SHOW_POSTDATA_IN_HEADER:
            return constructPostHeaderData(temp);
        case RESET_HEADER:
            return constructDefaultHeaderData(temp);
        default:
            return state;
    }
}