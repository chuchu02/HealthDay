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

const ExMasterClass = ({navigation}) => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.pop()}>
            <Icon name="back" size={50} color="white" />
          </TouchableOpacity>
          <View style={tw`flex-row`}>
            <Icon name="star" size={50} color="white" />
            <Icon name="star" size={50} color="white" />
            <Icon name="star" size={50} color="white" />
          </View>
          <TouchableOpacity onPress={() => navigation.popToTop()}>
            <Icon name="home" size={50} color="white" />
          </TouchableOpacity>
        </View>

        <ScrollView
          contentContainerStyle={tw`p-4 grow bg-white justify-between`}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={tw`items-center w-full h-[135px] mb-4`}
            onPress={() => {
              navigation.navigate('Chest');
            }}>
            <Text style={styles.HealthName}>가슴 운동</Text>
            <Image
              style={styles.HealthImageBox}
              source={{
                uri: 'https://ifh.cc/g/nPy47T.jpg',
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={tw`items-center w-full h-[135px] mb-4`}
            onPress={() => {
              navigation.navigate('Back');
            }}>
            <Text style={styles.HealthName}>등 운동</Text>
            <Image
              style={styles.HealthImageBox}
              source={{
                uri: 'https://ifh.cc/g/7Ogx5q.jpg',
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={tw`items-center w-full h-[135px] mb-4`}
            onPress={() => {
              navigation.navigate('LowerBody');
            }}>
            <Text style={styles.HealthName}>하체 운동</Text>
            <Image
              style={styles.HealthImageBox}
              source={{
                uri: 'https://ifh.cc/g/KCtwLO.jpg',
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={tw`items-center w-full h-[135px] mb-4`}
            onPress={() => {
              navigation.navigate('Shoulder');
            }}>
            <Text style={styles.HealthName}>어깨 운동</Text>
            <Image
              style={styles.HealthImageBox}
              source={{
                uri: 'https://ifh.cc/g/FLmCap.jpg',
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={tw`items-center w-full h-[135px] mb-4`}
            onPress={() => {
              navigation.navigate('Abs');
            }}>
            <Text style={styles.HealthName}>복근 운동</Text>
            <Image
              style={styles.HealthImageBox}
              source={{
                uri: 'https://ifh.cc/g/6A7Ysc.jpg',
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={tw`items-center w-full h-[135px]`}
            onPress={() => {
              navigation.navigate('Arm');
            }}>
            <Text style={styles.HealthName}>팔 운동</Text>
            <Image
              style={styles.HealthImageBox}
              source={{
                uri: 'https://ifh.cc/g/LTSKsQ.jpg',
              }}
            />
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
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 5,
    fontSize: 25,
    color: 'white',
  },
  footerText: {
    fontSize: 30,
    color: 'white',
    padding: 5,
  },
  HealthImageBox: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
  },
  HealthName: {
    color: 'white',
    fontSize: 30,
    opacity: 0.8,
    fontWeight: '600',
    position: 'absolute',
    zIndex: 1,
  },
});

export default ExMasterClass;
