import { useParams } from 'react-router-dom';
import { ServerSEO } from '@/components/ServerSEO';
import { useEffect, useState } from 'react';

const Post = () => {
  const { slug } = useParams();
  const [content, setContent] = useState<string>('');
  const [meta, setMeta] = useState<any>(null);

  useEffect(() => {
    const loadPost = async () => {
      try {
        const post = await import(`../content/posts/${slug}.mdx`);
        setContent(post.default);
        setMeta(post.metadata);
      } catch (error) {
        console.error('Failed to load post:', error);
      }
    };

    if (slug) {
      loadPost();
    }
  }, [slug]);

  if (!content || !meta) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <ServerSEO 
        title={meta.title}
        description={meta.description}
        canonical={`https://www.iptvservice.site/post/${slug}`}
        ogImage={meta.image}
      />
      <article className="prose prose-slate dark:prose-invert max-w-none">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </article>
    </div>
  );
};

export default Post;