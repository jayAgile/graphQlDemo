import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {SINGLE_USER} from '../../graphQL/Query';
import {ChapterItem} from '../../components/ChapterItem';
import {useQuery} from '@apollo/client';
import {getData} from '../../utils/AsyncStorageHelper';
import {StorageKey} from '../../constants/common';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
import {logOut} from '~/redux/slices/auth/authSlice';

export default function Home({navigation}) {
  const {data, loading} = useQuery(SINGLE_USER);

  const dispatch = useDispatch();

  return (
    <SafeAreaView>
      <Text>{data?.getUser?.email}</Text>
      <Text>{data?.getUser?.nickname}</Text>
      <Button title="log Out" onPress={() => dispatch(logOut())} />
      <Button
        title="Robot Tournament"
        onPress={() => navigation.navigate('RobotTournaments')}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
