"use client";
import React, { useMemo } from "react";
import dynamic from "next/dynamic";
import { ImageResize } from "quill-image-resize-module-ts";
import { Quill } from "react-quill";
import { ImageDrop } from "quill-image-drop-module";

const QuillNoSSRWrapper = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

Quill.register("modules/ImageResize", ImageResize);
Quill.register("modules/imageDrop", ImageDrop);

const QuillEditor = ({ content, setContent }: any) => {
  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ size: ["small", false, "large", "huge"] }, { header: "1" }, { header: "2" }],
          ["bold", "italic", "underline", "strike"],
          [{ color: [] }, { background: [] }],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ align: [] }, { indent: "+1" }, { indent: "-1" }, "image", "video"],
          ["code-block", "blockquote", "link"],
        ],
      },
      imageDrop: true,
      ImageResize: {
        parchment: Quill.import("parchment"),
        modules: ["Resize", "DisplaySize"],
      },
      history: {
        delay: 500,
        maxStack: 100,
        userOnly: true,
      },
    }),
    []
  );
  return (
    <QuillNoSSRWrapper
      className="m-4 h-[500px] w-full"
      modules={modules}
      placeholder="내용을 입력하세요"
      onChange={setContent}
      value={content}
      theme="snow"
    />
  );
};

export default QuillEditor;
