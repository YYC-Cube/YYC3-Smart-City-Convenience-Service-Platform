export class PerformanceMonitor {
  private marks: Map<string, number> = new Map()

  mark(name: string): void {
    this.marks.set(name, performance.now())
  }

  measure(name: string, startMark: string): number {
    const start = this.marks.get(startMark)
    if (!start) {
      console.warn(`Start mark "${startMark}" not found`)
      return 0
    }

    const duration = performance.now() - start
    console.log(`[Performance] ${name}: ${duration.toFixed(2)}ms`)
    return duration
  }

  clear(name?: string): void {
    if (name) {
      this.marks.delete(name)
    } else {
      this.marks.clear()
    }
  }

  getWebVitals(): void {
    if (typeof window === "undefined") return

    // Largest Contentful Paint
    new PerformanceObserver((list) => {
      const entries = list.getEntries()
      const lastEntry = entries[entries.length - 1]
      console.log("[Web Vitals] LCP:", lastEntry.startTime)
    }).observe({ entryTypes: ["largest-contentful-paint"] })

    // First Input Delay
    new PerformanceObserver((list) => {
      const entries = list.getEntries()
      entries.forEach((entry: any) => {
        const delay = entry.processingStart - entry.startTime
        console.log("[Web Vitals] FID:", delay)
      })
    }).observe({ entryTypes: ["first-input"] })

    // Cumulative Layout Shift
    let clsValue = 0
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries() as any[]) {
        if (!entry.hadRecentInput) {
          clsValue += entry.value
          console.log("[Web Vitals] CLS:", clsValue)
        }
      }
    }).observe({ entryTypes: ["layout-shift"] })
  }
}

export const performanceMonitor = new PerformanceMonitor()
