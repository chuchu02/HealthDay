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

const Traise = ({navigation}) => {
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
          <Text style={styles.Exname}>등 운동 {'>'} Y 레이즈</Text>
        </View>
        <View style={styles.VideoBox}>
          <Image
            style={{width: '100%', height: '100%'}}
            source={{
              uri: 'https://blog.kakaocdn.net/dn/5MtX3/btrx6oIecql/R62xuXbArqxLwRijUpkE1k/img.gif',
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
            1. 가슴과 허리를 펴고 복부에 긴장을 준 상태로 바닥에 엎드린다.
          </Text>
          <Text style={styles.SubmenuText2}>
            2. 호흡을 내쉬면서 팔을 양 옆 방향으로 등과 평행을 이루도록
            들어준다.
          </Text>
          <Text style={styles.SubmenuText2}>
            3. 호흡을 들이 마시면서 천천히 시작 위치로 돌아간다.
          </Text>
        </View>
        <View style={{...styles.Submenu3, display: !waying ? 'flex' : 'none'}}>
          <Text style={styles.SubmenuText2}>
            1. 정확한 자세가 중요하므로 복부에 힘을 주어 운동중 상태를
            유지시킨다.
          </Text>
          <Text style={styles.SubmenuText2}>
            2. 시선은 정면이나 아래를 향하고 등이 굽거나 상체가 흔들리지 않도록
            한다.
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
    fontSize: 17,
    marginVertical: 2,
    marginHorizontal: 10,
  },
});

export default Traise;
