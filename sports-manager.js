import { db, logAction } from './firebase-config.js';
import { collection, addDoc, updateDoc, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

/**
 * Adds a new sports event with location and time 
 */
export const addSportsEvent = async (eventName, location, time, category) => {
    try {
        const docRef = await addDoc(collection(db, "events"), {
            name: eventName,
            location: location,
            time: time,
            category: category,
            createdAt: new Date()
        });
        logAction("ADD_EVENT", { id: docRef.id, eventName }); // Requirement for logging [cite: 44]
        return docRef.id;
    } catch (error) {
        console.error("Error adding event:", error);
    }
};

/**
 * Updates or deletes sports information [cite: 21, 27]
 */
export const deleteSportsEvent = async (eventId) => {
    try {
        await deleteDoc(doc(db, "events", eventId));
        logAction("DELETE_EVENT", { eventId }); // Requirement for logging [cite: 44]
    } catch (error) {
        console.error("Error deleting event:", error);
    }
};