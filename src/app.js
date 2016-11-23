const React = require('react')

const App = React.createClass({
  getInitialState: function() {
    return {
      persons: [{
        name: 'Tom',
        id: 1
      }, {
        name: 'Trip',
        id: 2
      }, {
        name: 'Derek',
        id: 3
      }, {
        name: 'Kendra',
        id: 4
      }, {
        name: 'Andrea',
        id: 5
      }, {
        name: 'Jared',
        id: 6
      }],
      members: []
    };
  },
  addMember (m) {
    return (e) => {
      let members = this.state.members.filter(member => member.id !== m.id)
      this.setState({members: [m, ...members]})
    }

  },
  removeMember (m) {
    return (e) => {
      let members = this.state.members.filter(member => member.id !== m.id)
      this.setState({members})
    }
  },
  render() {
    return (
      <div>
        <div style={{float: 'left'}}>
        <h3>People</h3>
        <ul>
          {this.state.persons.map(p =>
            <li key={p.id}>
              {p.name}
              <button onClick={this.addMember(p)}>Add Member</button>
            </li>
          )}
        </ul>
        </div>
        <div style={{float: 'left'}}>
        <h3>Team</h3>
        <ul>
          {this.state.members.map(m =>
            <li key={m.id}>
              {m.name}
              <button onClick={this.removeMember(m)}>Remove</button>
            </li>
          )}
        </ul>
        </div>
      </div>
    )
  }
})

module.exports = App
