import React, { Component } from 'react';
import { Image } from 'react-native';
import { Box, Text } from 'react-native-design-utility';

import { images } from '../constants/images';

export default class SplashScreen extends Component {
  componentDidMount() {
    this.checkAuth();
  }

  checkAuth = () => {
    setTimeout(() => {
      this.props.navigation.navigate('Auth');
    }, 2000);
  };

  render() {
    return (
      <Box f={1} center>
        <Box mb="sm">
          <Image source={images.logo} />
        </Box>
        <Text size="xl" color="rgb(239, 95, 135)">
          In<Text size="xl" color="rgb(123, 88, 142)">
            Store
          </Text>
        </Text>
        <Text size="md" color="rgb(123, 88, 142)">
          Easy Grocery Shopping
        </Text>
      </Box>
    );
  }
}
