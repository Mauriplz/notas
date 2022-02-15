import React from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { startDeleteNote, startUpdateNote, startUploadImage } from '../../actions/notes';

export const NotesAppbar = () => {

  const dispatch = useDispatch()

  const {active:note} = useSelector(state=>state.notes)
  const {date} = note
  const dateFormat = moment(date)

  const handleUpdateNote = () =>{
    dispatch( startUpdateNote(note) )
  }

  const handleUploadImage = () =>{
    document.querySelector('#upload_file').click()
  }

  const handleFileChange = ({target})=>{

    // console.log(target.files[0]);
    const file = target.files[0]

    if(file){
      dispatch(startUploadImage( file ))
    }

  }

  const handleDeleteNote = () =>{
    dispatch(startDeleteNote(note.id))
  }

  return (
    <div className='notes__appbar'>

        <span> {dateFormat.format('LL')}</span>

        <input
                style={{display:'none'}}
                type="file"
                id="upload_file"
                onChange={handleFileChange}
            />

        <div>
           <button className='btn btn-danger' onClick={handleDeleteNote}>
                Delete
            </button>
            <button className='btn' onClick={handleUploadImage} >
                Picture
            </button>
            
            <button className='btn' onClick={handleUpdateNote}>
                Save
            </button>
        </div>

    </div>
  );
};
