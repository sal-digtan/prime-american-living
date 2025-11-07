'use client';

import React, { useState } from 'react'
import AgentDashboard from '@/app/components/agent_dashboard';
import { LocationContext } from '@/app/context/LocationContext';

const Page = () => {

    const [locationSearch, setLocationSearch] = useState('3911 Firestone Blvd, South Gate, CA 90280, United States')

    return (
        <div>
            <LocationContext.Provider value={{ locationSearch, setLocationSearch }}>
                <AgentDashboard />
            </LocationContext.Provider>
        </div>
    )
}

export default Page