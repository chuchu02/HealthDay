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

const Plank = ({navigation}) => {
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
          <Text style={styles.Exname}>복근 운동 {'>'} 플랭크</Text>
        </View>
        <View style={styles.VideoBox}>
          <Image
            style={{width: '100%', height: '100%'}}
            source={{
              uri: 'https://mblogthumb-phinf.pstatic.net/MjAxOTA4MjVfMTY1/MDAxNTY2NzE5MDE0ODA5.QYW8IOjvOqISVk42jeQ9iu6EpXvSbWvH3Al2C_F818wg.n33b_K1dPyP62Ur7-gGm2F3ity6iefnqSK1i8_GBeh4g.GIF.hsg474/5.gif?type=w800',
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
            1. 바닥에 엎드린 상태에서 팔꿈치와 발끝을 대고 몸을 지면에서 띄운다.
          </Text>
          <Text style={styles.SubmenuText2}>
            2. 그 자세에서 30초 동안 유지한다.
          </Text>
        </View>
        <View style={{...styles.Submenu3, display: !waying ? 'flex' : 'none'}}>
          <Text style={styles.SubmenuText2}>
            1. 시선은 정면을 응시하며 몸을 일직선을 만들게 노력한다.
          </Text>
          <Text style={styles.SubmenuText2}>
            2. 운동시 몸을 움직이지 말고 고정된 자세를 유지한다.
          </Text>
          <Text style={styles.SubmenuText2}>
            3. 휴식시간은 최대 1분으로 제한하여 휴식시간이 길지 않도록 한다.
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

export default Plank;
