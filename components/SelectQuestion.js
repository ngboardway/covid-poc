import React, { useState } from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
} from 'react-native';
import Constants from 'expo-constants';

const SelectQuestion = ({ data, selectAction }) => {
  const Item = ({ id, title, selected }) => {
    return (
      <TouchableOpacity
        onPress={() => onSelect(id)}
        style={[
          styles.item,
          { backgroundColor: selected ? '#6e3b6e' : '#0065a4' },
        ]}
      >
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    );
  }

  const [selected, setSelected] = useState({});

  const onSelect = React.useCallback(
    id => {
      const newSelected = {};
      newSelected[id] = !selected[id];

      setSelected(newSelected);
      console.log('New selected: ', newSelected);
      selectAction(data[id - 1].title);
    },
    [selected],
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Item
            id={item.id}
            title={item.title}
            selected={!!selected[item.id]}
            onSelect={onSelect}
          />
        )}
        keyExtractor={item => item.id}
        extraData={selected}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  item: {
    backgroundColor: '#0065a4',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16
  },
  title: {
    fontSize: 20,
    color: '#fff'
  },
});

export default SelectQuestion;