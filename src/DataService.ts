import { DocumentData, collection, getDocs, getFirestore } from 'firebase/firestore';
import { app } from './providers/AuthProvider';

export class DataService {
    private db = getFirestore(app);

    async getAllMeds() {
        const data: Array<DocumentData> = [];
        const querySnapshot = await getDocs(collection(this.db, 'ownedMeds'));
        querySnapshot.forEach((q) => {
            const item = q.data();
            data.push(item);
        });
        return data;
    }

    async getLocations() {
        const data: Array<DocumentData> = [];
        const querySnapshot = await getDocs(collection(this.db, 'locations'));
        querySnapshot.forEach((q) => {
            const item = q.data();
            data.push(item);
        });
        return data;
    }
}
