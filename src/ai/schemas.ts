/**
 * @fileOverview Shared Zod schemas for AI flows.
 */
import { z } from 'zod';

export const DailyChallengeOutputSchema = z.object({
  category: z.enum(['Riddle', 'Quick Quiz', 'Logic Puzzle', 'Lore Question', 'Rest Day']).describe("The category of the challenge."),
  title: z.string().describe("The thematic title of the challenge, e.g., 'The Sphinx's Riddle' or 'Alchemist's Quickfire Test'."),
  description: z.string().describe("A short, engaging description of the challenge for the user to solve."),
  reward: z.string().describe("The reward for completing the challenge, e.g., '150 XP'."),
});
export type DailyChallengeOutput = z.infer<typeof DailyChallengeOutputSchema>;

export const GradeChallengeInputSchema = z.object({
  challenge: DailyChallengeOutputSchema,
  userAnswer: z.string().describe("The user's submitted answer to the challenge."),
});
export type GradeChallengeInput = z.infer<typeof GradeChallengeInputSchema>;

export const GradeChallengeOutputSchema = z.object({
  isCorrect: z.boolean().describe("Whether the user's answer is correct."),
  explanation: z.string().describe("A brief, one-sentence explanation for why the answer is correct or incorrect. Be encouraging."),
});
export type GradeChallengeOutput = z.infer<typeof GradeChallengeOutputSchema>;
