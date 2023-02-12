import {useState} from 'react'
import styles from "./Exercise.module.css";
import { saveExerciseNotesThunkActionCreator } from '../../Redux/action';
import { useDispatch,useSelector } from 'react-redux';
export default function () {

    const [noteBtn, setNotebtn]=useState("Save")
    const [noteData,setNoteData]=useState("")

    const dispatch=useDispatch()

    const data=useSelector((store)=>{
      return store.exercise_notes;
    })

    

    console.log(data)

    const addNoteData=()=>{
      dispatch(saveExerciseNotesThunkActionCreator(noteData))
      setNotebtn('Edit')
    }
  return (
    <div>
        <div style={{display:'flex',justifyContent:'space-between'}}>
            <h4 style={{margin:'0',color:'rgb(0, 84, 143)'}}>
                Today's Exercise Notes
            </h4>
            <p className={styles.ex_note_p}
            onClick={()=>{
              console.log(noteData)
              if(noteBtn==='Save'){
               addNoteData()

              }else{
                setNotebtn('Save')
              }
            }}
            >
              {noteBtn} Note

            </p>
        </div>
        <div style={{marginTop:'10px'}}>
            <textarea disabled={noteBtn==='Edit'} style={{width:'100%'}} name="" id="" cols="30" rows="6"
            value={noteData}
            onChange={(e)=>{
              setNoteData(e.target.value)
            }}
            ></textarea>
        </div>
    </div>
  )
}
