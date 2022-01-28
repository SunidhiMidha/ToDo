import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addTodos } from './actions/actionCreator'

const uuid = require('uuid')

export class AddTodo extends Component {

    constructor(props){
        super(props);
        this.state = {       
            title: '',
            completed: false
        }
    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value})

    onSubmit = (e) => {
        e.preventDefault();

        const task = {
            id: uuid.v4(),
            title: this.state.title,
            completed: false
        }
        
        this.props.addTodos(task)
        this.setState({title: ""})

    }
    
    render() {
        return (
            <form style={{display: 'flex'}} onSubmit={this.onSubmit}>
                <input 
                    type="text" 
                    name="title" 
                    style={{flex: '10'}}
                    placeholder='Add ToDo'
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <input 
                    type="submit" 
                    value='Submit'
                    className='btn'
                    style={{flex: '1'}}
                />
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return{
        addTodo: title => dispatch(addTodos(title))
    }
}

AddTodo.propTypes = {
    addTodos: PropTypes.func.isRequired
}

export default connect( mapDispatchToProps, {addTodos})(AddTodo)