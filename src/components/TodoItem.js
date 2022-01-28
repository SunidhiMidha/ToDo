import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchTodos, delTodos, toggleTodos } from './actions/actionCreator'

const uuid = require('uuid')


export class TodoItem extends Component {

  constructor(props){
    super(props);
    this.state = {
    todo: []
  }}

  componentDidMount(){
    this.props.fetchTodos()
  }

  getStyle = x => {
      return {
          backgroundColor: '#f4f4f4',
          padding: '10px',
          borderBottom: '1px #ccc dotted',
          display: 'flex'
      }
  }

  btnStyle = () => {
    return {
      backgroundColor: '#ff0000',
      color: '#fff',
      border: 'none',
      padding: '4px 8px',
      borderRadius: '50%',
      cursor: 'pointer',
      marginLeft: 'auto',
      alignSelf: 'center'
    }
  }
  
  render() {

    const tasks = this.props.tasks.map(x => (
      <div key={uuid.v4()} style={this.getStyle(x)}>
          <input type="checkbox" style={{alignSelf: 'center'}} checked = { x.completed===true } onChange={() => this.props.toggleTodos(x)}/>
          &nbsp;
          <div style={{textDecoration: x.completed ? 'line-through' : 'none',}} >
            {x.title}
          </div>
          <button style={this.btnStyle()} onClick={() => this.props.delTodos(x)}> x </button>
      </div>
    ))

    return (
      <div>
        {tasks}
      </div>
    )
  }
}

TodoItem.propTypes = {
  fetchTodos: PropTypes.func.isRequired,
  delTodos: PropTypes.func.isRequired,
  toggleTodos: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  tasks: state.tasks.items
})

const mapDispatchToProps = dispatch => {
  return{
    fetchTodos: t => dispatch(fetchTodos(t)),
    delTodos: t => dispatch(delTodos(t)),
    toggleTodos: t => dispatch(toggleTodos(t))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem)
