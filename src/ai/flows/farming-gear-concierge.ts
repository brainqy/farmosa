'use server';
/**
 * @fileOverview An AI-powered tool that recommends AgroMachines farming equipment based on soil type, crop variety, and acreage.
 *
 * - farmingGearConcierge - A function that handles the equipment recommendation process.
 * - FarmingGearConciergeInput - The input type for the farmingGearConcierge function.
 * - FarmingGearConciergeOutput - The return type for the farmingGearConcierge function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const FarmingGearConciergeInputSchema = z.object({
  soilType: z
    .string()
    .describe(
      'The type of soil, e.g., sandy, clay, loamy, black, red, alluvial, etc.'
    ),
  cropVariety: z
    .string()
    .describe(
      'The specific crop(s) to be grown, e.g., wheat, rice, sugarcane, cotton, vegetables, etc.'
    ),
  acreage: z
    .number()
    .positive()
    .describe('The total farm land area in acres.'),
});
export type FarmingGearConciergeInput = z.infer<
  typeof FarmingGearConciergeInputSchema
>;

const FarmingGearConciergeOutputSchema = z.object({
  recommendations: z
    .array(
      z.object({
        productName: z
          .string()
          .describe('The name of the recommended AgroMachines product.'),
        reasoning: z
          .string()
          .describe(
            'A detailed explanation of why this product is suitable based on the farmer\u0027s input.'
          ),
        keyFeatures: z
          .array(z.string())
          .describe('Key features of the recommended product.'),
      })
    )
    .describe('A list of recommended farming equipment from AgroMachines.'),
  additionalAdvice: z
    .string()
    .describe(
      'Any additional advice or considerations for the farmer regarding their specific needs.'
    )
    .optional(),
});
export type FarmingGearConciergeOutput = z.infer<
  typeof FarmingGearConciergeOutputSchema
>;

export async function farmingGearConcierge(
  input: FarmingGearConciergeInput
): Promise<FarmingGearConciergeOutput> {
  return farmingGearConciergeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'farmingGearConciergePrompt',
  input: { schema: FarmingGearConciergeInputSchema },
  output: { schema: FarmingGearConciergeOutputSchema },
  prompt: `You are an expert agricultural machinery consultant for SB AGROTECH in Rajasthan, India. Your task is to recommend the most suitable farming equipment from SB AGROTECH's catalog to a farmer based on their soil type, crop variety, and acreage.

Here is the AgroMachines product catalog and their key features:
- **Regular Model Rotavator**: Standard duty, versatile for general soil preparation, suitable for small to medium farms, robust construction.
- **Regular Plus Rotavator**: Enhanced durability, heavier duty than Regular Model, better for tougher soil conditions, improved power transmission.
- **Rotary Disk Harrow**: Efficient for breaking clods, excellent for seedbed preparation, suitable for various soil types, high working speed.
- **HD Rotavator (Heavy Duty)**: Extremely robust, designed for hard and stony soils, ideal for large acreage and commercial farming, high power requirement.
- **Double Tubular Frame Rotavator**: Superior strength and stability, prevents bending in heavy-duty operations, extended lifespan, ideal for deep tillage.
- **Zero Drill Machine**: Direct seeding without prior tillage, conserves soil moisture, reduces fuel consumption, good for no-till farming practices.
- **Laser Land Leveler**: Precision land leveling, improves irrigation efficiency, reduces water consumption, uniform crop growth, critical for rice and wheat.
- **Mud Loader Machine**: Efficient for loading mud, sand, or loose soil, suitable for pond desilting or field preparation after monsoons, hydraulic operation.

Farmer's Details:
Soil Type: {{{soilType}}}
Crop Variety: {{{cropVariety}}}
Acreage: {{{acreage}}} acres

Analyze the farmer's details carefully. Recommend 1-3 most suitable AgroMachines products. For each recommendation, provide a clear product name, a detailed reasoning explaining why it is suitable for the farmer's specific needs (considering soil, crop, and acreage), and list 3-4 key features of that product. Also, provide some additional general advice if relevant.
`,
});

const farmingGearConciergeFlow = ai.defineFlow(
  {
    name: 'farmingGearConciergeFlow',
    inputSchema: FarmingGearConciergeInputSchema,
    outputSchema: FarmingGearConciergeOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
