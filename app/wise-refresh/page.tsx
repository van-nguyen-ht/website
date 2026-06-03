"use client"

import ProjectLayout from "../components/project-layout"

export default function WiseRefreshPage() {
  const tabs = [
    { label: "Overview", href: "/wise-refresh", isActive: true },
    { label: "Typography", href: "/wise-refresh/typography" },
    { label: "Icons", href: "/wise-refresh/icons" },
    { label: "Spacing", href: "/wise-refresh/spacing" },
  ]

  return (
    <ProjectLayout title="Wise design brand refresh" tabs={tabs}>
      <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden bg-[#f5f5f5]">
        <div className="absolute left-0 top-0 bottom-0 w-1/3">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-[#B6E9E9] rounded-r-[50%]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 text-[#292033]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] aspect-square">
          <div className="relative w-full h-full bg-[#292033] rounded-3xl p-8">
            <div className="text-[#FFB199] space-y-2">
              <p className="text-sm">Inter</p>
              <p className="text-sm">147 languages</p>
            </div>
            <div className="absolute inset-0 flex items-center justify-center text-[#FFB199]">
              <span className="text-[200px] font-medium leading-none">Ñ</span>
            </div>
          </div>
        </div>

        <div className="absolute right-0 top-0 bottom-0 w-1/3">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-[#C3F3C0] rounded-l-[50%]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 text-[#292033]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2v20M17 4l-5-2-5 2M17 20l-5 2-5-2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProjectLayout>
  )
}
