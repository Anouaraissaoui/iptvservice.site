import React from 'react';
import { useParams } from 'react-router-dom';
import { MDXProvider } from '@mdx-js/react';

const components = {
  h1: (props: any) => <h1 className="text-3xl font-bold mb-4" {...props} />,
  h2: (props: any) => <h2 className="text-2xl font-bold mb-3" {...props} />,
  p: (props: any) => <p className="mb-4" {...props} />,
  ul: (props: any) => <ul className="list-disc ml-6 mb-4" {...props} />,
  li: (props: any) => <li className="mb-2" {...props} />,
};

const Post = () => {
  const { slug } = useParams();
  
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <MDXProvider components={components}>
        <div className="prose prose-lg">
          <h1>IPTV Troubleshooting Guide</h1>
          <p>Welcome to our comprehensive IPTV troubleshooting guide. Here you'll find solutions to common issues and tips to improve your streaming experience.</p>
          
          <h2>First Steps</h2>
          <ul>
            <li>Check your internet connection</li>
            <li>Verify your subscription status</li>
            <li>Ensure your device is compatible</li>
          </ul>
          
          <h2>Common Issues</h2>
          <ul>
            <li>Buffering problems</li>
            <li>Channel loading errors</li>
            <li>Audio/video sync issues</li>
          </ul>
        </div>
      </MDXProvider>
    </div>
  );
};

export default Post;