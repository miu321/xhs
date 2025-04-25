import { useState, useRef } from "react";
import html2canvas from "html2canvas";

export default function GeneratePage() {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [previewUrl, setPreviewUrl] = useState("");
  const previewRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleDownload = async () => {
    if (!previewRef.current) return;
    const canvas = await html2canvas(previewRef.current);
    const link = document.createElement("a");
    link.download = "xhs-cover.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <main className="min-h-screen px-4 py-10 bg-gray-50 text-gray-800">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-6 text-center">封面生成器</h1>

        <div className="mb-4">
          <label className="block mb-2 font-medium">上传图片：</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-medium">输入标题：</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="请输入你的标题关键词"
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div className="text-center my-6">
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded"
            onClick={handleDownload}
          >
            生成封面并下载
          </button>
        </div>

        {previewUrl && (
          <div className="text-center">
            <h2 className="text-lg font-semibold mb-2">封面预览：</h2>
            <div
              ref={previewRef}
              className="relative inline-block w-[300px] h-[400px] rounded overflow-hidden shadow border"
            >
              <img
                src={previewUrl}
                alt="封面图"
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
              />
              <div className="absolute bottom-4 left-0 right-0 z-10 text-center px-3">
                <p className="text-white text-xl font-bold bg-black/60 inline-block px-3 py-1 rounded">
                  {title || "示例标题"}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}