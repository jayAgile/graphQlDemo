import AsyncStorage from '@react-native-async-storage/async-storage';

export async function storeData(key: any, value: any) {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.log('Saving Error', e);
  }
}

export async function getData(key: any) {
  try {
    const value = await AsyncStorage.getItem(key);
    return value != null ? value : null;
  } catch (e) {
    console.log('Reading Value', e);
  }
}

export async function removeData(key: any) {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.log('removing Error', e);
  }
}

export async function clearAllData() {
  try {
    await AsyncStorage.getAllKeys().then(keys =>
      AsyncStorage.multiRemove(keys),
    );
  } catch (e) {
    console.log('Allkey and multiremove error', e);
  }
}
