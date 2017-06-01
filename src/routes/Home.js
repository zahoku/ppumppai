import React, {Component} from 'react';

import MainContents from '../components/MainContents';

class Home extends Component {
    static isPrivate = true;

    render() {
        return <MainContents></MainContents>;
    }
}

export default Home;