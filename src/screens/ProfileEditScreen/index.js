// ProfileEditScreen.js

import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

const ProfileEditScreen = ({navigation}) => {
  const [username, setUsername] = useState(''); // Assuming just a username for simplicity

  const handleSave = () => {
    // Save the updated profile data here
    // For now, we'll just navigate back
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Username:</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
      />
      <Button title="Save Changes" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
  },
});

export default ProfileEditScreen;
