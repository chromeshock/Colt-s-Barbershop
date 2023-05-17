import { doc, addDoc } from 'firebase/firestore';
import db from './FirebaseConfig';

const Firestore = {
  addDoc: async (appointmentData) => {
    try {
      // Check if the 'id' property exists
      if (!appointmentData.hasOwnProperty('id')) {
        throw new Error("Missing 'id' property in appointmentData");
      }

      // Check if the 'id' property has a valid value
      if (!appointmentData) {
        throw new Error("Invalid 'id' value in appointmentData");
      }

      const docRef = doc(db, 'appointments', appointmentData.id);
      await addDoc(docRef, appointmentData);
      console.log('Appointment saved successfully!');
    } catch (error) {
      console.error('Error saving appointment:', error);
      throw error; // Rethrow the error to propagate it to the calling code
    }
  },
};

export default Firestore;
