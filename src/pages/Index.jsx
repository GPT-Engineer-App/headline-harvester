import { useState } from 'react';
import { Newspaper } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const newsCategories = [
  { value: 'all', label: '全部' },
  { value: 'tech', label: '科技' },
  { value: 'sports', label: '体育' },
  { value: 'entertainment', label: '娱乐' },
  { value: 'finance', label: '财经' },
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
];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredNews = selectedCategory === 'all'
    ? mockNews
    : mockNews.filter(news => news.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold flex items-center">
          <Newspaper className="mr-2" />
          今日头条
        </h1>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="选择新闻类别" />
          </SelectTrigger>
          <SelectContent>
            {newsCategories.map((category) => (
              <SelectItem key={category.value} value={category.value}>
                {category.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </header>
      <main>
        {filteredNews.map((news) => (
          <article key={news.id} className="mb-8 bg-white rounded-lg shadow-md overflow-hidden">
            <img src={news.image} alt={news.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{news.title}</h2>
              <p className="text-gray-600">{news.summary}</p>
            </div>
          </article>
        ))}
      </main>
    </div>
  );
};

export default Index;
