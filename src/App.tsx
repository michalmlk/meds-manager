import { useEffect, useState } from 'react';
import { DataService } from './DataService.ts';
import { DocumentData } from 'firebase/firestore';
import './App.css';

function App() {
    const [testData, setTestData] = useState<DocumentData>();
    const service = new DataService();

    useEffect(() => {
        const getData = async () => {
            const _data = await service.getAllMeds();
            setTestData(_data);
        };
        getData();
    }, []);

    return (
        <>
            <div>Test</div>
            <ul>{testData && testData.map((d) => <li key={d.id}>{d.name}</li>)}</ul>
        </>
    );
}

export default App;
