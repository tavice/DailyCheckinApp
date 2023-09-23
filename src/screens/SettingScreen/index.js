import React, {useState} from 'react';
import {View, Text, TextInput, Button, Modal, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import PushNotification from 'react-native-push-notification';

const SettingsScreen = () => {
  const navigation = useNavigation();

  // State for tasks management
  const [tasks, setTasks] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [newTask, setNewTask] = useState('');
  const [editingTaskIndex, setEditingTaskIndex] = useState(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Function to handle addition of tasks
  const handleAddTask = () => {
    if (newTask) {
      setTasks(prevTasks => [...prevTasks, newTask]);
      setNewTask('');
      setModalVisible(false);
    }
  };

  // Function to open the modal for editing tasks
  const openEditModal = index => {
    setNewTask(tasks[index]);
    setEditingTaskIndex(index);
    setModalVisible(true);
  };

  // Function to handle editing of tasks
  const handleEditTask = () => {
    if (editingTaskIndex !== null && newTask) {
      const updatedTasks = [...tasks];
      updatedTasks[editingTaskIndex] = newTask;
      setTasks(updatedTasks);
      setNewTask('');
      setEditingTaskIndex(null);
      setModalVisible(false);
    }
  };

  //Function to handle notification

  const scheduleNotification = () => {
    PushNotification.localNotificationSchedule({
      message: 'Reminder for your task!',
      date: selectedDate,
      allowWhileIdle: false,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 24, marginBottom: 20}}>Profile & Settings</Text>

      {/* Profile Details Section */}
      <View>
        <Text>Name: [Username]</Text>
        <Button
          title="Edit Profile"
          onPress={() => {
            navigation.navigate('ProfileEdit');
          }}
        />
      </View>

      {/* Task Management Section */}
      <Modal
        visible={isModalVisible}
        onRequestClose={() => setModalVisible(false)}
        animationType="slide">
        <View style={styles.modalContent}>
          <Text>Add/Edit Task</Text>
          <TextInput
            placeholder="Enter task"
            value={newTask}
            onChangeText={setNewTask}
            style={styles.input}
          />
          <Button
            title={editingTaskIndex !== null ? 'Save' : 'Add'}
            onPress={editingTaskIndex !== null ? handleEditTask : handleAddTask}
          />
          <Button title="Cancel" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>

      <View style={styles.tasksList}>
        <Text>Your Tasks:</Text>
        {tasks.map((task, index) => (
          <View key={index} style={styles.taskItem}>
            <Text>{task}</Text>
            <View style={styles.taskActions}>
              <Button title="Edit" onPress={() => openEditModal(index)} />
              <Button
                title="Delete"
                onPress={() => {
                  setTasks(prevTasks =>
                    prevTasks.filter((t, i) => i !== index),
                  );
                }}
              />
            </View>
          </View>
        ))}
        <Button title="Add Task" onPress={() => setModalVisible(true)} />
      </View>

      {/* Reminders Section */}
      <View>
        <Text>Reminders:</Text>

        <View>
          <Text>Reminders:</Text>
          <Button
            title="Set Reminder"
            onPress={() => setDatePickerVisibility(true)}
          />
          {isDatePickerVisible && (
            <DateTimePicker
              value={selectedDate}
              mode="datetime"
              onChange={(event, date) => {
                setDatePickerVisibility(false);
                setSelectedDate(date);
                scheduleNotification();
              }}
            />
          )}
        </View>

        {/* Other Settings */}
        <Button
          title="Other Settings"
          onPress={() => {
            /* TODO: Navigate to Other Settings Screen */
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  modalContent: {
    margin: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
  },
  tasksList: {
    marginTop: 20,
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  taskActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default SettingsScreen;
