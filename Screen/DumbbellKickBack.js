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

const DumbbellKickBack = ({navigation}) => {
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
          <Text style={styles.Exname}>팔 운동 {'>'} 덤밸 킥백</Text>
        </View>
        <View style={styles.VideoBox}>
          <Image
            style={{width: '100%', height: '100%'}}
            source={{
              uri: 'https://good4meto.com/wp-content/uploads/2022/09/ezgif.com-gif-maker.gif',
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
            1. 한쪽 팔과 다리를 벤치에 올린 후 상체를 숙이고 등은 곧게 편 상태로
            유지한다.
          </Text>
          <Text style={styles.SubmenuText2}>
            2. 한쪽 손에 덤벨을 잡고 이두근 안쪽을 옆구리에 고정시킨다.
          </Text>
          <Text style={styles.SubmenuText2}>
            3. 팔이 몸과 일직선을 이룰 때 까지 덤벨을 들어올린 후 1~2초간
            정지한다.
          </Text>
          <Text style={styles.SubmenuText2}>
            4. 천천히 저항을 느끼면서 덤벨을 내려 처음 자세로 돌아온다.
          </Text>
        </View>
        <View style={{...styles.Submenu3, display: !waying ? 'flex' : 'none'}}>
          <Text style={styles.SubmenuText2}>
            1. 팔꿈치를 최대한 고정하여 어꺠관절의 개입을 최소화 한다.
          </Text>
          <Text style={styles.SubmenuText2}>
            2. 운동시 몸을 움직이지 말고 고정된 자세를 유지한다.
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

export default DumbbellKickBack;
