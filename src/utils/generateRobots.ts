import { writeFileSync } from 'fs';
import { resolve } from 'path';

export const generateRobots = (domain: string) => {
  const robots = `# Premium IPTV Service Robots.txt
# Updated: ${new Date().toISOString().split('T')[0]}

User-agent: *
Allow: /
Allow: /sitemap.xml
Allow: /*.js$
Allow: /*.css$
Allow: /*.png$
Allow: /*.jpg$
Allow: /*.gif$
Allow: /*.svg$
Allow: /*.webp$

# Primary Sitemap
Sitemap: ${domain}/sitemap.xml

# Protected Areas
Disallow: /admin/
Disallow: /api/
Disallow: /checkout/
Disallow: /account/
Disallow: /private/
Disallow: /search
Disallow: /*?*
Disallow: /*&

# Block AI/ML Crawlers
User-agent: GPTBot
Disallow: /

User-agent: ChatGPT-User
Disallow: /

User-agent: Google-Extended
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: anthropic-ai
Disallow: /

User-agent: Claude-Web
Disallow: /

# Host
Host: ${domain}`;

  writeFileSync(resolve(process.cwd(), 'public', 'robots.txt'), robots);
};