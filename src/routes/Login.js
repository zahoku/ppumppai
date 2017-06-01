import React, {Component} from 'react';
import GoogleLogin from 'react-google-login';
import { GOOGLE_CLIENT_ID, SESSION_STORAGE_KEY } from '../constants';
import { connect } from 'react-redux';

import * as actions from '../actions';

class Login extends Component {
    render() {
        console.log('render login')
        let onFailureGAPI = function (googleObject) {
            console.log(googleObject);
            // this.props.handleLogin();
        };
        return (
            <div>
                <p className="guideTxt">구글 로그인이 필요합니다.</p>
                <GoogleLogin
                    clientId={GOOGLE_CLIENT_ID}
                    buttonText="Login"
                    onSuccess={this.props.handleLogin}
                    onFailure={onFailureGAPI}>
                </GoogleLogin>
            </div>
        );
    }
}


const mapStateProps = (state) => {
    return {
        profile: state.profile
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleLogin: (result) => {
            let profileObj = result.profileObj;
            profileObj.isLogin = true;
            sessionStorage.setItem(SESSION_STORAGE_KEY.PROFILE, JSON.stringify(profileObj));
            return dispatch(actions.login(result));
        }
    };
}
export default connect(mapStateProps, mapDispatchToProps)(Login);