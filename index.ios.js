const React = require('react');
const ReactNative = require('react-native');
const formatTime = require('minutes-seconds-milliseconds');

const {
  AppRegistry,
  Text,
  View,
  TouchableHighlight,
  StyleSheet
} = ReactNative;

const Stopwatch = React.createClass({
  getInitialState: function() {
    return {
      timeElapsed: null
    }
  },
  render: function() {
    return (
      <View style={styles.container}>
        <View style={[styles.header, this.border('yellow')]}>
          <View style={[styles.timerWrapper, this.border('red')]}>
            <Text>
              {formatTime(this.state.timeElapsed)}
            </Text>
          </View>
          <View style={[styles.buttonWrapper, this.border('green')]}>
            {this.startStopButton()}
            {this.lapButton()}
          </View>
        </View>

        <View style={[styles.footer, this.border('blue')]}>
          <Text>
            I am a list of Laps
          </Text>
        </View>
      </View>
    );
  },
  startStopButton: function() {
    return (
      <TouchableHighlight
        underlayColor="gray"
        onPress={this.handleStartPress}
      >
        <Text>
          Start
        </Text>
      </TouchableHighlight>
    );
  },
  lapButton: function() {
    return (
      <TouchableHighlight>
        <Text>
          Lap
        </Text>
      </TouchableHighlight>
    );
  },
  handleStartPress: function() {
    const startTime = new Date();

    setInterval(() => {
      this.setState({
        timeElapsed: new Date() - startTime
      });
    }, 30);
  },
  border: function(color) {
    return {
      borderColor: color,
      borderWidth: 4
    };
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  },
  header: {
    flex: 1
  },
  footer: {
    flex: 1
  },
  timerWrapper: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonWrapper: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});

AppRegistry.registerComponent('stopwatch', () => Stopwatch);
