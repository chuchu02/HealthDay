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

const Abs = ({navigation}) => {
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
        <ScrollView contentContainerStyle={styles.MainMenu}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.HealthBox}
            onPress={() => {
              navigation.navigate('Plank');
            }}>
            <Image
              style={styles.HealthImageBox}
              source={{
                uri: 'https://ifh.cc/g/2W2zZS.jpg',
              }}
            />
            <View style={styles.HealthNameBox}>
              <Text style={styles.HealthName}>플랭크</Text>
            </View>
            <Icon name="right" style={styles.RightArrow} />
          </TouchableOpacity>
        </ScrollView>
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
    height: '10%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 5,
    fontSize: 25,
    color: 'white',
  },
  MainMenu: {},
  HealthBox: {
    height: 130,
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: 'lightgray',
  },
  HealthImageBox: {
    flex: 0.7,
    resizeMode: 'cover',
  },
  HealthName: {
    color: 'black',
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 10,
    zIndex: 1,
  },
  HealthNameBox: {
    flex: 1,
    zIndex: 1,
    justifyContent: 'center',
  },
  RightArrow: {
    flex: 0.15,
    alignSelf: 'center',
    zIndex: 1,
    fontSize: 30,
    color: 'black',
  },
});

export default Abs;
