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
  TouchableHighlight,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/AntDesign';
import tw from 'twrnc';

import {theme} from '../colors';

const ExplanationPage = ({navigation}) => {
  const [waying, setWaying] = useState(true);
  const caution = () => setWaying(false);
  const way = () => setWaying(true);
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.pop()}>
            <Icon name="back" size={50} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.popToTop()}>
            <Icon name="home" size={50} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.ExnameBox}>
          <Text style={styles.Exname}>가슴운동 {'>'} 푸쉬업</Text>
        </View>
        <View style={styles.VideoBox}>
          <Image
            style={{width: '100%', height: '100%'}}
            source={{
              uri: 'https://blog.kakaocdn.net/dn/cOoVu0/btqPC2gbBh6/78LDbAKRxVohMJfBxgGG10/img.gif',
            }}
          />
        </View>
        <View style={styles.SubMenu}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={way}
            style={{
              ...styles.SubMenu2,
              backgroundColor: waying ? '#3300CC' : '#333333',
            }}>
            <Text style={styles.SubmenuText}>운동방법</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={caution}
            style={{
              ...styles.SubMenu2,
              backgroundColor: !waying ? '#3300CC' : '#333333',
            }}>
            <Text style={styles.SubmenuText}>주의사항</Text>
          </TouchableOpacity>
        </View>
        <View style={{...styles.Submenu3, display: waying ? 'flex' : 'none'}}>
          <Text style={styles.SubmenuText2}>
            1. 팔을 어깨너비보다 조금 넓게 벌려 바닥을 짚는다.
          </Text>
          <Text style={styles.SubmenuText2}>
            2. 호흡을 들이마시면서 천천히 팔꿈치를 굽힌다.
          </Text>
          <Text style={styles.SubmenuText2}>
            3. 가슴과 바닥 사이가 주먹 하나 정도에서 잠시 정지한 후 운동 부위
            자극에 집중한다.
          </Text>
          <Text style={styles.SubmenuText2}>
            4. 호흡을 내쉬면서 시작 위치로 올라온다.
          </Text>
        </View>
        <View style={{...styles.Submenu3, display: !waying ? 'flex' : 'none'}}>
          <Text style={styles.SubmenuText2}>
            1. 시선은 정면을 응시하며, 복부에 긴장을 유지시켜 몸을 일직선으로
            곧게 유지한다.
          </Text>
          <Text style={styles.SubmenuText2}>
            2. 몸을 내릴때 팔꿈치가 위나 옆으로 지나치게 벌어지는걸 주의한다.
          </Text>
          <Text style={styles.SubmenuText2}>
            3. 내려 갔을때 팔꿈치와 어깨가 평행을 이룰수 있도록 한다.
          </Text>
          <Text style={styles.SubmenuText2}>
            4. 엉덩이가 위나 아래로 내려가지 않도록 주의한다.
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#666666',
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 5,
    fontSize: 25,
    color: 'white',
    backgroundColor: '#00CCFF',
  },
  ExnameBox: {
    width: '100%',
  },
  Exname: {
    color: 'white',
    fontSize: 20,
    paddingVertical: 5,
    paddingLeft: 10,
  },
  VideoBox: {
    flex: 0.5,
  },
  SubMenu: {
    flex: 0.1,
    flexDirection: 'row',
    width: '100%',
  },
  SubMenu2: {
    width: '50%',
    height: '100%',
    backgroundColor: '#333333',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  SubmenuText: {
    fontSize: 25,
    color: 'white',
    fontWeight: '500',
  },
  Submenu3: {
    flex: 0.4,
  },
  SubmenuText2: {
    color: 'white',
    fontSize: 18,
    marginVertical: 5,
    marginHorizontal: 10,
  },
});

export default ExplanationPage;
