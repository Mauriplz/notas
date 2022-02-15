
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activeNote } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';
import { NotesAppbar } from './NotesAppbar';
export const NotesScreen = () => {

    const dispatch = useDispatch()

    const {active:note} = useSelector(state=>state.notes)

    const {formValues, handleInputChange, reset} = useForm(note)
    const {title, content} = formValues

    const idRef = useRef(note.id)

    useEffect(()=>{
        if(idRef.current !== note.id){
             reset(note)
             idRef.current = note.id
        }
    }, [note, reset])

    useEffect(()=>{
        dispatch( activeNote( {...formValues} ) )
    }, [formValues, dispatch])

  return (
      <div className='notes__main-content'>

        <NotesAppbar />

        <div className='notes__content'>

            <input
                className='notes__title-input'
                type='text'
                placeholder='Some awesome title'
                autoComplete='off'
                name='title'
                value={title}
                onChange={handleInputChange}
            />
            <textarea
                className='notes__textarea'
                placeholder='What happened toady'
                name="content"
                value={content}
                onChange={handleInputChange}
            >
            </textarea>

            {
                (note.url) && 
                (
                    <div className='notes__image'>
                        <img
                            src={note.url}
                            alt='imagen' 
                        />

                    </div>
                )
            }
            

        </div>

      </div>
  );
};
