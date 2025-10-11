import React from 'react'
import SettingsForm from './_components/settings-form'

export const metadata = {
    title: 'Settings | CMA Admin',
    description: 'Admin settings page for Car Marketplace Admin',
}

const SettingsPage = () => {
    return (
        <div className='p-6'>
            <h1 className='text-2xl font-bold'>Settings</h1>
            <SettingsForm />
        </div>
    )
}

export default SettingsPage