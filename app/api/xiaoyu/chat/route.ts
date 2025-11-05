import { type NextRequest, NextResponse } from "next/server"
import { logger } from "@/lib/logger"
import { handleError, ValidationError } from "@/lib/errors"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { message, sessionId, context } = body

    if (!message || typeof message !== "string") {
      throw new ValidationError("消息内容不能为空")
    }

    // TODO: 集成本地大模型
    // 这里是模拟响应，实际应该调用本地AI模型
    const response = {
      content: `小语收到您的消息："${message}"。我正在努力学习中，很快就能更好地为您服务！`,
      confidence: 0.85,
      suggestions: ["查看附近服务", "设置提醒", "查询天气"],
      timestamp: new Date().toISOString(),
    }

    logger.info("AI chat response generated", { sessionId, messageLength: message.length })

    return NextResponse.json({
      success: true,
      data: response,
    })
  } catch (error) {
    const appError = handleError(error)
    logger.error("AI chat error", appError)

    return NextResponse.json(
      {
        success: false,
        error: {
          code: appError.code,
          message: appError.message,
        },
      },
      { status: appError.statusCode },
    )
  }
}
