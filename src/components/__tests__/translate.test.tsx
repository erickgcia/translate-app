import { describe, it, expect, beforeEach, vi } from 'vitest'
import createFetchMock from 'vitest-fetch-mock'
import translate from '../../services/translate'
const fetchMocker = createFetchMock(vi)

// Mock OpenAI API
vi.mock('openai', () => {
  return {
    OpenAI: vi.fn().mockImplementation(() => {
      return {
        chat: {
          completions: {
            create: vi.fn().mockResolvedValue({
              choices: [{ message: { content: 'Mocked Translation' } }],
            }),
          },
        },
      }
    }),
  }
})

describe('translate OpenAI API testing', () => {
  beforeEach(() => {
    fetchMocker.resetMocks()
  })

  it('Should return the original text if langInput === langOutput', async () => {
    const result = await translate({
      langInput: 'en',
      langOutput: 'en',
      text: 'Hello',
    })
    expect(result).toBe('Hello')
  })

  it('Should return the translated text', async () => {
    const result = await translate({
      langInput: 'auto',
      langOutput: 'en',
      text: 'Andiamos',
    })
    expect(result).toBe('Mocked Translation')
  })

  it('should translate text using OpenAI', async () => {
    const result = await translate({
      langInput: 'fr',
      langOutput: 'es',
      text: 'Bonjour',
    })

    expect(result).toBe('Mocked Translation')
  })
})
