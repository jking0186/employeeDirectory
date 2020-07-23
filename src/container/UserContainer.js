import React, { Component } from 'react';
import Employee from '../components/Employee/Employee';
import API from '../utils/API';

class UserContainer extends Component {
    state = {
        result: [],
        filter: '',
        showResult: [],
        alpha: false
    }

getUsers = () => {
    API.search().then(res => {
        this.setState({result: res.data.results});
        this.setState({showResult: res.data.results})
    })
    .catch(err => console.log(err))
}

componentDidMount() {
    this.getUsers();
}

filter = () => {
    // create a state to track whether to show just male, female, or all employees
    const currentFilter = this.state.filter;
    if (currentFilter === ''){
        this.setState({showResult: this.state.result});
        this.setState({filter: ''});
    }
}

comparsion = (a, b) => {
    const userA = a.name.first.toLowerCase();
    const userB = b.name.first.toLowerCase();
    let comparsion = 0;

    if(userA > userB) {
        comparsion = 1;
    } else if (userA < userB) {
        comparsion = -1;
    }
    return comparsion;
}

sortUsers = () => {
    this.setState({showResult: this.state.showResult.sort(this.comparsion)});
    this.setState({alpha: true})
}
comparsionRev = (a, b) => {
    const userA = a.name.first.toLowerCase();
    const userB = b.name.first.toLowerCase();
    let comparsion =0;

    if(userA > userB) {
        comparsion = 1;
    } else if (userA < userB) {
        comparsion = -1;
    }
    return comparsion * -1;
}
sortUsersRev = () => {
    this.setState({showResult: this.state.showResult.sort(this.comparsionRev)});
    this.setState({alpha: false})
}

sortAlpha = () => {
    if(this.state.alpha === false) {
        this.sortUsers();
    } else {
        this.sortUsersRev();
    }
}

render() {
    return (
        <div className="header">
            <Employee
                users={this.state.showResult}
                sortUsers={this.sortAlpha}
                filter={this.filter}
            />
        </div>
    )
}
}

export default UserContainer;