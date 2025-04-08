import React, { useEffect, useState } from 'react';
import './App.css';
import { Tab, Tabs } from '@mui/material';
import { SelectMissionComponent } from './components/select-mission.component';
import { MissionModel } from './models/mission.model';
import { ButtonsComponent } from './components/buttons.component';

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
    if (tabValue === 'buttons-component') { return <ButtonsComponent /> }

  }

  return (
    <>
      <Tabs onChange={handleTabChange}
        value={tabValue}>
        <Tab label="Select Mission" value='select-mission' />
        <Tab label="Buttons" value='buttons-component' />
      </Tabs>
      {renderTabs()}
    </>
  );
}

export default App;
