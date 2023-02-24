import { Component } from 'react';
import Loading from './Loading';
import PersonCard from './PersonCard';

class PersonDetails extends Component {
  
  state = {
    loading: true,
    person: [],
  }

fetchPerson = async () => {
    const url = 'https://api.randomuser.me/';
const response = await fetch(url)
const data = await response.json()
console.log(data.results);
this.setState({
   loading: false,
   person: data.results,
  })
}
  
componentDidMount() {
  this.fetchPerson();
}

shouldComponentUpdate(_nextProps, nextState) {
  console.log(nextState.person[0].dob.age);
  const AGE = 50;
  if (nextState.person[0].dob.age < AGE) return true;
  return false;
}

getUserElements(user) {
  return {
    name: `${user.name.first} ${user.name.last}`,
    email: user.email,
    age: user.dob.age,
    image: user.picture.thumbnail,
  };
}

// buttonchange() {

// }
  
  render() {
    const { loading, person } = this.state;
    return (
      <div>
        <div>
          { loading ? <Loading/> : <PersonCard person={ this.getUserElements(person[0]) }/> }
        </div>
      <button type="button" onClick={() => this.componentDidMount()}>Next Person</button>
    </div>
    )
  }
}

export default PersonDetails;