import React, { useState } from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
} from 'react-native';
import SelectButton from './SelectButton';

const SelectQuestion = ({ data, selectAction }) => {
  const [selected, setSelected] = useState({});

  const onSelect = React.useCallback(
    id => {
      const newSelected = {};
      newSelected[id] = !selected[id];

      setSelected(newSelected);
      selectAction(data[id - 1].title);
    },
    [selected],
  );

  const renderButton = ({ index, item }) => {
    return (
      <SelectButton
        id={item.id}
        title={item.title}
        selected={!!selected[item.id]}
        selectAction={onSelect}
      />
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderButton}
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