import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://quizrunz.com/", lastModified: new Date("2025-06-29"), changeFrequency: "daily", priority: 1.0 },
    { url: "https://quizrunz.com/home", lastModified: new Date("2025-06-29"), changeFrequency: "daily", priority: 0.8 },
    { url: "https://quizrunz.com/quiz/1", lastModified: new Date("2025-06-29"), changeFrequency: "daily", priority: 0.8 },
    { url: "https://quizrunz.com/quiz/2", lastModified: new Date("2025-06-29"), changeFrequency: "daily", priority: 0.8 },
    { url: "https://quizrunz.com/quiz/3", lastModified: new Date("2025-06-29"), changeFrequency: "daily", priority: 0.8 },
    { url: "https://quizrunz.com/quiz/4", lastModified: new Date("2025-06-29"), changeFrequency: "daily", priority: 0.8 },
    { url: "https://quizrunz.com/quiz/5", lastModified: new Date("2025-06-29"), changeFrequency: "daily", priority: 0.8 },
    { url: "https://quizrunz.com/quiz/6", lastModified: new Date("2025-06-29"), changeFrequency: "daily", priority: 0.8 },
    { url: "https://quizrunz.com/quiz/7", lastModified: new Date("2025-06-29"), changeFrequency: "daily", priority: 0.8 },
    { url: "https://quizrunz.com/quiz/8", lastModified: new Date("2025-06-29"), changeFrequency: "daily", priority: 0.8 },
    { url: "https://quizrunz.com/quiz/9", lastModified: new Date("2025-06-29"), changeFrequency: "daily", priority: 0.8 },
    { url: "https://quizrunz.com/quiz/10", lastModified: new Date("2025-06-29"), changeFrequency: "daily", priority: 0.8 },
    { url: "https://quizrunz.com/wallet", lastModified: new Date("2025-06-29"), changeFrequency: "daily", priority: 0.8 },
    { url: "https://quizrunz.com/contact", lastModified: new Date("2025-06-29"), changeFrequency: "monthly", priority: 0.5 },
    { url: "https://quizrunz.com/privacy", lastModified: new Date("2025-06-29"), changeFrequency: "monthly", priority: 0.5 },
    { url: "https://quizrunz.com/disclaimer", lastModified: new Date("2025-06-29"), changeFrequency: "monthly", priority: 0.5 },
    { url: "https://quizrunz.com/terms", lastModified: new Date("2025-06-29"), changeFrequency: "monthly", priority: 0.5 },
  ];
}
