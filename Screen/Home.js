import {useEffect, useState} from 'react';
import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Image,
  BackHandler,
  ImageResizeMode,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import tw from 'twrnc';

import {theme} from '../colors';

const Home = ({navigation}) => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Image
          source={{uri: 'https://ifh.cc/g/B9ZsS1.jpg'}}
          style={styles.Mainimage}
        />
        <View style={styles.header}>
          <TouchableOpacity>
            <Icon name="closecircle" size={50} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.say}>
          <Text
            style={tw`text-white text-2xl font-serif absolute top-20 left-5 font-bold`}>
            Work out!
          </Text>
          <Text
            style={tw`text-white text-2xl font-serif absolute top-30 left-10 font-bold`}>
            Eat well!
          </Text>
          <Text
            style={tw`text-white text-2xl font-serif absolute top-40 left-15 font-bold`}>
            Be patient!
          </Text>
          <Text
            style={tw`text-white text-2xl font-serif absolute top-50 left-20 font-bold`}>
            Your body will reward you.
          </Text>
        </View>
        <View style={styles.MainMenu}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.HealthBox}
            onPress={() => {
              navigation.navigate('Exercise');
            }}>
            <Text style={styles.level}>초급</Text>
            <Image
              style={styles.HealthImageBox}
              source={{
                uri: 'https://ifh.cc/g/TlROtP.jpg',
              }}
            />
            <Icon name="star" style={styles.Star1} />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.HealthBox}
            onPress={() => {
              navigation.navigate('Exercise');
            }}>
            <Text style={styles.level}>중급</Text>
            <Image
              style={styles.HealthImageBox}
              source={{
                uri: 'https://ifh.cc/g/NrbRYz.jpg',
              }}
            />
            <Icon name="star" style={styles.Star1} />
            <Icon name="star" style={styles.Star2} />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.HealthBox}
            onPress={() => {
              navigation.navigate('Exercise');
            }}>
            <Text style={styles.level}>고급</Text>
            <Image
              style={styles.HealthImageBox}
              source={{
                uri: 'https://ifh.cc/g/dCYWV8.jpg',
              }}
            />
            <Icon name="star" style={styles.Star1} />
            <Icon name="star" style={styles.Star2} />
            <Icon name="star" style={styles.Star3} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    padding: 5,
    fontSize: 25,
    color: 'white',
  },
  say: {
    position: 'absolute',
    top: 175,
    width: '100%',
    height: '30%',
  },
  footer: {
    width: '100%',
    height: '7%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 30,
    color: 'white',
    padding: 5,
  },
  Mainimage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 0,
    opacity: 0.3,
  },
  MainMenu: {
    flex: 1,
    alignContent: 'space-around',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  HealthBox: {
    alignItems: 'center',
    width: '90%',
    height: '30%',
  },
  HealthImageBox: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
  },
  level: {
    color: 'white',
    fontSize: 30,
    opacity: 0.8,
    fontWeight: '600',
    position: 'absolute',
    zIndex: 1,
    justifyContent: 'center',
  },
  Star1: {
    color: 'white',
    fontSize: 30,
    position: 'absolute',
    zIndex: 1,
    bottom: 5,
    left: 5,
  },
  Star2: {
    color: 'white',
    fontSize: 30,
    position: 'absolute',
    zIndex: 1,
    bottom: 5,
    left: 35,
  },
  Star3: {
    color: 'white',
    fontSize: 30,
    position: 'absolute',
    zIndex: 1,
    bottom: 5,
    left: 65,
  },
});

export default Home;
