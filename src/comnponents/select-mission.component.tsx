import React, { useEffect, useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import { MissionModel } from '../models/mission.model';

interface Props { missions: MissionModel[] }

export function SelectMissionComponent({ missions }: Props) {
    const [selected, setSelected] = useState<MissionModel | null>(null);

    useEffect(() => {
        setSelected((missions && missions.length && missions[0]) || null);
    }, [missions]);

    const handleChange = (event) => {
        setSelected(event.target.value); // Directly setting the selected object
    };

    return (<>
        <Typography component='h1' align='center'>Select Mission</Typography>

        <FormControl fullWidth>
            {/* <InputLabel>Select a fruit</InputLabel> */}
            <Select
                value={selected ?? ""}
                onChange={handleChange}
                renderValue={(selected) => (selected)?.name || ""}
            >
                {missions.map((missionItem) => (
                    <MenuItem key={missionItem.id} value={missionItem as any}>
                        {missionItem.name}
                    </MenuItem>
                ))}
            </Select>
            {selected && <p>Selected: {JSON.stringify(selected)}</p>}
        </FormControl>

    </>)
}