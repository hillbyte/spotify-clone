import React, { Component, Fragment } from "react";
import "./auth.css";
import firebase from "../../firebase";
import { toast } from "react-toastify";
import md5 from "md5";

class SignUp extends Component {
  state = {
    email: "",
    confirmEmail: "",
    password: "",
    profile: "",
    dob: "",
    gender: "",
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let { email, confirmEmail, password, profile, dob } = this.state;
      let userData = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      //send verification mail
      userData.user.sendEmailVerificatiion();
      let message = `Verification email has been sent to ${email},Please verify it`;
      toast.success(message);
      await userData.user.updateProfile({
        displayName: profile,
        photoURL: `http://www.gravatar.com/avatar/${md5(email)}?d=identicon`,
      });
      //store information into firebase realtime database

      await firebase
        .database()
        .ref()
        .child("users/" + userData.user.uid)
        .set({
          username: userData.user.displayName,
          email: userData.user.email,
          photoURL: userData.user.photoURL,
          registrationDate: new Date().toLocaleDateString(),
        });
    } catch (err) {
      toast.error(err.message);
    }

    // let { email, confirmEmail, password, profile, dob } = this.state;
    // console.log({ email, confirmEmail, password, profile, dob });
    // firebase
    //   .auth()
    //   .createUserWithEmailAndPassword(email, password)
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };
  render() {
    let { email, confirmEmail, password, profile, dob, gender } = this.state;

    return (
      <Fragment>
        <section id="authSection" className="col-md-4 mx-auto my-2 card">
          <article className="card-body">
            <h4>Sign up with your email address</h4>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>What's your email?</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="Enter your email"
                />
              </div>
              {/*------ends email ---------*/}
              <div className="form-group">
                <label>Confirm your email</label>
                <input
                  type="email"
                  name="confirmEmail"
                  onChange={this.handleChange}
                  value={confirmEmail}
                  className="form-control"
                  placeholder="Enter your email again"
                />
              </div>
              {/*------ends confirm email ---------*/}

              <div className="form-group">
                <label>Create a password</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="Create a password"
                />
              </div>
              {/*------ends Password ---------*/}
              <div className="form-group">
                <label>What should we call you?</label>
                <input
                  type="text"
                  name="profile"
                  value={profile}
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="enter a profile name"
                />
              </div>
              {/*------ends Profile ---------*/}
              <div className="form-group">
                <label>What's your date of birth?</label>
                <input
                  type="datetime-local"
                  name="dob"
                  onChange={this.handleChange}
                  value={dob}
                  className="form-control"
                  placeholder="enter a profile name"
                />
              </div>
              {/*------ends date of birth ---------*/}
              <div className="form-group">
                <label>What's your gender?</label>
                <input
                  type="radio"
                  name="gender"
                  onChange={this.handleChange}
                  value={gender}
                />
                Male
                <input
                  type="radio"
                  name="gender"
                  onChange={this.handleChange}
                  value={gender}
                />
                female
                <input
                  type="radio"
                  name="gender"
                  onChange={this.handleChange}
                  value={gender}
                />
                Non-binary
              </div>
              {/*----ends gender ------------*/}
              <div className="form-group">
                <input type="checkbox" name="checkdata" />
                Share my registration data with Spotify's content providers for
                marketing purposes.
              </div>
              {/*----------- ends checkdata -------------*/}
              <p>
                By clicking on Sign up, you agree to Spotify's
                <a href="/">Terms and Conditions of Use.</a>
              </p>
              <p>
                To learn more about how Spotify collects, uses, shares and
                protects your personal data please read Spotify's
                <a href="/">PrivacyPolicy</a>.
              </p>
              <div className="form-group">
                <button className="btn btn-success btn-block">Sign up</button>
              </div>
            </form>
          </article>
        </section>
      </Fragment>

      // <Fragment>
      //   <section id="authSection" className="col-md-4 mx-auto my-2 card">
      //     <article className="card-body">
      //       <h1>Sign up for free to start listening.</h1>
      //       <h4>Sign up with your email address</h4>
      //       <form onSubmit={this.handleChange}>
      //         <div className="form-group">
      //           <label>What's your email?</label>
      //           <input
      //             type="email"
      //             name="email"
      //             value={email}
      //             onChange={this.handleChange}
      //             className="form-control"
      //             placeholder="Enter your email"
      //           />
      //         </div>

      //         <div className="form-group">
      //           <label>Confirm your email</label>
      //           <input
      //             type="text"
      //             name="confirmEmail"
      //             value={confirmEmail}
      //             onChange={this.handleChange}
      //             className="form-control"
      //             placeholder="Enter your email again"
      //           />
      //         </div>
      //         <div className="form-group">
      //           <label>Create password</label>
      //           <input
      //             type="password"
      //             name="password"
      //             value={password}
      //             onChange={this.handleChange}
      //             className="form-control"
      //             placeholder="Enter password"
      //           />
      //         </div>
      //         <div className="form-group">
      //           <label>What should we call you?</label>
      //           <input
      //             type="text"
      //             name="profile"
      //             value={profile}
      //             onChange={this.handleChange}
      //             className="form-control"
      //             placeholder="Create a profile name"
      //           />
      //         </div>
      //         <div className="form-group">
      //           <label>What's your date of birth?</label>
      //           <input
      //             type="datetime-local"
      //             name="dob"
      //             value={dob}
      //             onChange={this.handleChange}
      //             className="form-control"
      //           />
      //         </div>
      //         <div className="form-group">
      //           <label>What's your gender</label>
      //           <input
      //             type="radio"
      //             name="gender"
      //             value={gender}
      //             onChange={this.handleChange}
      //           />
      //           Male
      //           <input
      //             type="radio"
      //             name="gender"
      //             value={gender}
      //             onChange={this.handleChange}
      //           />
      //           Female
      //           <input
      //             type="radio"
      //             name="gender"
      //             value={gender}
      //             onChange={this.handleChange}
      //           />
      //           Non-binary
      //         </div>
      //         <div className="form-group">
      //           <input type="checkbox" name="checkdata" />
      //           Share my registration data with Spotify's content providers for
      //           marketing purposes.
      //         </div>
      //         <p>
      //           By clicking on Sign up, you agree to Spotify's{" "}
      //           <a href="">Terms and Conditions of Use.</a>
      //         </p>
      //         <p>
      //           To learn more about how Spotify collects, uses, shares and
      //           protects your personal data please read Spotify's{" "}
      //           <a href="">Privacy Policy.</a>
      //         </p>
      //         <div className="form-group">
      //           <button className="btn btn-success btn-block"> Sign Up</button>
      //         </div>
      //       </form>
      //       <p>
      //         Have an account?<a href=""> Log in.</a>
      //       </p>
      //     </article>
      //   </section>
      // </Fragment>
    );
  }
}

export default SignUp;
