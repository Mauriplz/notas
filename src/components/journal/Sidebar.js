import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/auth';
import { startAddNewNote } from '../../actions/notes';
import { JournalEntries } from './JournalEntries';

export const Sidebar = () => {

    const { displayName } = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(startLogout())
    }

    const handleNewEntry = () => {
        dispatch(startAddNewNote())
    }

    return (
        <aside className='journal__sidebar'>
            <div className='journal__sidebar-nav'>
                <h3>
                    <i className='fa fa-moon' />
                    <span> {displayName}</span>
                </h3>
                <button className='btn' onClick={handleLogout}> Logout </button>
            </div>

            <div className='journal__new-entry'
                onClick={handleNewEntry}
            >
                <i className='far fa-calendar-plus fa-5x' />
                <p className='mt-5'>New entry</p>
            </div>

            <JournalEntries />

        </aside>
    );
};
