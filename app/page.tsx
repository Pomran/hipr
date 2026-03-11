function ArrowUpRightIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M7 17L17 7" />
      <path d="M8 7h9v9" />
    </svg>
  )
}

export default function Page() {
  return (
    <section className="enter relative w-full py-4">
      <div className="mb-10 flex items-end justify-between gap-6">
        <div>
          <p className="text-xs font-semibold tracking-[0.25em] text-neutral-500 dark:text-neutral-400">
            SELECTED WORK
          </p>
          <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-950 dark:text-white">
            精选项目
          </h1>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300">
            大模型应用 / 垂直知识库 / 业务流程自动化
          </p>
        </div>

        <a
          href="/庞燃-AI研究助理.pdf"
          target="_blank"
          className="hidden sm:inline-flex items-center gap-2 rounded-full border border-neutral-200/70 bg-white/60 px-4 py-2 text-sm font-semibold text-neutral-700 backdrop-blur-md transition hover:bg-white/80 hover:text-neutral-950 dark:border-neutral-800/70 dark:bg-neutral-950/40 dark:text-neutral-200 dark:hover:bg-neutral-950/60 dark:hover:text-white"
        >
          简历 PDF
          <ArrowUpRightIcon className="h-4 w-4" />
        </a>
      </div>

      <div className="flex flex-col gap-8">
        <div className="group relative overflow-hidden rounded-[2rem] border border-neutral-200/70 bg-white/55 backdrop-blur-md transition hover:border-teal-300 hover:shadow-2xl hover:shadow-teal-500/10 dark:border-neutral-800/70 dark:bg-neutral-950/40 dark:hover:border-teal-500/60">
          <div className="flex flex-col md:flex-row h-full">
            <div className="p-8 md:w-1/2 flex flex-col justify-center bg-white/40 dark:bg-black/20">
              <div className="mb-4">
                <span className="inline-flex items-center rounded-full bg-teal-500/10 px-3 py-1 text-xs font-black uppercase tracking-widest text-teal-700 dark:bg-teal-400/10 dark:text-teal-300">
                  核心引擎
                </span>
              </div>
              <h2 className="text-3xl font-bold text-neutral-950 dark:text-white mb-3 tracking-tight">
                合规知识问答系统
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300 text-sm mb-6 leading-relaxed">
                面向垂直领域标准文档的检索痛点，构建端到端的大模型问答系统。底层引入
                Reranker 交叉重排抑制幻觉，将单次条款检索与释疑响应时间从
                <strong> 15 分钟缩短到 5 秒内</strong>，准确率达
                <strong> 95%</strong>。
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {['FastAPI', 'LangGraph', 'Reranker', 'Vector DB'].map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 rounded-lg text-xs font-bold border border-neutral-200 bg-neutral-50 text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900/40 dark:text-neutral-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <a
              href="https://chat.i-test.top"
              target="_blank"
              rel="noopener noreferrer"
              className="relative md:w-1/2 min-h-[300px] md:min-h-[400px] bg-neutral-50 dark:bg-neutral-950 overflow-hidden border-t md:border-t-0 md:border-l border-neutral-200/70 dark:border-neutral-800/70 flex items-center justify-center cursor-pointer block"
            >
              <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.06)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:32px_32px] opacity-90 transition-opacity duration-700 group-hover:opacity-35" />

              <div className="relative flex items-center justify-center w-full h-full scale-90 group-hover:scale-100 transition-transform duration-1000">
                <div className="absolute w-[150px] h-[150px] border border-teal-500/20 dark:border-teal-400/20 rounded-full" />
                <div className="absolute w-[250px] h-[250px] border border-teal-500/10 dark:border-teal-400/10 rounded-full border-dashed" />
                <div className="absolute w-[350px] h-[350px] border border-teal-500/5 dark:border-teal-400/5 rounded-full" />

                <div className="absolute w-full h-[1px] bg-teal-500/10 dark:bg-teal-400/10" />
                <div className="absolute h-full w-[1px] bg-teal-500/10 dark:bg-teal-400/10" />

                <div
                  className="absolute w-[350px] h-[350px] rounded-full animate-radar"
                  style={{
                    background:
                      'conic-gradient(from 0deg, transparent 75%, rgba(20, 184, 166, 0.28) 100%)',
                  }}
                />

                <div className="w-3 h-3 bg-teal-500 dark:bg-teal-400 rounded-full shadow-[0_0_20px_4px_rgba(20,184,166,0.55)] z-10" />

                <div className="absolute w-2 h-2 bg-teal-400 rounded-full top-[30%] left-[30%] animate-pulse shadow-[0_0_8px_rgba(45,212,191,0.75)]" />
                <div className="absolute w-1.5 h-1.5 bg-teal-300 rounded-full bottom-[25%] right-[35%] animate-pulse delay-300 shadow-[0_0_8px_rgba(94,234,212,0.55)]" />
                <div className="absolute w-2.5 h-2.5 bg-amber-400 rounded-full top-[20%] right-[25%] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 delay-500 shadow-[0_0_10px_rgba(251,191,36,0.65)]" />
              </div>

              <div className="absolute bottom-6 left-6 text-xs font-mono text-teal-700/60 dark:text-teal-300/60 leading-tight">
                <p>SYS.VECTOR_SEARCH // ACTIVE</p>
                <p className="animate-pulse opacity-70">AWAITING_QUERY_</p>
              </div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/20 dark:bg-black/40 backdrop-blur-sm">
                <div className="flex items-center gap-2 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 px-6 py-3 rounded-full shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <span className="font-bold text-teal-700 dark:text-teal-300 text-sm">
                    打开演示
                  </span>
                  <ArrowUpRightIcon className="h-4 w-4 text-teal-700 dark:text-teal-300" />
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-[2rem] border border-neutral-200/70 bg-white/55 backdrop-blur-md transition hover:border-amber-300 hover:shadow-2xl hover:shadow-amber-500/10 dark:border-neutral-800/70 dark:bg-neutral-950/40 dark:hover:border-amber-500/60">
          <div className="flex flex-col md:flex-row-reverse h-full">
            <div className="p-8 md:w-1/2 flex flex-col justify-center bg-white/40 dark:bg-black/20">
              <div className="mb-4">
                <span className="inline-flex items-center rounded-full bg-amber-500/10 px-3 py-1 text-xs font-black uppercase tracking-widest text-amber-800 dark:bg-amber-400/10 dark:text-amber-200">
                  自动化矩阵
                </span>
              </div>
              <h2 className="text-3xl font-bold text-neutral-950 dark:text-white mb-3 tracking-tight">
                合规知识库与效率工具
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300 text-sm mb-6 leading-relaxed">
                独立部署结构化企业知识库（Wiki），并开发「合规计算器」「PDF 助手」等 Web
                工具与脚本，替代传统人工核算与重复整理流程，数据处理环节整体提效
                <strong> 75%</strong>。
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {['知识库部署', '自动化脚本', 'Web 工具'].map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 rounded-lg text-xs font-bold border border-neutral-200 bg-neutral-50 text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900/40 dark:text-neutral-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <a
              href="https://wiki.itest.example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative md:w-1/2 min-h-[300px] md:min-h-[400px] bg-neutral-50 dark:bg-neutral-950 overflow-hidden border-t md:border-t-0 md:border-r border-neutral-200/70 dark:border-neutral-800/70 flex items-center justify-center cursor-pointer block"
            >
              <div className="absolute inset-0 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] dark:bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] opacity-35 transition-opacity duration-700 group-hover:opacity-15" />

              <div className="relative flex items-center justify-center w-full h-full">
                <div className="absolute w-40 h-52 bg-amber-500/10 dark:bg-amber-500/15 backdrop-blur-md border border-amber-500/20 dark:border-amber-400/25 rounded-2xl transform -rotate-12 -translate-x-12 -translate-y-4 group-hover:-translate-y-8 group-hover:-rotate-6 transition-all duration-700 shadow-xl" />
                <div className="absolute w-40 h-52 bg-teal-500/10 dark:bg-teal-500/15 backdrop-blur-md border border-teal-500/20 dark:border-teal-400/25 rounded-2xl transform rotate-12 translate-x-12 translate-y-6 group-hover:translate-y-12 transition-all duration-700 shadow-xl" />
                <div className="absolute z-10 w-44 h-56 bg-white/45 dark:bg-white/5 backdrop-blur-lg border border-white/70 dark:border-white/10 rounded-2xl flex flex-col items-center justify-center group-hover:scale-110 transition-transform duration-700 shadow-2xl">
                  <svg
                    className="w-12 h-12 text-amber-700/70 dark:text-amber-300/70 mb-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                  <div className="w-16 h-1.5 bg-amber-600/20 dark:bg-amber-400/30 rounded-full mb-2" />
                  <div className="w-20 h-1.5 bg-amber-600/20 dark:bg-amber-400/30 rounded-full" />
                </div>
              </div>

              <div className="absolute top-6 right-6 text-xs font-mono text-amber-800/55 dark:text-amber-200/55 leading-tight text-right">
                <p>SYNC_WIKI_DATA...</p>
                <p className="animate-pulse opacity-70">_100%_COMPLETE</p>
              </div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/20 dark:bg-black/40 backdrop-blur-sm">
                <div className="flex items-center gap-2 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 px-6 py-3 rounded-full shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <span className="font-bold text-amber-800 dark:text-amber-200 text-sm">
                    打开平台
                  </span>
                  <ArrowUpRightIcon className="h-4 w-4 text-amber-800 dark:text-amber-200" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

