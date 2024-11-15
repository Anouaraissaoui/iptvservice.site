import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";

export const InstallationTabs = () => {
  return (
    <Tabs defaultValue="firestick" className="space-y-8">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="firestick">Firestick</TabsTrigger>
        <TabsTrigger value="android">Android</TabsTrigger>
        <TabsTrigger value="appletv">Apple TV</TabsTrigger>
      </TabsList>

      <TabsContent value="firestick">
        <Card className="bg-navy-light border-white/10">
          <CardContent className="space-y-6 p-6">
            <h2 className="text-2xl font-bold text-white">Installing IPTV on Firestick</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Step 1: Enable Apps from Unknown Sources</h3>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>Go to the Firestick Home Screen</li>
                  <li>Navigate to Settings {'->'} My Fire TV {'->'} Developer Options</li>
                  <li>Enable Apps from Unknown Sources</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Step 2: Install Downloader App</h3>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>From the Home Screen, search for "Downloader"</li>
                  <li>Select and download the Downloader app</li>
                  <li>Open the Downloader app</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Step 3: Download and Install IPTV App</h3>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>Enter the URL of your preferred IPTV app</li>
                  <li>Download and install the APK file</li>
                  <li>Launch the IPTV app</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="android">
        <Card className="bg-navy-light border-white/10">
          <CardContent className="space-y-6 p-6">
            <h2 className="text-2xl font-bold text-white">Installing IPTV on Android</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Step 1: Enable Unknown Sources</h3>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>Go to Settings {'->'} Security</li>
                  <li>Enable Unknown Sources option</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Step 2: Download IPTV App</h3>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>Open your web browser</li>
                  <li>Download your preferred IPTV app APK</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Step 3: Install and Setup</h3>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>Locate and install the downloaded APK</li>
                  <li>Open the app and enter your service credentials</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="appletv">
        <Card className="bg-navy-light border-white/10">
          <CardContent className="space-y-6 p-6">
            <h2 className="text-2xl font-bold text-white">Installing IPTV on Apple TV</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Step 1: Install IPTV App</h3>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>Open the Apple App Store</li>
                  <li>Search for IPTV apps</li>
                  <li>Download and install your preferred app</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Step 2: Configure the App</h3>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>Launch the installed IPTV app</li>
                  <li>Enter your M3U URL or credentials</li>
                  <li>Start streaming your channels</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};