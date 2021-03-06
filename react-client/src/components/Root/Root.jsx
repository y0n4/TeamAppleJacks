import React, { Component } from "react";
import GoogleLogin from "react-google-login";
import { PostData } from "./PostData.jsx";
import { Redirect } from "react-router-dom";

class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginError: false,
      redirect: false
    };
    this.signup = this.signup.bind(this);
  }

  signup(res, type) {
    if (type === "google" && res.w3.U3) {
      const postData = {
        name: res.w3.ig,
        provider: type,
        email: res.w3.U3,
        provider_id: res.El,
        token: res.Zi.access_token,
        provider_pic: res.w3.Paa
      };
    }

    if (postData) {
      PostData("signup", postData).then(result => {
        let responseJson = result;
        sessionStorage.setItem("userData", JSON.stringify(responseJson));
        this.setState({ redirect: true });
      });
    } else {
      console.log("goooooogle errrror");
    }
  }

  render() {
    if (this.state.redirect || sessionStorage.getItem("userData")) {
      return <Redirect to={"/home"} />;
    }

    const responseGoogle = response => {
      console.log("google console");
      console.log(response);
      this.signup(response, "google");
    };

    return (
      <div className="row body">
        <div className="medium-12 columns">
          <div className="medium-12 columns">
            <h2 id="welcomeText" />

            <GoogleLogin
              clientId='742940875432-d88m20e2l2110l3m3jd24ag46v2a3pbm.apps.googleusercontent.com'
              buttonText="Login with Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Root;
 