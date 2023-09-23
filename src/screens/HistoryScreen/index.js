import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

const historyData = [
  {
    date: '2023-09-18',
    tasks: [
      {id: 1, name: 'Sample Task 1', completed: true},
      {id: 2, name: 'Sample Task 2', completed: false},
    ],
  },
  {
    date: '2023-09-17',
    tasks: [
      {id: 1, name: 'Sample Task 1', completed: false},
      {id: 2, name: 'Sample Task 2', completed: true},
    ],
  },
];

const HistoryScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={historyData}
        keyExtractor={item => item.date}
        renderItem={({item}) => (
          <View style={styles.entry}>
            <Text style={styles.date}>{item.date}</Text>
            {item.tasks.map(task => (
              <View key={task.id} style={styles.task}>
                <Text>
                  {task.name} - {task.completed ? 'Completed' : 'Incomplete'}
                </Text>
              </View>
            ))}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  entry: {
    marginBottom: 20,
  },
  date: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  task: {
    marginBottom: 5,
  },
});

export default HistoryScreen;
