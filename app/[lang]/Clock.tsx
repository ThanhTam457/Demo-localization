'use client'
import React from 'react';
import {useState} from 'react';

const Clock = () => {
    const [time, setTine] = useState(new Date);


    return (
        <div className="text-xl">{time.toLocaleTimeString()}</div>
      );
}
 
export default Clock;