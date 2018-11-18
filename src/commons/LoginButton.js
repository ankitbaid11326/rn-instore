import React, { Component } from 'react';
import { Box, Text } from 'react-native-design-utility';
import { TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import theme from '../constants/theme';

import { images } from '../constants/images';

const bgColor = type => {
  switch (type) {
    case 'google':
      return 'googleColor';
    case 'facebook':
      return 'facebookColor';
    default:
      return 'white';
  }
};

const LoginButton = ({ children, type, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Box dir="row" align="center" bg={bgColor(type)} width="80%" self="center" p="xs" shadow={1} radius={3} mb="sm">
        <Box mr="sm">
          <Box bg="white" h={32} w={32} radius={5} center style={{ position: 'relative' }}>
            {type === 'google' && <Image source={images.googleIcon} style={{ width: '100%', height: '100%' }} />}
            {type === 'facebook' && (
              <FontAwesome
                name="facebook"
                color="#3B5998"
                size={30}
                style={{
                  position: 'absolute',
                  right: 5,
                  bottom: -3
                }}
              />
            )}
          </Box>
        </Box>
        <Box>
          <Text size="md" color="white">
            {children}
          </Text>
        </Box>
      </Box>
    </TouchableOpacity>
  );
};

export default LoginButton;
