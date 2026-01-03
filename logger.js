// Modular logging utility [cite: 30, 44]
export const logAction = (userEmail, action, status) => {
    const logEntry = {
        timestamp: new Date().toISOString(),
        user: userEmail || 'Anonymous',
        action: action,
        status: status
    };
    
    // Output to console as per JS logging standards [cite: 44]
    console.log(`[LOG]: ${logEntry.timestamp} - ${logEntry.user} performed ${logEntry.action} (${logEntry.status})`);
    
    // Optional: You can also push this logEntry to a 'logs' collection in Firestore [cite: 42]
};