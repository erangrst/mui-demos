import React, { useEffect, useState } from 'react';
import { Checkbox, FormControl, ListItemText, MenuItem, Select, Typography } from '@mui/material';
import { MissionModel } from '../models/mission.model';

interface Props { missions: MissionModel[] }

export function SelectMissionComponent({ missions }: Props) {
    const [selectedSingleMission, setSelectedSingleMission] = useState<MissionModel | null>(null);
    const [selectedMultiMissions, setSelectedMultiMissions] = React.useState<MissionModel[]>([]);

    useEffect(() => {
        setSelectedSingleMission((missions && missions.length && missions[0]) || null);
    }, [missions]);

    const handleChange = (event) => {
        setSelectedSingleMission(event.target.value);
    };

    const onCheckboxChange = (mission: MissionModel, event) => {
        const { target: { checked }, } = event;
        console.log('%c handleMultiChange value', 'background-color: yellow', { mission, event, checked });

        if (checked) {
            const tempPersonNames: MissionModel[] = [...(selectedMultiMissions || []), mission].sort((l, r) => l.name.localeCompare(r.name));
            setSelectedMultiMissions(tempPersonNames);
        }
        else {
            const tempPersonNames: MissionModel[] = selectedMultiMissions.filter(item => item.id !== mission.id);
            setSelectedMultiMissions(tempPersonNames);
        }
    }

    return (<>
        <Typography variant='h4' align='center'>Select Mission</Typography>

        <FormControl fullWidth>
            <Select
                value={selectedSingleMission ?? ""}
                onChange={handleChange}
                renderValue={(selected) => (selected)?.name || ""}
            >
                {missions.map((missionItem) => (
                    <MenuItem key={missionItem.id} value={missionItem as any}>
                        {missionItem.name}
                    </MenuItem>
                ))}
            </Select>
            {selectedSingleMission && <p>Selected: {JSON.stringify(selectedSingleMission)}</p>}
        </FormControl>

        {/* ========================================================================================================================= */}
        {/* ========================================================================================================================= */}
        {/* ========================================================================================================================= */}

        <Typography variant='h4' align='center' style={{ margin: '16px 0 16px 0' }}>Select Multi Mission</Typography>

        <FormControl fullWidth>
            <Select value={selectedMultiMissions}
                renderValue={(selected) => (selected || []).map(item => item.name).join(', ')}
            >
                {missions.map((missionItem) => (

                    <MenuItem key={missionItem.id} value={missionItem as any}>
                        <Checkbox checked={(selectedMultiMissions || []).map(item => item.id).includes(missionItem.id)}
                            onChange={(event) => onCheckboxChange(missionItem, event)} />
                        <ListItemText primary={missionItem.name} />
                    </MenuItem>
                ))}
            </Select>
            {selectedSingleMission && <p>Selected: {JSON.stringify(selectedMultiMissions)}</p>}
        </FormControl>
    </>)
}