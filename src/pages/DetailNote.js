import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import NoteAPI from "../config/NoteAPI";

export default function DetailNote() {
   const { id } = useParams()
   const [note, setNote] = useState({})

   useEffect(() => {
      NoteAPI.findById(id).then((res) => {
         setNote(res)
         // console.log(res);
      })
   }, [])

   return (
         <div id="main" style={{display: 'flex', flexDirection: 'column', justifyContent: "center"}}>
            <h1 id="detail-title">{note.note_title}</h1>
            <h2 id="detail-date">{note.note_date}</h2>
            <p id="detail-content">
               {note.note_content}
            </p>
         </div>
      );
}

