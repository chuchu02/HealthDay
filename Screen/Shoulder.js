import {useEffect, useState} from 'react';
import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  ImageResizeMode,
  SafeAreaView,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/AntDesign';
import tw from 'twrnc';

import {theme} from '../colors';

const Shoulder = ({navigation}) => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.pop()}>
            <Icon name="back" size={50} color="white" />
          </TouchableOpacity>
          <Text style={tw`text-white text-3xl font-semibold`}>HealthDay</Text>
          <TouchableOpacity onPress={() => navigation.popToTop()}>
            <Icon name="home" size={50} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.MainMenu}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.HealthBox}
            onPress={() => {
              navigation.navigate('PikepushUp');
            }}>
            <View style={styles.HealthNameBox}>
              <Text style={styles.HealthName}>파이크 푸쉬업</Text>
            </View>
            <Icon name="right" style={styles.RightArrow} />
            <Image
              style={styles.HealthImageBox}
              source={{
                uri: 'https://ifh.cc/g/X5wQJm.png',
              }}
            />
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
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 5,
    fontSize: 25,
    color: 'white',
  },
  footer: {
    width: '100%',
    height: '7%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  MainMenu: {
    flex: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  HealthBox: {
    justifyContent: 'center',
    width: '100%',
    height: '18%',
    marginBottom: 10,
    backgroundColor: 'lightgray',
  },
  HealthImageBox: {
    width: '40%',
    height: '100%',
    resizeMode: 'cover',
  },
  HealthName: {
    color: 'black',
    fontSize: 20,
    fontWeight: '300',
    position: 'absolute',
    left: 10,
    zIndex: 1,
  },
  HealthNameBox: {
    width: '50%',
    height: '100%',
    zIndex: 1,
    position: 'absolute',
    justifyContent: 'center',
    top: 0,
    left: 163,
  },
  RightArrow: {
    position: 'absolute',
    zIndex: 1,
    fontSize: 30,
    right: 10,
    color: 'black',
  },
});

export default Shoulder;
