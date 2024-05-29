import type { ChatMessage } from '@/interfaces/chat-message.interface'
import { ref } from 'vue'

export const useChat = () => {
  const messages = ref<ChatMessage[]>([])
  const sendMessage = (message: string) => {
    messages.value.push({ id: new Date().getTime(), message, itsMine: true })
  }

  return {
    messages,
    sendMessage
  }
}
