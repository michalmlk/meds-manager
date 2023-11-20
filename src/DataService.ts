import { DocumentData, collection, getDocs, getFirestore } from 'firebase/firestore';
import { app } from './providers/AuthProvider';
import { getAuth } from 'firebase/auth';

export class DataService {
    public db = getFirestore(app);
    private auth = getAuth(app);

    async getAllMeds() {
        const data: Array<DocumentData> = [];
        const querySnapshot = await getDocs(collection(this.db, 'ownedMeds'));
        querySnapshot.forEach((q) => {
            const item = q.data();
            if (item.userId === this.auth.currentUser!.uid) {
                data.push(item);
            }
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
