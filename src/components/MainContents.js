import React, { Component } from 'react';
import { connect } from 'react-redux';

class MainContents extends Component {
    // constructor (props) {
    //     super(props);
    // }
    render() {
        console.log('maincontents rendered');
        let homeContents = (
                <div>
                    <div>
                        <section>
                            <h1>최근 가진 모임</h1>
                            <ul>
                                <li>없다~</li>
                            </ul>
                        </section>
                        <section>
                            <h1>최근 함께한 친구</h1>
                            <ul>
                                <li>없다~</li>
                            </ul>
                        </section>
                    </div>
                </div>
            );
        return (
            homeContents
        );
    }
}

const mapStateProps = (state) => {
    return {
        // isLogin: state.profile.isLogin
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // handleLogin: (result) => { dispatch(actions.login(result)) }
    };
}
export default connect(mapStateProps, mapDispatchToProps)(MainContents);