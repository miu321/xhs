import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white px-6 py-10 text-gray-800">
      {/* 顶部介绍区 */}
      <section className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          一键生成高点击小红书封面图
        </h1>
        <p className="text-base md:text-lg text-gray-600">
          模板 + 图片 + 爆款文案 = 吸睛笔记，三步搞定！
        </p>
        <div className="mt-6">
          <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded text-lg">
            立即开始
          </button>
        </div>
      </section>

      {/* 模板展示区 */}
      <section className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">热门模板示例</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            "template1.jpg",
            "template2.jpg",
            "template3.jpg",
            "template4.jpg",
            "template5.jpg",
            "template6.jpg",
          ].map((src, index) => (
            <div
              key={index}
              className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition"
            >
              <Image
                src={`/${src}`}
                alt={`模板 ${index + 1}`}
                width={400}
                height={600}
                className="w-full h-auto"
                priority={index === 0}
              />
              <div className="p-4 text-center">
                <button className="border px-4 py-2 rounded hover:bg-gray-100">
                  使用此模板
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}