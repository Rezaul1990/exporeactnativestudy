import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';

const General = () => {
  const [firstName, setFirstName] = useState('Christopher');
  const [lastName, setLastName] = useState('Davis');
  const [dob, setDob] = useState({ day: '02', month: '02', year: '2007' });
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [nokFirstName, setNokFirstName] = useState('Christopher');
  const [nokLastName, setNokLastName] = useState('Davis');
  const [nokPhone, setNokPhone] = useState('01234 567890');
  const [nokEmail, setNokEmail] = useState('chris@coacha.co.uk');
  const [relationship, setRelationship] = useState('Parent');

  const handleSubmit = async () => {
    const payload = {
      firstName,
      lastName,
      dob,
      phone,
      email,
      nok: {
        firstName: nokFirstName,
        lastName: nokLastName,
        phone: nokPhone,
        email: nokEmail,
        relationship,
      },
    };

    try {
      const response = await fetch('http://192.168.0.156:3000/api/memberprofile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok) {
        Alert.alert('Success', 'Profile submitted successfully!');
      } else {
        Alert.alert('Error', result.message || 'Something went wrong');
      }
    } catch (error) {
      console.error('Submit error:', error);
      Alert.alert('Error', 'Failed to connect to the server');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Member details */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Member details</Text>

        <View style={styles.row}>
          <Text style={styles.label}>First Name</Text>
          <TextInput value={firstName} onChangeText={setFirstName} style={styles.input} />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Last Name</Text>
          <TextInput value={lastName} onChangeText={setLastName} style={styles.input} />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>DOB</Text>
          <View style={styles.dobGroup}>
            <TextInput
              value={dob.day}
              onChangeText={(val) => setDob({ ...dob, day: val })}
              style={styles.dobInput}
              maxLength={2}
              keyboardType="numeric"
            />
            <TextInput
              value={dob.month}
              onChangeText={(val) => setDob({ ...dob, month: val })}
              style={styles.dobInput}
              maxLength={2}
              keyboardType="numeric"
            />
            <TextInput
              value={dob.year}
              onChangeText={(val) => setDob({ ...dob, year: val })}
              style={styles.dobInput}
              maxLength={4}
              keyboardType="numeric"
            />
          </View>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Member phone</Text>
          <TextInput value={phone} onChangeText={setPhone} style={styles.input} />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Member email</Text>
          <TextInput value={email} onChangeText={setEmail} style={styles.input} />
        </View>

        <Text style={styles.note}>
          Note: This member is a minor – NOKs please enter your information in the section below
        </Text>
      </View>

      {/* NOK details */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Primary Next of Kin details</Text>

        <View style={styles.row}>
          <Text style={styles.label}>First name</Text>
          <TextInput value={nokFirstName} onChangeText={setNokFirstName} style={styles.input} />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Last name</Text>
          <TextInput value={nokLastName} onChangeText={setNokLastName} style={styles.input} />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>NOK phone</Text>
          <TextInput value={nokPhone} onChangeText={setNokPhone} style={styles.input} />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>NOK email</Text>
          <TextInput value={nokEmail} onChangeText={setNokEmail} style={styles.input} />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Relationship</Text>
          <TextInput value={relationship} onChangeText={setRelationship} style={styles.input} />
        </View>

        <Text style={styles.note}>
          Note: This individual controls the information for this member.
        </Text>
      </View>

      {/* Submit Button */}
      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Submit Profile</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default General;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 20,
    paddingBottom: 60,
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    marginBottom: 20,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#0C4A7E',
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    gap: 8,
  },
  label: {
    width: 120,
    fontSize: 14,
    fontWeight: '600',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: '#f9f9f9',
  },
  dobGroup: {
    flexDirection: 'row',
    gap: 8,
    flex: 1,
  },
  dobInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    paddingVertical: 8,
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
  },
  note: {
    fontSize: 12,
    color: '#666',
    marginTop: 12,
  },
  button: {
    backgroundColor: '#0C4A7E',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
