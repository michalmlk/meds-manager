import { initializeApp } from 'firebase/app';
import { DocumentData, collection, getDocs, getFirestore } from 'firebase/firestore';
import { firebaseConfig } from '../config';

export class DataService {
    private app = initializeApp(firebaseConfig);
    private db = getFirestore(this.app);

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
