import React from 'react';
import './index.css';
import ApiManager from '../../config/api';

class RepoTray extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            repos: [],
            searchVal: '',
            error: false
        }
    }

    componentDidMount() {
        let that = this;
        let request = ApiManager.getRepoList();

        request.addEventListener('readystatechange', function() {
        if (this.readyState === 4) {
            that.setState({
                repos: JSON.parse(this.responseText) || {}
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
        let listItem = this.state.repos.map((key, index)=>{
            return (
                <li key={index}>
                    <div className='col-lg-9 float-left'>
                        <div className='mt-2'>
                            <h3>{key.name}</h3>
                            <span className='desc' >{key.description}</span>
                        </div>
                        <div className='mt-1 grey-content'>
                            <span>Stack Text</span>
                            <span>{key.updated_at}t</span>
                        </div>
                    </div>
                    <div className='col-lg-3 float-right ta-r'>
                        <button className='btn btn-sm' type='submit' value='Star'>
                            <svg className='mr-1' width='14' height='16'>
                                <path d='M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z'></path>
                            </svg>
                            Star
                        </button>
                    </div>
                </li>
            )
        })

        if(this.state.error) return <div><h3>Loading ...</h3></div>
    
        return <div>
            <div className='search row'>
                <div className='bar'>
                    <input placeholder='Find a repository...' value= {this.state.searchVal} onChange= { (event) => {
                        this.setState({ searchVal: event.target.value })
                        console.log(event.target.value)   
                    }} />
                </div>
                <div className='search-drop'>
                    <div className='float-left'>
                        <select>
                            <option value='0'>Type: All</option>
                            <option value='1'>All</option>
                            <option value='2'>Sources</option>
                            <option value='3'>Forks</option>
                            <option value='4'>Archived</option>
                            <option value='5'>Mirrors</option>
                        </select>
                    </div>
                    <div className='float-right'>
                        <select>
                            <option value='0'>Language: All</option>
                            <option value='1'>All</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='repo-tray'>
                <ul>
                    {listItem}
                </ul>
            </div>
        </div>
    }
}

export default RepoTray;