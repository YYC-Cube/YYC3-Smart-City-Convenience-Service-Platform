export interface User {
  id: string
  name: string
  email: string
  avatar?: string
}

export interface Service {
  id: string
  title: string
  description: string
  category: string
  price?: number
  rating?: number
}

export interface Message {
  id: string
  type: "user" | "assistant"
  content: string
  timestamp: Date
  actions?: ActionButton[]
}

export interface ActionButton {
  label: string
  action: string
  icon?: string
}

export interface AssistantState {
  isListening: boolean
  isThinking: boolean
  isSpeaking: boolean
  mood: "happy" | "thinking" | "helpful" | "concerned"
}

export interface CalendarEvent {
  id: string
  title: string
  date: string
  type: "festival" | "birthday" | "appointment"
}

export interface MapLocation {
  lat: number
  lng: number
  address?: string
  name?: string
}

export interface MapRoute {
  origin: MapLocation
  destination: MapLocation
  distance: number
  duration: number
  steps: RouteStep[]
}

export interface RouteStep {
  instruction: string
  distance: number
  duration: number
}

export interface AIResponse {
  content: string
  confidence: number
  suggestions?: string[]
  actions?: ActionButton[]
}

export interface ConversationContext {
  userId: string
  sessionId: string
  history: Message[]
  userPreferences?: UserPreferences
}

export interface UserPreferences {
  language: string
  voiceEnabled: boolean
  notificationsEnabled: boolean
  theme: "light" | "dark" | "auto"
}

export interface ServiceProvider {
  id: string
  name: string
  rating: number
  reviewCount: number
  services: Service[]
  location: MapLocation
  availability: Availability[]
}

export interface Availability {
  dayOfWeek: number
  startTime: string
  endTime: string
}

export interface Booking {
  id: string
  userId: string
  serviceId: string
  providerId: string
  date: string
  time: string
  status: "pending" | "confirmed" | "completed" | "cancelled"
  notes?: string
}

export interface Notification {
  id: string
  type: "info" | "warning" | "error" | "success"
  title: string
  message: string
  timestamp: Date
  read: boolean
  actionUrl?: string
}

export interface BroadcastMessage {
  id: string
  content: string
  priority: "low" | "medium" | "high" | "urgent"
  category: "news" | "weather" | "traffic" | "emergency"
  timestamp: Date
  expiresAt?: Date
}

export interface HealthData {
  userId: string
  timestamp: Date
  heartRate?: number
  bloodPressure?: {
    systolic: number
    diastolic: number
  }
  temperature?: number
  steps?: number
  sleepHours?: number
}

export interface HealthAlert {
  id: string
  userId: string
  type: "critical" | "warning" | "info"
  message: string
  timestamp: Date
  acknowledged: boolean
}

export interface SmartDevice {
  id: string
  name: string
  type: "light" | "thermostat" | "camera" | "lock" | "sensor"
  status: "online" | "offline"
  state: Record<string, any>
  location: string
}

export interface DeviceControl {
  deviceId: string
  action: string
  parameters?: Record<string, any>
}

export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: ApiError
  timestamp: Date
}

export interface ApiError {
  code: string
  message: string
  details?: Record<string, any>
}

export interface PaginatedResponse<T> {
  items: T[]
  total: number
  page: number
  pageSize: number
  hasMore: boolean
}

export interface SearchQuery {
  keyword: string
  category?: string
  location?: MapLocation
  radius?: number
  filters?: Record<string, any>
  sortBy?: string
  sortOrder?: "asc" | "desc"
}

export interface SearchResult<T> {
  items: T[]
  total: number
  query: SearchQuery
  suggestions?: string[]
}
