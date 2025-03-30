import React, { useEffect, useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Tab, Tabs } from '@mui/material';
import { SelectMissionComponent } from './comnponents/select-mission.component';
import { MissionModel } from './models/mission.model';

function App() {

  const [missions, setMissions] = useState<MissionModel[]>([]);
  const [tabValue, setTabValue] = React.useState<string>('select-mission');

  useEffect(() => {
    const missions: MissionModel[] = [
      { id: 'm1', name: 'mission-1' },
      { id: 'm2', name: 'mission-2' },
      { id: 'm3', name: 'mission-3' },
      { id: 'm4', name: 'mission-4' },
      { id: 'm5', name: 'mission-5' },
    ]

    setMissions(missions);
  }, []);

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  };

  function renderTabs() {
    if (tabValue === 'select-mission') { return <SelectMissionComponent missions={missions} /> }
  }

  return (
    <>
      <Tabs onChange={handleTabChange}
        value={tabValue}>
        <Tab label="Select Mission" value='select-mission' />
      </Tabs>
      {renderTabs()}
    </>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
