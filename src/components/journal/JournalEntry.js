import React from 'react';
import { useDispatch } from 'react-redux';
import { activeNote } from '../../actions/notes';
import moment from 'moment';

export const JournalEntry = ({id, title, content, date, url}) => {

    const dispatch = useDispatch();

    const noteDate = moment(date);

    const handleActiveNote = () =>{
        dispatch( activeNote({
            id,title,content, date, url
        }) )
    }

    return (
        <div className='journal__entry' onClick={handleActiveNote}>
            
            {
                url && (
                    <div
                        className='journal__entry-picture'
                        style={{
                            backgroundSize: 'cover',
                            backgroundImage : `url(${url})`,
                            backgroundPositionX: 'center'
                        }}
                    >
                    </div>
                )
            }
           
            <div className='journal__entry-body'>
                <p className='journal__entry-title'>
                    {title}
                </p>
                <p className='journal__entry-content'>
                    {content}
                </p>

            </div>
            

            <div className='journal__entry-date-box'>
                 <span>{noteDate.format('dddd')}</span>
                <h4>{noteDate.format('Mo')}</h4>
            </div>
                

            
        </div>
    );
};
