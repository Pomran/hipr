export default function Page() {
  return (
    <section className="relative w-full max-w-4xl mx-auto py-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out">
      
      {/* 注入全局呼吸与雷达动效 */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.5; }
          50% { transform: translateY(-20px) scale(1.1); opacity: 0.8; }
        }
        @keyframes radar-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-float-slow { animation: float 8s ease-in-out infinite; }
        .animate-float-slower { animation: float 12s ease-in-out infinite; animation-delay: -4s; }
        .animate-radar { animation: radar-spin 3s linear infinite; }
      `}</style>

      {/* 动态呼吸全局背景光效 (还原为原版的纯蓝/紫) */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-blue-500/20 dark:bg-blue-600/20 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-float-slow"></div>
        <div className="absolute top-[20%] right-[-10%] w-[35rem] h-[35rem] bg-purple-500/20 dark:bg-purple-600/20 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-float-slower"></div>
      </div>

      {/* 极简画廊头部 */}
      <div className="mb-12 flex items-end justify-between relative z-10">
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
          className="hidden sm:flex items-center gap-2 text-sm font-semibold text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          📄 简历 PDF <span className="text-lg">↗</span>
        </a>
      </div>

      {/* 项目展示列表 (还原为 md:w-1/2 的等比分配) */}
      <div className="flex flex-col gap-8 relative z-10">

        {/* 项目 1：RAG 系统 */}
        <div className="group relative overflow-hidden rounded-[2rem] bg-white/70 dark:bg-neutral-900/50 backdrop-blur-xl border border-neutral-200/80 dark:border-neutral-800/80 transition-all duration-500 hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-2xl hover:shadow-blue-500/20">
          <div className="flex flex-col md:flex-row h-full">
            
            {/* 文字介绍区 */}
            <div className="p-8 md:w-1/2 flex flex-col justify-center z-10 bg-white/50 dark:bg-black/20">
              <div className="mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300 rounded-full text-xs font-black uppercase tracking-widest shadow-inner">核心引擎</span>
              </div>
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-3 tracking-tight">
                智能安规知识问答系统
              </h2>
              <p className="text-neutral-600 dark:text-neutral-300 text-sm mb-6 leading-relaxed">
                针对垂直领域标准文档检索痛点，端到端落地的大模型问答系统。底层引入 Reranker 交叉重排抑制幻觉，将单次条款检索与释疑响应时间从 <strong>15 分钟缩减至 5 秒内</strong>，准确率达 95%。
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {['FastAPI', 'LangGraph', 'Reranker', 'Vector DB'].map(t => (
                  <span key={t} className="px-3 py-1.5 bg-neutral-100 dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700 rounded-lg text-xs font-bold text-neutral-700 dark:text-neutral-300">{t}</span>
                ))}
              </div>
            </div>

            {/* 视觉区：保留最新版的高级雷达 (尺寸适配 1/2 卡片) */}
            <a 
              href="https://chat.i-test.top" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative md:w-1/2 min-h-[300px] md:min-h-[400px] bg-neutral-100 dark:bg-neutral-950 overflow-hidden border-t md:border-t-0 md:border-l border-neutral-200 dark:border-neutral-800 flex items-center justify-center cursor-pointer block"
            >
              {/* 底层极客坐标网格 */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] opacity-100 transition-opacity duration-700 group-hover:opacity-30"></div>
              
              {/* 全息扫描雷达体系 (已缩小直径防止溢出) */}
              <div className="relative flex items-center justify-center w-full h-full scale-90 group-hover:scale-100 transition-transform duration-1000">
                <div className="absolute w-[150px] h-[150px] border border-blue-500/20 dark:border-blue-400/20 rounded-full"></div>
                <div className="absolute w-[250px] h-[250px] border border-blue-500/10 dark:border-blue-400/10 rounded-full border-dashed"></div>
                <div className="absolute w-[350px] h-[350px] border border-blue-500/5 dark:border-blue-400/5 rounded-full"></div>
                
                <div className="absolute w-full h-[1px] bg-blue-500/10 dark:bg-blue-400/10"></div>
                <div className="absolute h-full w-[1px] bg-blue-500/10 dark:bg-blue-400/10"></div>

                {/* 圆锥渐变扫描指针 */}
                <div 
                  className="absolute w-[350px] h-[350px] rounded-full animate-radar"
                  style={{ background: 'conic-gradient(from 0deg, transparent 75%, rgba(59, 130, 246, 0.3) 100%)' }}
                ></div>

                <div className="w-3 h-3 bg-blue-500 dark:bg-blue-400 rounded-full shadow-[0_0_20px_4px_rgba(59,130,246,0.6)] z-10"></div>

                {/* 数据节点 */}
                <div className="absolute w-2 h-2 bg-blue-400 rounded-full top-[30%] left-[30%] animate-pulse shadow-[0_0_8px_rgba(96,165,250,0.8)]"></div>
                <div className="absolute w-1.5 h-1.5 bg-blue-300 rounded-full bottom-[25%] right-[35%] animate-pulse delay-300 shadow-[0_0_8px_rgba(147,197,253,0.8)]"></div>
                <div className="absolute w-2.5 h-2.5 bg-purple-400 rounded-full top-[20%] right-[25%] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 delay-500 shadow-[0_0_10px_rgba(192,132,252,0.8)]"></div>
              </div>

              {/* 装饰性终端代码 */}
              <div className="absolute bottom-6 left-6 text-xs font-mono text-blue-600/60 dark:text-blue-400/50 leading-tight">
                <p>SYS.VECTOR_SEARCH // ACTIVE</p>
                <p className="animate-pulse opacity-70">AWAITING_QUERY_</p>
              </div>

              {/* 悬浮打开按钮 */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/20 dark:bg-black/40 backdrop-blur-sm z-20">
                <div className="flex items-center gap-2 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 px-6 py-3 rounded-full shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <span className="font-bold text-blue-600 dark:text-blue-400 text-sm">打开应用</span>
                  <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* 项目 2：Wiki & 效率工具 (还原为上一版的玻璃卡片视觉) */}
        <div className="group relative overflow-hidden rounded-[2rem] bg-white/70 dark:bg-neutral-900/50 backdrop-blur-xl border border-neutral-200/80 dark:border-neutral-800/80 transition-all duration-500 hover:border-emerald-400 dark:hover:border-emerald-600 hover:shadow-2xl hover:shadow-emerald-500/20">
          <div className="flex flex-col md:flex-row-reverse h-full">
            
            <div className="p-8 md:w-1/2 flex flex-col justify-center z-10 bg-white/50 dark:bg-black/20">
              <div className="mb-4">
                <span className="px-3 py-1 bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300 rounded-full text-xs font-black uppercase tracking-widest shadow-inner">自动化矩阵</span>
              </div>
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-3 tracking-tight">
                安规知识库 & 工具矩阵
              </h2>
              <p className="text-neutral-600 dark:text-neutral-300 text-sm mb-6 leading-relaxed">
                独立部署结构化企业知识库 (Wiki.itest)。开发“安规计算器”、“CDF助手”等 Web 工具及温升宏程序，替代传统人工核算，数据处理环节全面提效 75%，实现数据零失误。
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {['知识库部署', '自动化脚本', 'Web 工具'].map(t => (
                  <span key={t} className="px-3 py-1.5 bg-neutral-100 dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700 rounded-lg text-xs font-bold text-neutral-700 dark:text-neutral-300">{t}</span>
                ))}
              </div>
            </div>

            <a 
              href="https://wiki.itest.example.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative md:w-1/2 min-h-[300px] md:min-h-[400px] bg-neutral-100 dark:bg-neutral-950 overflow-hidden border-t md:border-t-0 md:border-r border-neutral-200 dark:border-neutral-800 flex items-center justify-center cursor-pointer block"
            >
              <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] opacity-30 transition-opacity duration-700 group-hover:opacity-10"></div>

              {/* 动态悬浮卡片阵列 */}
              <div className="relative flex items-center justify-center w-full h-full">
                <div className="absolute w-40 h-52 bg-teal-500/10 dark:bg-teal-500/20 backdrop-blur-md border border-teal-500/20 dark:border-teal-400/30 rounded-2xl transform -rotate-12 -translate-x-12 -translate-y-4 group-hover:-translate-y-8 group-hover:-rotate-6 transition-all duration-700 shadow-xl"></div>
                <div className="absolute w-40 h-52 bg-emerald-500/10 dark:bg-emerald-500/20 backdrop-blur-md border border-emerald-500/20 dark:border-emerald-400/30 rounded-2xl transform rotate-12 translate-x-12 translate-y-6 group-hover:translate-y-12 transition-all duration-700 shadow-xl"></div>
                <div className="absolute z-10 w-44 h-56 bg-white/40 dark:bg-white/5 backdrop-blur-lg border border-white/60 dark:border-white/10 rounded-2xl flex flex-col items-center justify-center group-hover:scale-110 transition-transform duration-700 shadow-2xl">
                  <svg className="w-12 h-12 text-emerald-600/80 dark:text-emerald-400/80 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  <div className="w-16 h-1.5 bg-emerald-600/20 dark:bg-emerald-400/30 rounded-full mb-2"></div>
                  <div className="w-20 h-1.5 bg-emerald-600/20 dark:bg-emerald-400/30 rounded-full"></div>
                </div>
              </div>

              <div className="absolute top-6 right-6 text-xs font-mono text-emerald-600/60 dark:text-emerald-400/50 leading-tight text-right">
                <p>SYNC_WIKI_DATA...</p>
                <p className="animate-pulse opacity-70">_100%_COMPLETE</p>
              </div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/20 dark:bg-black/40 backdrop-blur-sm z-20">
                <div className="flex items-center gap-2 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 px-6 py-3 rounded-full shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <span className="font-bold text-emerald-600 dark:text-emerald-400 text-sm">打开平台</span>
                  <svg className="w-4 h-4 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}