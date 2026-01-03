import { auth, logAction } from './firebase-config.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

/**
 * Register a new user account 
 */
export const registerUser = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        // Requirement: Logging is a must for every action [cite: 44]
        logAction("USER_REGISTER", { email: email }); 
        return userCredential.user;
    } catch (error) {
        console.error("Registration Error:", error.message);
        throw error;
    }
};

/**
 * Login for both User and Admin modules [cite: 19, 23]
 */
export const login = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        // Requirement: Use JavaScript logging library/logic for actions [cite: 44]
        logAction("LOGIN_SUCCESS", { email: email }); 
        return userCredential.user;
    } catch (error) {
        console.error("Login Error:", error.message);
        throw error;
    }
};