import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  ScrollView,
  Text,
  TouchableOpacity,
  Switch,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import {
  getProfiles,
  saveProfile,
  deleteProfile,
} from "../../../api/profileApi"; // ✅ API functions separated

export default function Profile() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phonenumber: "",
    address: "",
    notes: "",
    gender: "",
    agree: false,
  });

  const [formList, setFormList] = useState([]);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    loadList();
  }, []);

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const loadList = async () => {
    try {
      const data = await getProfiles();
      setFormList(data);
    } catch (err) {
      console.log("❌ Load Error", err);
    }
  };

  const saveData = async () => {
    if (!formData.gender) {
      Alert.alert("Validation", "Please select a gender");
      return;
    }

    try {
      const result = await saveProfile(formData, editId);
      Alert.alert(editId ? "Updated" : "Saved", result.message || "Success");

      setFormData({
        firstname: "",
        lastname: "",
        phonenumber: "",
        address: "",
        notes: "",
        gender: "",
        agree: false,
      });
      setEditId(null);
      loadList();
    } catch (error) {
      console.log("❌ Save Error", error);
      Alert.alert("Error", "Could not save data");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteProfile(id);
      Alert.alert("Deleted", "Profile deleted successfully");
      loadList();

      if (editId === id) {
        resetForm();
      }
    } catch (error) {
      console.log("❌ Delete Error", error);
    }
  };

  const editItem = (item) => {
    setFormData({
      firstname: item.firstname,
      lastname: item.lastname,
      phonenumber: item.phonenumber,
      address: item.address,
      notes: item.notes,
      gender: item.gender || "",
      agree: item.agree || false,
    });
    setEditId(item._id);
  };

  const resetForm = () => {
    setFormData({
      firstname: "",
      lastname: "",
      phonenumber: "",
      address: "",
      notes: "",
      gender: "",
      agree: false,
    });
    setEditId(null);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={formData.firstname}
        onChangeText={(text) => handleChange("firstname", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={formData.lastname}
        onChangeText={(text) => handleChange("lastname", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        keyboardType="phone-pad"
        value={formData.phonenumber}
        onChangeText={(text) => handleChange("phonenumber", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        value={formData.address}
        onChangeText={(text) => handleChange("address", text)}
      />
      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Notes"
        multiline
        numberOfLines={4}
        value={formData.notes}
        onChangeText={(text) => handleChange("notes", text)}
      />

      <Text style={styles.label}>Gender</Text>
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={formData.gender}
          onValueChange={(value) => handleChange("gender", value)}
        >
          <Picker.Item label="-- Select Gender --" value="" />
          <Picker.Item label="Male" value="Male" />
          <Picker.Item label="Female" value="Female" />
          <Picker.Item label="Other" value="Other" />
        </Picker>
      </View>

      <View style={styles.checkboxRow}>
        <Switch
          value={formData.agree}
          onValueChange={(value) => handleChange("agree", value)}
        />
        <Text style={styles.checkboxLabel}>
          I agree to the terms and conditions
        </Text>
      </View>

      <View style={styles.buttonWrapper}>
        <Button title={editId ? "Update" : "Save"} onPress={saveData} />
      </View>

      <Text style={styles.listTitle}>Saved Entries:</Text>
      {formList.map((item) => (
        <View key={item._id} style={styles.card}>
          <Text>👤 {item.firstname} {item.lastname}</Text>
          <Text>📞 {item.phonenumber}</Text>
          <Text>🏠 {item.address}</Text>
          <Text>📝 {item.notes}</Text>
          <Text>🧑 Gender: {item.gender}</Text>
          <Text>✅ Agreed: {item.agree ? "Yes" : "No"}</Text>

          <View style={styles.actionButtons}>
            <TouchableOpacity
              style={[styles.actionBtn, { backgroundColor: "blue" }]}
              onPress={() => editItem(item)}
            >
              <Text style={styles.actionText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.actionBtn, { backgroundColor: "red" }]}
              onPress={() => handleDelete(item._id)}
            >
              <Text style={styles.actionText}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
    flexGrow: 1,
    paddingTop: 40,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 15,
  },
  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  checkboxLabel: {
    marginLeft: 10,
    fontSize: 16,
  },
  buttonWrapper: {
    marginBottom: 20,
  },
  listTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 20,
  },
  card: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    backgroundColor: "#f9f9f9",
  },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  actionBtn: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  actionText: {
    color: "white",
    textAlign: "center",
  },
});
