// ============================================================
// 📝 博客文章数据（blog.html 与 article.html 共用）
// 添加新文章：复制一行，改字段即可。
// - 图片文章：{ id, date, title, excerpt, tags, cover, images }
// - PDF 文章：{ id, date, title, excerpt, tags, cover, pdf }
// ============================================================
const articles = [
    {
        id: "chao-wan",
        date: "2026.08.11",
        title: "潮玩行业深度报告：沉心琢玉，时至生辉",
        excerpt: "国泰海通证券潮玩行业深度研究报告，共 34 页。",
        tags: ["研报", "潮玩", "国泰海通"],
        cover: "images/潮玩行业深度报告.jpg",
        pdf: "reports/国泰海通-潮玩行业深度报告.pdf"
    },
    {
        id: "ai-drama",
        date: "2026.08.10",
        title: "2026 上半年国内 AI 剧漫剧数据报告",
        excerpt: "慧动创想出品，2026 上半年国内 AI 剧漫剧市场数据洞察，共 27 页。",
        tags: ["研报", "AI", "剧漫"],
        cover: "images/AI剧漫剧数据报告.jpg",
        pdf: "reports/慧动创想-AI剧漫剧数据报告.pdf"
    }
];
