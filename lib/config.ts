export const config = {
  app: {
    name: process.env.NEXT_PUBLIC_APP_NAME || "言语·智慧同城",
    version: process.env.NEXT_PUBLIC_APP_VERSION || "0.1.0",
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || "/api",
  },

  features: {
    voiceRecognition: process.env.ENABLE_VOICE_RECOGNITION === "true",
    offlineMode: process.env.ENABLE_OFFLINE_MODE === "true",
    analytics: process.env.ENABLE_ANALYTICS === "true",
  },

  map: {
    baiduMapAk: process.env.NEXT_PUBLIC_BAIDU_MAP_AK || "",
    defaultCenter: { lat: 39.915, lng: 116.404 }, // 北京
    defaultZoom: 12,
  },

  ai: {
    modelUrl: process.env.LOCAL_AI_MODEL_URL || "http://localhost:8080",
    modelType: process.env.LOCAL_AI_MODEL_TYPE || "chatglm",
    maxTokens: Number.parseInt(process.env.LOCAL_AI_MODEL_MAX_TOKENS || "2048"),
    temperature: 0.7,
    topP: 0.9,
  },

  api: {
    timeout: 30000, // 30 seconds
    retryAttempts: 3,
    retryDelay: 1000, // 1 second
  },

  cache: {
    ttl: 300000, // 5 minutes
    maxSize: 100,
  },

  pagination: {
    defaultPageSize: 20,
    maxPageSize: 100,
  },
} as const

export type Config = typeof config
