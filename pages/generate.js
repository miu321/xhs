import { useState } from "react";

export default function GeneratePage() {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [previewUrl, setPreviewUrl] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  return (
    <main className="min-h-screen px-4 py-10 bg-gray-50 text-gray-800">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-6 text-center">封面生成器</h1>

        {/* 上传图片 */}
        <div className="mb-4">
          <label className="block mb-2 font-medium">上传图片：</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>

        {/* 输入标题 */}
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

        {/* 生成按钮（当前无动作） */}
        <div className="text-center my-6">
          <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded">
            生成封面
          </button>
        </div>

        {/* 预览区域 */}
        {previewUrl && (
          <div className="text-center">
            <h2 className="text-lg font-semibold mb-2">封面预览：</h2>
            <div className="inline-block border p-2 rounded shadow">
              <img
                src={previewUrl}
                alt="预览图"
                className="max-w-xs rounded mb-2"
              />
              <p className="text-sm text-gray-700">{title || "示例标题"}</p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}