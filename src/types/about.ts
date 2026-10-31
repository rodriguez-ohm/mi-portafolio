export interface Strength {
  name: string
  description: string
}

export interface About {
  title: string
  paragraphs: string[]
  strengths: Strength[]
}
