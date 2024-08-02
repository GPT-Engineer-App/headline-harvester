import { useState } from 'react';
import { Newspaper, Play } from 'lucide-react';
import { Button } from "@/components/ui/button";

const newsCategories = [
  { value: 'all', label: '全部' },
  { value: 'tech', label: '科技' },
  { value: 'sports', label: '体育' },
  { value: 'entertainment', label: '娱乐' },
  { value: 'finance', label: '财经' },
  { value: 'video', label: '视频' },
];

const mockNews = [
  {
    id: 1,
    title: '新型AI模型在医疗诊断领域取得突破性进展',
    summary: '研究人员开发的新AI模型在早期癌症检测中表现出色，准确率达到95%以上。',
    image: 'https://source.unsplash.com/random/800x600?ai,medical',
    category: 'tech',
  },
  {
    id: 2,
    title: '国足在亚洲杯预选赛中险胜韩国队',
    summary: '在一场激烈的比赛中，中国国家足球队以2-1的比分战胜了韩国队，为亚洲杯资格赛开了个好头。',
    image: 'https://source.unsplash.com/random/800x600?soccer,stadium',
    category: 'sports',
  },
  {
    id: 3,
    title: '著名导演宣布筹拍科幻大片，投资额创历史新高',
    summary: '好莱坞知名导演詹姆斯·卡梅隆宣布将开拍一部耗资3亿美元的科幻史诗大片，引发业界热议。',
    image: 'https://source.unsplash.com/random/800x600?movie,scifi',
    category: 'entertainment',
  },
  {
    id: 4,
    title: '全球股市震荡，投资者关注美联储利率决议',
    summary: '受美联储即将公布利率决议的影响，全球主要股指出现不同程度的波动，投资者保持谨慎态度。',
    image: 'https://source.unsplash.com/random/800x600?stock,market',
    category: 'finance',
  },
  {
    id: 5,
    title: '探索海底世界：深海生物的奇妙生存之道',
    summary: '这部纪录片带您深入海底，探索那些生活在极端环境中的神奇生物，揭示它们独特的生存策略。',
    video: 'https://example.com/videos/deep-sea-life.mp4',
    thumbnail: 'https://source.unsplash.com/random/800x600?underwater,fish',
    category: 'video',
  },
  {
    id: 6,
    title: '太空探索新篇章：火星殖民计划最新进展',
    summary: '随着技术的进步，人类离移居火星的梦想越来越近。本视频详细介绍了最新的火星殖民计划和面临的挑战。',
    video: 'https://example.com/videos/mars-colonization.mp4',
    thumbnail: 'https://source.unsplash.com/random/800x600?mars,space',
    category: 'video',
  },
];

const VideoNews = ({ news }) => (
  <div className="relative">
    <img src={news.thumbnail} alt={news.title} className="w-full h-48 object-cover rounded-lg" />
    <div className="absolute inset-0 flex items-center justify-center">
      <Play className="w-12 h-12 text-white opacity-80" />
    </div>
    <div className="p-4 bg-white rounded-b-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2">{news.title}</h2>
      <p className="text-gray-600">{news.summary}</p>
    </div>
  </div>
);

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredNews = selectedCategory === 'all'
    ? mockNews
    : mockNews.filter(news => news.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold flex items-center">
            <Newspaper className="mr-2" />
            今日头条
          </h1>
        </div>
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {newsCategories.map((category) => (
            <Button
              key={category.value}
              variant={selectedCategory === category.value ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.value)}
              className="whitespace-nowrap"
            >
              {category.label}
            </Button>
          ))}
        </div>
      </header>
      <main>
        {filteredNews.map((news) => (
          <article key={news.id} className="mb-8">
            {news.category === 'video' ? (
              <VideoNews news={news} />
            ) : (
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={news.image} alt={news.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{news.title}</h2>
                  <p className="text-gray-600">{news.summary}</p>
                </div>
              </div>
            )}
          </article>
        ))}
      </main>
    </div>
  );
};

export default Index;
