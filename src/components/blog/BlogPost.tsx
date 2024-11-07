import React from 'react';
import { Card } from "@/components/ui/card";

const BlogPost = () => {
  return (
    <Card className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">How to Easily Set Up IPTV on FireStick?</h1>
      
      <div className="prose prose-slate max-w-none">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Prerequisites</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Amazon FireStick device</li>
            <li>Active internet connection</li>
            <li>Valid IPTV subscription</li>
            <li>IPTV player app (we'll help you choose one)</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Step-by-Step Guide</h2>
          
          <h3 className="text-xl font-medium mb-3">1. Enable Apps from Unknown Sources</h3>
          <p className="mb-4">
            First, you'll need to allow installation of apps from unknown sources:
            - Go to Settings
            - Select My Fire TV
            - Choose Developer Options
            - Enable "Apps from Unknown Sources"
          </p>

          <h3 className="text-xl font-medium mb-3">2. Install Downloader App</h3>
          <p className="mb-4">
            - Go to the Amazon App Store
            - Search for "Downloader"
            - Install the official Downloader app
          </p>

          <h3 className="text-xl font-medium mb-3">3. Install IPTV Player</h3>
          <p className="mb-4">
            Popular IPTV players include:
            - IPTV Smarters Pro
            - TiviMate
            - Perfect Player
          </p>

          <h3 className="text-xl font-medium mb-3">4. Configure Your IPTV Service</h3>
          <p className="mb-4">
            - Open your IPTV player
            - Enter your subscription details (URL, username, password)
            - Wait for the channel list to load
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Tips for Better Performance</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use a wired internet connection when possible</li>
            <li>Clear cache regularly</li>
            <li>Keep your FireStick updated</li>
            <li>Close background apps</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Troubleshooting</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>If streams buffer, check your internet speed</li>
            <li>Restart your FireStick if experiencing issues</li>
            <li>Verify your subscription is active</li>
            <li>Contact your provider for connection details</li>
          </ul>
        </div>
      </div>
    </Card>
  );
};

export default BlogPost;