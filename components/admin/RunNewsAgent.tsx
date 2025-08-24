'use client'
import { useState } from 'react';

interface RunAgentProps {
  apiUrl: string;
}

export default function RunNewsAgent({ apiUrl }: RunAgentProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<{
    success: boolean;
    message: string;
    estimatedTime?: string;
  } | null>(null);
  const [mode, setMode] = useState<'trending' | 'breaking' | 'topic' | 'url'>('trending');
  const [topicCount, setTopicCount] = useState(1);
  const [topic, setTopic] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setResult(null);

    try {
      const payload: Record<string, string | number> = { mode };
      
      if (mode === 'trending') {
        payload.topicCount = topicCount;
      } else if (mode === 'topic') {
        payload.topic = topic;
      } else if (mode === 'url') {
        payload.url = url;
      }

      const response = await fetch(`${apiUrl}/articles/run-agent`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      
      setResult({
        success: response.ok,
        message: data.message || 'News agent started successfully',
        estimatedTime: data.estimatedTime,
      });
    } catch {
      // Catch any errors without referencing them
      setResult({
        success: false,
        message: 'Failed to start news agent',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Run News Agent</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Mode
          </label>
          <select
            value={mode}
            onChange={(e) => setMode(e.target.value as 'trending' | 'breaking' | 'topic' | 'url')}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            <option value="trending">Trending Topics</option>
            <option value="breaking">Breaking News</option>
            <option value="topic">Specific Topic</option>
            <option value="url">News URL</option>
          </select>
        </div>

        {mode === 'trending' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Number of Topics
            </label>
            <input
              type="number"
              min="1"
              max="5"
              value={topicCount}
              onChange={(e) => setTopicCount(parseInt(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
        )}

        {mode === 'topic' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Topic
            </label>
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="Enter a news topic"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required={mode === 'topic'}
            />
          </div>
        )}

        {mode === 'url' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              News URL
            </label>
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://example.com/news-article"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required={mode === 'url'}
            />
          </div>
        )}

        <div>
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
              isLoading ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'
            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
          >
            {isLoading ? 'Starting...' : 'Run News Agent'}
          </button>
        </div>
      </form>

      {result && (
        <div className={`mt-4 p-4 rounded-md ${result.success ? 'bg-green-50 dark:bg-green-900' : 'bg-red-50 dark:bg-red-900'}`}>
          <p className={`text-sm ${result.success ? 'text-green-800 dark:text-green-200' : 'text-red-800 dark:text-red-200'}`}>
            {result.message}
          </p>
          {result.estimatedTime && (
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Estimated time: {result.estimatedTime}
            </p>
          )}
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Check the articles list for new content once processing is complete.
          </p>
        </div>
      )}
    </div>
  );
}
