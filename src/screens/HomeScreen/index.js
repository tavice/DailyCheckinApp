import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const HomeScreen = () => {
  const [tasks, setTasks] = useState([
    {id: 1, name: 'Sample Task 1', completed: false},
    {id: 2, name: 'Sample Task 2', completed: false},
  ]);

  const toggleTaskCompletion = taskId => {
    setTasks(
      tasks.map(task =>
        task.id === taskId ? {...task, completed: !task.completed} : task,
      ),
    );
  };

  const handleSubmit = () => {
    console.log('Tasks saved for the day:', tasks);
  };

  return (
    <View style={styles.container}>
      {tasks.map(task => (
        <View key={task.id} style={styles.taskRow}>
          <CheckBox
            value={task.completed}
            onValueChange={() => toggleTaskCompletion(task.id)}
          />
          <Text>{task.name}</Text>
        </View>
      ))}
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  taskRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default HomeScreen;
