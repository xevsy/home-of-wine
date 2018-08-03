import React from 'react'
import Header from './Header'
import database from '../firebase/firebase'


class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.state = {
      title: '',
      description: ''
    }
  }


  onFormSubmit(e) {
    e.preventDefault();

    const title = e.target.elements.title.value;
    const description = e.target.elements.description.value;
    this.setState(() => {
      return {
        title: title,
        description: description
      }
    });

    database.ref('wineItems').push({
      title: title,
      description: description
    });

    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <div>
          <h1>Add new wine item</h1>
          <form onSubmit={this.onFormSubmit}>
            <input type={"text"} name={"title"} />
            <input type={"description"} name={"description"} />
            <button>Add new item</button>
          </form>
        </div>
      </div>
    )
  };
}

export default AddItem;
