import React from 'react';
import {View, Text} from 'react-native';

export class PointBlock extends React.Component {
  render() {
    return (
        <View>
          <Text>{this.props.data.points}</Text>
        </View>
    );
  }
}
