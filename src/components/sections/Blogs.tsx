import { useEffect, useState } from 'react';

interface BlogPost {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  thumbnail?: string;
}

const Blogs = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        setError(null);

        // Medium RSS feed URL
        const mediumRssUrl = 'https://medium.com/feed/@opscorelabsofficial';
        
        // Use CORS proxy to fetch RSS feed
        const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(mediumRssUrl)}`;
        
        const response = await fetch(proxyUrl);
        const xmlText = await response.text();

        // Parse RSS XML
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
        const items = xmlDoc.querySelectorAll('item');

        const blogPosts: BlogPost[] = [];

        items.forEach((item) => {
          const title = item.querySelector('title')?.textContent || '';
          const link = item.querySelector('link')?.textContent || '';
          const pubDate = item.querySelector('pubDate')?.textContent || '';
          const description = item.querySelector('description')?.textContent || '';

          // Extract thumbnail from description (Medium includes images in description)
          const imgMatch = description.match(/<img[^>]+src="([^">]+)"/);
          const thumbnail = imgMatch ? imgMatch[1] : undefined;

          // Clean description (remove HTML tags)
          const cleanDescription = description
            .replace(/<[^>]*>/g, '')
            .replace(/&nbsp;/g, ' ')
            .trim()
            .substring(0, 150);

          blogPosts.push({
            title,
            link,
            pubDate,
            description: cleanDescription,
            thumbnail,
          });
        });

        // Limit to 6 most recent blogs
        setBlogs(blogPosts.slice(0, 6));
      } catch (err) {
        console.error('Error fetching blogs:', err);
        setError('Failed to load blogs. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });
    } catch {
      return '';
    }
  };

  const handleBlogClick = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  if (loading) {
    return (
      <section id="blogs" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-sm sm:text-base font-bold text-brand-600 uppercase tracking-wide mb-2">
              Our Blog
            </h2>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-slate-900 mb-4">
              Latest Insights & Updates
            </h3>
            <p className="text-base sm:text-lg text-slate-600">Loading articles...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error || blogs.length === 0) {
    return (
      <section id="blogs" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-sm sm:text-base font-bold text-brand-600 uppercase tracking-wide mb-2">
              Our Blog
            </h2>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-slate-900 mb-4">
              Latest Insights & Updates
            </h3>
            <p className="text-base sm:text-lg text-slate-600">
              {error || 'No blog posts available at the moment.'}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="blogs" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-sm sm:text-base font-bold text-brand-600 uppercase tracking-wide mb-2">
            Our Blog
          </h2>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-slate-900 mb-4">
            Latest Insights & Updates
          </h3>
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 px-2">
            Stay updated with our latest thoughts on technology, development, and industry insights.
          </p>
        </div>

        {/* Responsive Blog Cards */}
        {/* Mobile & Tablet: Horizontal Scroll */}
        <div className="lg:hidden overflow-x-auto pb-4 -mx-4 px-4 sm:-mx-6 sm:px-6 scrollbar-hide">
          <div className="flex gap-4 sm:gap-6 min-w-max">
            {blogs.map((blog, index) => (
              <div
                key={index}
                onClick={() => handleBlogClick(blog.link)}
                className="flex-shrink-0 w-[280px] sm:w-80 bg-white rounded-xl sm:rounded-2xl shadow-card hover:shadow-card-hover hover-lift border border-slate-100 cursor-pointer transition-all duration-300 overflow-hidden group"
                tabIndex={0}
                role="button"
                aria-label={`Read blog: ${blog.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleBlogClick(blog.link);
                  }
                }}
              >
                {/* Thumbnail */}
                {blog.thumbnail && (
                  <div className="w-full h-40 sm:h-48 overflow-hidden bg-slate-100">
                    <img
                      src={blog.thumbnail}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-2 sm:mb-3 flex-wrap gap-1">
                    <span className="text-xs font-semibold text-brand-600 uppercase tracking-wide">
                      Blog Post
                    </span>
                    <span className="text-xs text-slate-500 whitespace-nowrap">
                      {formatDate(blog.pubDate)}
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg lg:text-xl font-bold text-slate-900 mb-2 sm:mb-3 line-clamp-2 group-hover:text-brand-600 transition-colors">
                    {blog.title}
                  </h4>

                  <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed line-clamp-3 mb-3 sm:mb-4">
                    {blog.description}
                  </p>

                  <div className="flex items-center text-brand-600 font-semibold text-xs sm:text-sm group-hover:gap-2 transition-all">
                    <span>Read More</span>
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4 ml-1 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Grid Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              onClick={() => handleBlogClick(blog.link)}
              className="bg-white rounded-2xl shadow-card hover:shadow-card-hover hover-lift border border-slate-100 cursor-pointer transition-all duration-300 overflow-hidden group flex flex-col"
              tabIndex={0}
              role="button"
              aria-label={`Read blog: ${blog.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleBlogClick(blog.link);
                }
              }}
            >
              {/* Thumbnail */}
              {blog.thumbnail && (
                <div className="w-full h-48 overflow-hidden bg-slate-100">
                  <img
                    src={blog.thumbnail}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              )}

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-brand-600 uppercase tracking-wide">
                    Blog Post
                  </span>
                  <span className="text-xs text-slate-500">{formatDate(blog.pubDate)}</span>
                </div>

                <h4 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-brand-600 transition-colors flex-1">
                  {blog.title}
                </h4>

                <p className="text-base text-slate-600 leading-relaxed line-clamp-3 mb-4">
                  {blog.description}
                </p>

                <div className="flex items-center text-brand-600 font-semibold text-sm group-hover:gap-2 transition-all mt-auto">
                  <span>Read More</span>
                  <svg
                    className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-6 sm:mt-8">
          <a
            href="https://medium.com/@opscorelabsofficial"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-brand-600 font-semibold text-sm sm:text-base hover:text-brand-700 transition-colors"
          >
            <span>View All Articles on Medium</span>
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blogs;

