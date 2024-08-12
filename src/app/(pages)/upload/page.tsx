"use client";
import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import "react-quill/dist/quill.snow.css";
import { ImageResize } from "quill-image-resize-module-ts";
import { Quill } from "react-quill";
import { ImageDrop } from "quill-image-drop-module";
Quill.register("modules/ImageResize", ImageResize);
Quill.register("modules/imageDrop", ImageDrop);
const QuillNoSSRWrapper = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const Upload = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
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

  const handleSubmit = () => {
    localStorage.setItem("title", JSON.stringify(title));
    localStorage.setItem("content", JSON.stringify(content));
    const postContent = {
      title,
      content,
    };
    console.log(postContent);
  };

  return (
    <div className=" m-4 ml-12 mr-12">
      <h1 className=" mt-8 m-4 mb-20 text-xl text-red-400 font-bold">전체 게시글</h1>
      <div className="flex mb-10">
        <h2 className="text-xl ml-4 text-red-400 font-bold p-1">제목</h2>
        <input
          className=" border border-red-400 ml-5 rounded-sm w-[500px]"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="flex items-center flex-col">
        <QuillNoSSRWrapper
          className="m-4 max-w-1000px w-full h-[500px]"
          modules={modules}
          placeholder="내용을 입력하세요"
          onChange={(test) => console.log(test)}
          value={content || ""}
        />
        <div className="flex justify-center w-full mt-4">
          <button onClick={handleSubmit} className="mt-10 m-4 p-2 bg-red-300 text-white rounded-md">
            글 올리기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Upload;
