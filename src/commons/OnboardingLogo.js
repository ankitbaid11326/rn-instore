import React, { Component } from 'react';
import { Text, Box } from 'react-native-design-utility';
import { Image } from 'react-native';

import { images } from '../constants/images';

export default class OnboardingLogo extends Component {
  render() {
    return (
      <Box center>
        <Box>
          <Image source={images.logo} />
        </Box>
        <Text size="xl2" color="rgb(239, 95, 135)">
          In<Text size="xl2" color="rgb(123, 88, 142)">
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
