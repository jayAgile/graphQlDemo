import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useQuery} from '@apollo/client';
import {ROBOT_TOURNAMENTS} from '~/graphQL/Query';

interface Item {
  title: string;
}
const RobotTournaments = () => {
  const {data} = useQuery(ROBOT_TOURNAMENTS);

  const renderItem = ({item}: {item: Item}) => {
    return (
      <View style={styles.itemContainer}>
        <Text>{item.title}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{textAlign: 'center', fontSize: 20}}>
        Robot RobotTournaments
      </Text>
      <FlatList data={data?.currentSessions} renderItem={renderItem} />
      {/* <Text>{data.currentSessions}</Text> */}
    </SafeAreaView>
  );
};

export default RobotTournaments;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  itemContainer: {
    flex: 1,
    marginHorizontal: 10,
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 10,
    marginTop: 20,
    padding: 20,
  },
});
