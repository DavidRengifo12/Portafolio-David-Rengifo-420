import {
  Terminal,
  TypingAnimation,
  AnimatedSpan,
} from '@/components/ui/terminal'

interface DeveloperPhilosophyProps {
  command: string
  messages: string[]
}

export default function CardTerminal({
  command,
  messages,
}: DeveloperPhilosophyProps) {
  return (
    <Terminal className="w-full">
      <TypingAnimation>
        {command}
      </TypingAnimation>

      {messages.map((message, index) => (
        <AnimatedSpan
          key={index}
          className="text-blue-700"
        >
          {message}
        </AnimatedSpan>
      ))}
    </Terminal>
  )
}