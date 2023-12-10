import { Icon } from "@iconify/react";
import Link from "next/link";
import styles from "./IconSection.module.css";

export default function IconSection(props) {
  return (
    <div className={styles.icons}>
      <span>
        <Icon
          onClick={() => props.EditNote(props.index, props.listitem[0])}
          icon="octicon:pencil-24"
        />
      </span>
      <span>
        <Icon
          onClick={() => props.RemoveNote(props.index)}
          icon="solar:trash-bin-minimalistic-outline"
        />
      </span>
      <Link href={{
        pathname:`Notes/${props.listitem[0]}`,
        query: {id : `${props.index}`}
      }}>
        <span>
          <Icon icon="vaadin:arrow-forward" />
        </span>
      </Link>
    </div>
  );
}
