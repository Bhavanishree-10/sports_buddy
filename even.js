// your code goes here
import { db } from './config.js';
import { collection, addDoc, updateDoc, deleteDoc, doc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { logAction } from '../logger.js';

export const addEvent = async (userEmail, eventData) => {
    try {
        await addDoc(collection(db, "events"), {
            ...eventData,
            createdBy: userEmail,
            createdAt: serverTimestamp()
        });
        logAction(userEmail, "ADD_EVENT", "SUCCESS");
    } catch (error) {
        logAction(userEmail, "ADD_EVENT", `ERROR: ${error.message}`);
    }
};

export const removeEvent = async (userEmail, eventId) => {
    try {
        await deleteDoc(doc(db, "events", eventId));
        logAction(userEmail, "DELETE_EVENT", "SUCCESS");
    } catch (error) {
        logAction(userEmail, "DELETE_EVENT", `ERROR: ${error.message}`);
    }
};