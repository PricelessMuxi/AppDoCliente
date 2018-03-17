import React from 'react';
import {View, Text} from 'react-native';

export class Loop extends React.Component {
  render() {
    return (
      <View>
        {this.props.items.map((o, k) => {
          const child = React.cloneElement(this.props.children, {data: o});
          return (
            <Text key={k} className={this.props.className}>
              {child}
            </Text>
          );
        }, this)}
      </View>
    );
  }
}
