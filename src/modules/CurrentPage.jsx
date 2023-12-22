import * as React from 'react'
import Profile from './profile'
import Users from './navModules/Users';
import Objects from './navModules/Objects';
import Drivers from './navModules/Drivers';
import Notifications from './navModules/Notifications';
import Tasks from './navModules/Tasks';


export default function CurrentPage(props) {
    function renderComponent(val) {
        switch (val) {
            case 'users': return <Users />
            case 'objects': return <Objects />
            case 'drivers': return <Drivers />
            case 'Notifications': return <Notifications />
            case 'Tasks': return <Tasks />
            default: <Profile />
        }
    }
    return (
        <div>
            {renderComponent(props.page)}
        </div>
    )
}