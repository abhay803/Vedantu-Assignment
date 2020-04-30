import React from 'react';
import './index.css';
import svgConfig from '../../config/svgConfig';
import ApiManager from '../../config/api';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            profile: {},
            error: false
        }
    }

    componentDidMount() {
        let that = this;
        let request = ApiManager.getProfileData();

        request.addEventListener('readystatechange', function() {
        if (this.readyState === 4) {
            console.log(this);
            that.setState({
                profile: JSON.parse(this.responseText) || {}
            });
        }
       });
       request.addEventListener('onerror', function() {
        console.error('Profile api error');
        that.setState({
            error: true
        })
       });
    }

    render() {
        let svgData = svgConfig.profile;
        if(this.state.error) {
            return <div><h1>Loading ...</h1></div>
        }

        let listItem = (<ul className='details'>                     
            <li>
                <svg width='16' height='16' className='svg-color'>
                    <path d= {svgData.company} />
                </svg>
                <span>{this.state.profile.company || 'N/A'}</span>
            </li>
            <li>
                <svg width='16' height='16' className='svg-color'>
                    <path d= {svgData.location} />
                </svg>
                <span>{this.state.profile.location || 'N/A'}</span>
            </li>
            <li>
                <svg width='16' height='16' className='svg-color'>
                    <path d= {svgData.email} />
                </svg>
                <span>{this.state.profile.email || 'N/A'}</span>
            </li>
        </ul>)
    
        return (
            <div className='profile'>
                <div>
                    <img src={this.state.profile['avatar_url'] || 'https://flyjazz.ca/wp-content/uploads/2017/01/dummy-user.jpg'} alt="Avatar" className='profile-img'/>
                </div>
                <div className='name-container'>
                    <h1>
                        <span className='fullname' >{this.state.profile.name}</span>
                        <span className='login-name' >{this.state.profile.login}</span>
                    </h1>
                </div>
                <div>
                    <button className='btn'>Follow</button>
                </div>
                <div>
                    <p>{this.state.profile.bio || 'N/A'}</p>
                    {listItem}
                </div>
                <div>
                    <p>Block or report user</p>
                </div>
            </div>
        )
    }
}

export default Profile;