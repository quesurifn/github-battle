var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var githubhelpers = require('../utils/githubhelpers');
var ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      isLoading: true,
      playerInfo: [],
    }
  },
  componentDidMount: function () {
    var query = this.props.location.query;
    var self = this;
    githubhelpers.getPlayersInfo([query.playerOne, query.playerTwo])
    .then(function (players){
      self.setState({
        isLoading: false,
        playersInfo: [players[0], players[1]]
      })
    })
  },
  render: function() {
    return (
      <ConfirmBattle isLoading={this.state.isLoading}
      playerInfo={this.state.playersInfo} />
    );
  }
});

module.exports = ConfirmBattleContainer;
