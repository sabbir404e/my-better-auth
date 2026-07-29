import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const DashboardPage = async() => {

    const session = await auth.api.getSession( {
        headers: await headers()
    });

    console.log("Session data in DashboardPage:", session);
    const user = session?.user;
    if(!user){
        return <div>Please sign in to access the dashboard</div>
    }
    return (
        <div>
            <h2>This is Dashboard Page</h2>
        </div>
    );
};

export default DashboardPage;