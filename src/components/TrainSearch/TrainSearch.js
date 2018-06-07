import React from 'react';
import DatePicker from '../Widgets/DatePicker';
import TimePicker from '../Widgets/TimePicker';

const TrainSearch = () => {
    return (
        <div>
            Train
            <DatePicker label='Train Time'></DatePicker>
            <TimePicker></TimePicker>
        </div>
    );
};

export default TrainSearch;