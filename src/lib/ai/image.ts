export function generateEditorialImage(topicName: string, subjectTitle: string): { imageUrl: string; imageAlt: string } {
  // Provedor de geração de imagens otimizado para web e temático
  // Suporta pollinations AI e Unsplash estruturado sem bloquear
  const cleanPrompt = encodeURIComponent(`${subjectTitle} editorial clean professional journalism 4k lighting`);
  const pollinationsUrl = `https://image.pollinations.ai/prompt/${cleanPrompt}?width=1200&height=630&nologo=true&seed=${Math.floor(Math.random() * 10000)}`;

  return {
    imageUrl: pollinationsUrl,
    imageAlt: `Ilustração editorial representativa de ${subjectTitle} - Portal Info BR Peter Port Solucoes`,
  };
}
