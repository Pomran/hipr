export default function Page() {
  return (
    <section className="animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out py-4 max-w-4xl mx-auto">
      
      {/* 极简画廊头部 */}
      <div className="mb-12 flex items-end justify-between">
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white mb-2">
            Selected Works.
          </h1>
          <p className="text-neutral-500 dark:text-neutral-400 text-lg">
            大模型应用 / 垂直知识库 / 业务工作流自动化
          </p>
        </div>
        <a 
          href="/庞燃_AI研究助理_简历.pdf" 
          target="_blank" 
          className="hidden sm:flex items-center gap-2 text-sm font-semibold text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
        >
          📄 简历 PDF <span className="text-lg">↗</span>
        </a>
      </div>

      {/* 项目展示列表 (交错式宽卡片布局) */}
      <div className="flex flex-col gap-8">

        {/* 项目 1：RAG 系统 (左文右链接) */}
        <div className="group relative overflow-hidden rounded-[2rem] bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-200 dark:border-neutral-800 transition-all duration-500 hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-2xl hover:shadow-blue-500/10">
          <div className="flex flex-col md:flex-row h-full">
            {/* 文字介绍区 */}
            <div className="p-8 md:w-1/2 flex flex-col justify-center z-10">
              <div className="mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 rounded-full text-xs font-black uppercase tracking-widest">核心引擎</span>
              </div>
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-3 tracking-tight">
                智能安规知识问答系统
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-6 leading-relaxed">
                针对垂直领域标准文档检索痛点，端到端落地的大模型问答系统。底层引入 Reranker 交叉重排抑制幻觉，将单次条款检索与释疑响应时间从 <strong>15 分钟缩减至 5 秒内</strong>，准确率达 95%。
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {['FastAPI', 'LangGraph', 'Reranker', 'Vector DB'].map(t => (
                  <span key={t} className="px-3 py-1 bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-md text-xs font-bold text-neutral-700 dark:text-neutral-300 shadow-sm">{t}</span>
                ))}
              </div>
            </div>

            {/* 动态链接预览区 (替代图片) */}
            <a 
              href="http://chat.i-test.top/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative md:w-1/2 min-h-[250px] md:min-h-[350px] bg-neutral-100 dark:bg-neutral-950 overflow-hidden border-t md:border-t-0 md:border-l border-neutral-200 dark:border-neutral-800 flex items-center justify-center group/link cursor-pointer"
            >
              {/* 底层光效与极客波点网格 */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 z-0 group-hover/link:scale-105 transition-transform duration-700"></div>
              <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
              
              {/* 悬浮玻璃态点击卡片 */}
              <div className="relative z-10 flex flex-col items-center justify-center bg-white/70 dark:bg-black/60 backdrop-blur-md border border-neutral-200/50 dark:border-neutral-800/50 px-8 py-6 rounded-2xl shadow-lg transition-all duration-300 group-hover/link:-translate-y-2 group-hover/link:shadow-blue-500/20 group-hover/link:border-blue-400/50 dark:group-hover/link:border-blue-600/50">
                <div className="w-12 h-12 mb-3 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-600 dark:text-blue-400 transition-transform group-hover/link:scale-110">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <span className="font-bold text-neutral-800 dark:text-neutral-200 mb-1">Live Preview</span>
                <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400">rag-system.example.com</span>
              </div>
            </a>
          </div>
        </div>

        {/* 项目 2：Wiki & 效率工具 (左链接右文 - 视觉交错) */}
        <div className="group relative overflow-hidden rounded-[2rem] bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-200 dark:border-neutral-800 transition-all duration-500 hover:border-emerald-400 dark:hover:border-emerald-600 hover:shadow-2xl hover:shadow-emerald-500/10">
          <div className="flex flex-col md:flex-row-reverse h-full">
            {/* 文字介绍区 */}
            <div className="p-8 md:w-1/2 flex flex-col justify-center z-10">
              <div className="mb-4">
                <span className="px-3 py-1 bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 rounded-full text-xs font-black uppercase tracking-widest">自动化矩阵</span>
              </div>
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-3 tracking-tight">
                安规知识库 & 工具矩阵
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-6 leading-relaxed">
                独立部署结构化企业知识库 (Wiki.itest)。开发“安规计算器”、“CDF助手”等 Web 工具及温升宏程序，替代传统人工核算，数据处理环节全面提效 75%，实现数据零失误。
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="px-3 py-1 bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-md text-xs font-bold text-neutral-700 dark:text-neutral-300 shadow-sm">知识库部署</span>
                <span className="px-3 py-1 bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-md text-xs font-bold text-neutral-700 dark:text-neutral-300 shadow-sm">自动化脚本</span>
                <span className="px-3 py-1 bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-md text-xs font-bold text-neutral-700 dark:text-neutral-300 shadow-sm">Web 工具</span>
              </div>
            </div>

            {/* 动态链接预览区 */}
            <a 
              href="http://chat.i-test.top/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative md:w-1/2 min-h-[250px] md:min-h-[350px] bg-neutral-100 dark:bg-neutral-950 overflow-hidden border-t md:border-t-0 md:border-r border-neutral-200 dark:border-neutral-800 flex items-center justify-center group/link cursor-pointer"
            >
              {/* 底层光效与极客波点网格 */}
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-teal-500/10 z-0 group-hover/link:scale-105 transition-transform duration-700"></div>
              <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
              
              {/* 悬浮玻璃态点击卡片 */}
              <div className="relative z-10 flex flex-col items-center justify-center bg-white/70 dark:bg-black/60 backdrop-blur-md border border-neutral-200/50 dark:border-neutral-800/50 px-8 py-6 rounded-2xl shadow-lg transition-all duration-300 group-hover/link:-translate-y-2 group-hover/link:shadow-emerald-500/20 group-hover/link:border-emerald-400/50 dark:group-hover/link:border-emerald-600/50">
                <div className="w-12 h-12 mb-3 rounded-full bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400 transition-transform group-hover/link:scale-110">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <span className="font-bold text-neutral-800 dark:text-neutral-200 mb-1">Visit Platform</span>
                <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400">wiki.itest.example.com</span>
              </div>
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}