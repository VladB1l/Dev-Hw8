"use client";
import { useSearchParams } from "next/navigation";
import styles from "./page.module.css";
import { useEffect, useState, useRef } from "react";


export default function Page({ params }: { params: { slug: string } }) {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const index = parseInt(id ?? "0", 10);

  const decodedSlug = decodeURIComponent(params.slug);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [list, setList] = useState(() => {
    try{
      const listValue = localStorage.getItem("ListInfo");
      return listValue ? JSON.parse(listValue) : [];
    }catch(error){}
  });


  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, []);


  function FuncResize(elem: any) {
    const updatedList = [...list];
    updatedList[index][2] = elem.value;
    setList(updatedList);
    localStorage.setItem("ListInfo", JSON.stringify(list));
  }



  return (
    <div className={styles.main}>
      <h2>{decodedSlug} :</h2>
      <div className={styles.note_content}>
        <textarea
          ref={textareaRef}
          value={list[index][2]}
          onChange={(e) => FuncResize(e.target)}
          placeholder="Type something ..."
          spellCheck="false"
        />
      </div>
    </div>
  );
}
