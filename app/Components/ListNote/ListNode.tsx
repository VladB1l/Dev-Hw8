import styles from "./ListNote.module.css";
import IconSection from "../IconSection/IconSection";

function ListNote(props:any) {
  function RemoveNote(index:number) {
    let newList = [...props.list];
    newList.splice(index, 1);
    props.setList(newList);
  }

  function EditNote(index:number, text:string) {
    let name = prompt("Edit your note", `${text}`);
    if (name !== null && name.trim() !== "") {
      let newList = [...props.list];
      newList[index][0] = `${name}`;
      props.setList(newList);
    }
  }

  function handleCheckbox(index:number) {
    let newList = [...props.list];
    newList[index][1] = !newList[index][1];
    props.setList(newList);
  }

  return (
    <div>
      <ul className={styles.list}>
        {props.list.map((listitem:any, index:number) => (
          <li className={styles.listitem} key={index}>
            <div>
              <input
                type="checkbox"
                checked={listitem[1]}
                onChange={() => handleCheckbox(index)}
              />
              <p>{listitem[0]}</p>
            </div>
            <IconSection
              RemoveNote={RemoveNote}
              EditNote={EditNote}
              index={index}
              listitem={listitem}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListNote;
