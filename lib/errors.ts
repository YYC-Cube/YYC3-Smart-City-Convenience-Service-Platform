export class AppError extends Error {
  constructor(
    message: string,
    public code: string,
    public statusCode = 500,
    public details?: any,
  ) {
    super(message)
    this.name = "AppError"
  }
}

export class ValidationError extends AppError {
  constructor(message: string, details?: any) {
    super(message, "VALIDATION_ERROR", 400, details)
    this.name = "ValidationError"
  }
}

export class AuthenticationError extends AppError {
  constructor(message = "未授权访问") {
    super(message, "AUTHENTICATION_ERROR", 401)
    this.name = "AuthenticationError"
  }
}

export class NotFoundError extends AppError {
  constructor(message = "资源不存在") {
    super(message, "NOT_FOUND", 404)
    this.name = "NotFoundError"
  }
}

export class RateLimitError extends AppError {
  constructor(message = "请求过于频繁") {
    super(message, "RATE_LIMIT_ERROR", 429)
    this.name = "RateLimitError"
  }
}

export function handleError(error: unknown): AppError {
  if (error instanceof AppError) {
    return error
  }

  if (error instanceof Error) {
    return new AppError(error.message, "INTERNAL_ERROR", 500)
  }

  return new AppError("未知错误", "UNKNOWN_ERROR", 500)
}
