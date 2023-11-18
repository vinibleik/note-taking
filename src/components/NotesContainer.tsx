import "./NotesContainer.css";
import NotesModel from "../models/NotesModel";
import { IonItem, IonLabel, IonList } from "@ionic/react";

interface NotesContainerProps {
  tag?: string;
}

const NotesContainter: React.FC<NotesContainerProps> = ({ tag }) => {
  const notes = tag ? NotesModel.getNotesByTag(tag) : NotesModel.getNotes();

  return (
    <IonList>
      {notes.map((note, index) => {
        return (
          <IonItem
            key={index}
            routerDirection="none"
            detail={false}
            routerLink={`/note/${note.id}`}
          >
            <IonLabel>{note.title}</IonLabel>
          </IonItem>
        );
      })}
    </IonList>
  );
};

export default NotesContainter;
