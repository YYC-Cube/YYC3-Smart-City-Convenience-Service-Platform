type LogLevel = "debug" | "info" | "warn" | "error"

class Logger {
  private level: LogLevel
  private isDevelopment: boolean

  constructor() {
    this.level = (process.env.LOG_LEVEL as LogLevel) || "info"
    this.isDevelopment = process.env.NODE_ENV === "development"
  }

  private shouldLog(level: LogLevel): boolean {
    const levels: LogLevel[] = ["debug", "info", "warn", "error"]
    return levels.indexOf(level) >= levels.indexOf(this.level)
  }

  private formatMessage(level: LogLevel, message: string, data?: any): string {
    const timestamp = new Date().toISOString()
    const dataStr = data ? `\n${JSON.stringify(data, null, 2)}` : ""
    return `[${timestamp}] [${level.toUpperCase()}] ${message}${dataStr}`
  }

  debug(message: string, data?: any): void {
    if (this.shouldLog("debug") && this.isDevelopment) {
      console.debug(this.formatMessage("debug", message, data))
    }
  }

  info(message: string, data?: any): void {
    if (this.shouldLog("info")) {
      console.info(this.formatMessage("info", message, data))
    }
  }

  warn(message: string, data?: any): void {
    if (this.shouldLog("warn")) {
      console.warn(this.formatMessage("warn", message, data))
    }
  }

  error(message: string, error?: Error | any): void {
    if (this.shouldLog("error")) {
      const errorData = error instanceof Error ? { message: error.message, stack: error.stack } : error
      console.error(this.formatMessage("error", message, errorData))
    }
  }
}

export const logger = new Logger()
