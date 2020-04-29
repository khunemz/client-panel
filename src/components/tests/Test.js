import React, { Component } from 'react'

export default class Test extends Component {

    state = {
        title: '' , 
        body: ''
    }
    componentWillMount() {
        console.log('componentWillMount ...');
    }

    componentDidMount() {
        // Ajax 
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(data => {
    
            this.setState({
                title: data.title , 
                body: data.body
            })
        });


      
    }

    componentDidUpdate() {
        console.log('componentDidUpdate ...');
    }

    componentWillReceiveProps(nextProps , nextState) {
        console.log('componentWillReceiveProps...');
    }
   
    render() {
        const {title ,body} = this.state;
        return (
            <div>
               <h1>{title}</h1>
               <p>{body}</p>
            </div>
        )
    }
}
