import { collection, addDoc } from 'firebase/firestore';
import db from '../firebase/FirebaseConfig';

const firestore = {
  addDoc: async (appointmentData) => {
    try {
      console.log('addDoc method called with data:', appointmentData);
      const appointmentsCollection = collection(db, 'appointments');
      await addDoc(appointmentsCollection, appointmentData);
      console.log('Appointment saved successfully!');
    } catch (error) {
      console.error('Error saving appointment:', error.message);
      throw error; // Rethrow the error to propagate it to the calling code
    }
  },

addSampleData: async () => {
    try {
      const docRef = await addDoc(collection(db, 'appointments'), { 
        name: 'John Doe',
        email: 'kenaa@example.com',
        phone: '1234567890',
        address: '123 Main St',
        city: 'New York',
      });
      console.log('Appointment saved successfully!');
    } catch (error) {
      console.error('Error saving appointment:', error.message);
    }
  },
}
export default firestore;
