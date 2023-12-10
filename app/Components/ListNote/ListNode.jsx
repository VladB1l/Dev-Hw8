import styles from "./ListNote.module.css";
import IconSection from "../IconSection/IconSection";

function ListNote(props) {
  function RemoveNote(index) {
    let newList = [...props.list];
    newList.splice(index, 1);
    props.setList(newList);
  }

  function EditNote(index, text) {
    let name = prompt("Edit your note", `${text}`);
    if (name !== null && name.trim() !== "") {
      let newList = [...props.list];
      newList[index][0] = `${name}`;
      props.setList(newList);
    }
  }

  function handleCheckbox(index) {
    let newList = [...props.list];
    newList[index][1] = !newList[index][1];
    props.setList(newList);
  }

  return (
    <div>
      <ul className={styles.list}>
        {props.list.map((listitem, index) => (
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
