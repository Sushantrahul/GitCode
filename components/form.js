import React from 'react'
//import '../css/form.css'


export default class Form extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      review: '',
      rating: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (key, event) {
    this.setState({[key]: event.target.value})
  }

  handleSubmit (event) {
    event.preventDefault()
    this.props.handleFormSubmit(this.state)
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
          Name:
          <br />
            <input type='text' value={this.state.name} onChange={this.handleChange.bind(this, 'name')} />
          </label>
        </div>
        <div>
          <label>
          Phone:
          <br />
            <input type='text' value={this.state.name} onChange={this.handleChange.bind(this, 'name')} />
          </label>
        </div>

        <div>
          <label>
          Address:
          <br />
            <textarea rows='4' cols='50' type='text' value={this.state.review} onChange={this.handleChange.bind(this, 'review')} />
          </label>
        </div>
        <div>
          <label>
          Id #:
          <br />
            <input type='text' value={this.state.name} onChange={this.handleChange.bind(this, 'name')} />
          </label>
        </div>
        <div>
          <label>
          Medicine:
          <br />
            <input type='text' value={this.state.rating} onChange={this.handleChange.bind(this, 'rating')} />
          </label>
        </div>
        <div>
          <label>
          Symptoms:
          <br />
            <input type='text' value={this.state.rating} onChange={this.handleChange.bind(this, 'rating')} />
          </label>
        </div>
        <div>
          <label>
          Self / Doctor:
          <br />
            <input type='text' value={this.state.rating} onChange={this.handleChange.bind(this, 'rating')} />
          </label>
        </div>
        <div>
          <label>
          Upload Pres.:
          <br />
            <input type='text' value={this.state.rating} onChange={this.handleChange.bind(this, 'rating')} />
          </label>
        </div>
        
        <input type='submit' value='Submit' />
      </form>
    )
  }
}

  <style jsx>{`
  
  form {
    margin: 100px 1000;
    color: blueviolet
  }
  
  
  form div {
    margin: 10px 0;
    margin-left: 400px;
  }
  
  label {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    text-align: right;
    width: 400px;
    line-height: 26px;
    margin-bottom: 10px;
  }
  
  input {
    height: 20px;
    flex: 0 0 200px;
    margin-left: 10px;
  }
}
  
  
  
  `}</style>
