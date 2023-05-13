import Navbar from "../../components/Navbar";
import "./ProfilePage.css"
const bgImgURL = "https://images.pexels.com/photos/354939/pexels-photo-354939.jpeg?auto=compress&cs=tinysrgb&w=600"
const profilePicURL = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwzNDU1OTE3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60";
const ProfilePage = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="padding">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <div className="card card-shadow">
                                <img src={bgImgURL} alt="CartImageCap" className="card-img-top" />
                                <div className="card-body text-center little-profile">
                                    <div className="pro-img">
                                        <img src={profilePicURL} alt="user" />
                                    </div>
                                    <h3 className="font-weight-bold">Gemma Rose Owen</h3>
                                    <p className="font-weight-bold">Fullstack Developer</p>
                                    <p className="font-weight-bold">GOwen@gmail.com</p>
                                    <div className="w-75 mx-auto my-auto">
                                        <button class="btn btn-dark btn-block">Update Profile</button>
                                        <button class="btn btn-dark btn-block">Change Password</button>
                                        <button class="btn btn-dark btn-block">Logout</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfilePage;