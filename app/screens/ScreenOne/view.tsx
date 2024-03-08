import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './style';
import {IMAGES} from '../../assets/images';
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInRight,
  FadeInUp,
  FadeOut,
} from 'react-native-reanimated';
const ScreenOneView: React.FC = () => {
  return (
    <View style={styles.outerContainer}>
      <Image source={IMAGES.BACKGROUNDIMAGE} style={styles.backgroundImage} />
      <View style={styles.lampContainer}>
        <Animated.Image
          entering={FadeInUp.delay(100).duration(1000).springify()}
          source={IMAGES.LAMP}
          style={styles.lamp1}
          resizeMode="contain"
        />
        <Animated.Image
          entering={FadeInUp.delay(200).duration(1000).springify()}
          source={IMAGES.LAMP}
          style={styles.lamp2}
          resizeMode="contain"
        />
      </View>
      <Animated.View
        entering={FadeInUp.delay(200).duration(1000).springify()}
        style={styles.titleContainer}>
        <Text style={styles.title}>Login</Text>
      </Animated.View>
      <View style={styles.formContainer}>
        <Animated.View
          style={styles.input}
          entering={FadeInDown.delay(200).duration(1000).springify()}>
          <TextInput
            placeholder="email"
            placeholderTextColor={'grey'}
            style={styles.inputText}
          />
        </Animated.View>
        <Animated.View
          style={styles.input}
          entering={FadeInDown.delay(300).duration(1000).springify()}>
          <TextInput
            placeholder="password"
            secureTextEntry
            placeholderTextColor={'grey'}
            style={styles.inputText}
          />
        </Animated.View>

        <TouchableOpacity style={styles.buttonContainer}>
          <Animated.Text
            entering={FadeInDown.delay(400).duration(1000).springify()}
            style={styles.buttonTitle}>
            Login
          </Animated.Text>
        </TouchableOpacity>
        <View style={styles.infoContainer}>
          <Animated.Text
            entering={FadeInDown.delay(500).duration(1000).springify()}
            style={styles.info}>
            Don't have an account?{' '}
          </Animated.Text>
          <TouchableOpacity>
            <Animated.Text
              entering={FadeInDown.delay(600).duration(1000).springify()}
              style={styles.signup}>
              SignUp
            </Animated.Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ScreenOneView;
