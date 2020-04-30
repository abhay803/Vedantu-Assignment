import React from 'react';
import './index.css';

class RepoTray extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            repoList: [],
            searchVal: ''
        }
    }

    render() {
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
                            <option value="0">Type: All</option>
                            <option value="1">All</option>
                            <option value="2">Sources</option>
                            <option value="3">Forks</option>
                            <option value="4">Archived</option>
                            <option value="5">Mirrors</option>
                        </select>
                    </div>
                    <div className='float-right'>
                        <select>
                            <option value="0">Language: All</option>
                            <option value="1">All</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default RepoTray;