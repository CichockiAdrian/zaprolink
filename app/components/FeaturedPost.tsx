import { Clock, Calendar } from 'lucide-react';

interface FeaturedPostProps {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
}

export default function FeaturedPost({
  title,
  excerpt,
  category,
  readTime,
  date,
  image,
}: FeaturedPostProps) {
  return (
    <article className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all">
      <div className="grid lg:grid-cols-2 gap-0">
        {/* Image */}
        <div className="relative h-64 lg:h-auto bg-gray-200 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          {/* Featured Badge */}
          <div className="absolute top-6 left-6">
            <span className="px-4 py-2 bg-gradient-to-r from-primary-600 to-purple-600 text-white text-sm font-bold rounded-full shadow-lg">
              Wyróżnione
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 lg:p-12 flex flex-col justify-center">
          {/* Category */}
          <div className="mb-4">
            <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full">
              {category}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 hover:text-primary-600 transition-colors cursor-pointer">
            {title}
          </h2>

          {/* Excerpt */}
          <p className="text-gray-600 text-lg mb-6">{excerpt}</p>

          {/* Meta */}
          <div className="flex items-center gap-6 text-gray-500 text-sm mb-6">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{readTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{date}</span>
            </div>
          </div>

          {/* CTA Button */}
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-full font-semibold hover:bg-primary-700 transition-colors w-fit">
            Czytaj artykuł
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}