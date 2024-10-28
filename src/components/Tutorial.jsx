import React, { useState } from 'react';
import { Book, GitBranch, GitCommit, GitMerge, Home, Plus, MessageSquare, Settings, Users, Search, HelpCircle, FileText } from 'lucide-react';
import GettingStarted from '../sections/GettingStarted';
import Repositories from '../sections/Repositories';
import Commits from '../sections/Commits';
import Branches from '../sections/Branches'; 
import PullRequests from '../sections/PullRequests';
import Collaboration from '../sections/Collaboration';
import Issues from '../sections/Issues';
import Advanced from '../sections/Advanced';
import FAQ from '../sections/FAQ';
import Glossary from '../sections/Glossary';

const ContentBlock = ({ children }) => (
  <div className="p-6 bg-white rounded-lg shadow">{children}</div>
);

const PageTitle = ({ children }) => (
  <h1 className="text-4xl font-bold mb-6">{children}</h1>
);

const CodeBlock = ({ children }) => (
  <code className="block p-4 bg-gray-100 rounded font-mono text-sm">{children}</code>
);

const Tutorial = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const navigation = [
    { name: 'Home', id: 'home', icon: Home },
    { name: 'Getting Started', id: 'gettingStarted', icon: Book },
    { name: 'Repositories', id: 'repositories', icon: Plus },
    { name: 'Commits', id: 'commits', icon: GitCommit },
    { name: 'Branches', id: 'branches', icon: GitBranch },
    { name: 'Pull Requests', id: 'pullRequests', icon: MessageSquare },
    { name: 'Collaboration', id: 'collaboration', icon: Users },
    { name: 'Issues', id: 'issues', icon: Search },
    { name: 'Advanced', id: 'advanced', icon: Settings },
    { name: 'FAQ', id: 'faq', icon: HelpCircle },
    { name: 'Glossary', id: 'glossary', icon: FileText }
  ];

  const renderHome = () => (
    <div className="space-y-8">
      <div className="text-center">
        <PageTitle>Learn GitHub</PageTitle>
        <p className="text-xl text-gray-600 mt-4">Your comprehensive guide to version control and collaborative development.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ContentBlock>
          <h2 className="text-xl font-bold mb-4">For Beginners</h2>
          <p className="mb-4">Start your journey with Git and GitHub basics.</p>
          <ul className="list-disc pl-5">
            <li>Basic Git commands</li>
            <li>Creating repositories</li>
            <li>Making commits</li>
            <li>Working with branches</li>
          </ul>
        </ContentBlock>
        <ContentBlock>
          <h2 className="text-xl font-bold mb-4">For Teams</h2>
          <p className="mb-4">Learn collaborative development workflows.</p>
          <ul className="list-disc pl-5">
            <li>Branch strategies</li>
            <li>Code reviews</li>
            <li>Project management</li>
            <li>Team permissions</li>
          </ul>
        </ContentBlock>
        <ContentBlock>
          <h2 className="text-xl font-bold mb-4">For Enterprises</h2>
          <p className="mb-4">Discover enterprise-grade features.</p>
          <ul className="list-disc pl-5">
            <li>Security practices</li>
            <li>Large-scale management</li>
            <li>Compliance tools</li>
            <li>Enterprise solutions</li>
          </ul>
        </ContentBlock>
      </div>

      <ContentBlock>
        <h2 className="text-2xl font-bold mb-4">Learning Path</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-bold mb-3">Essential Skills</h3>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Understanding Git basics</li>
              <li>Working with repositories</li>
              <li>Managing branches</li>
              <li>Collaborating with teams</li>
              <li>Handling pull requests</li>
            </ol>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3">Advanced Topics</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>GitHub Actions and CI/CD</li>
              <li>Repository management</li>
              <li>Security best practices</li>
              <li>Team workflows</li>
              <li>Project organization</li>
            </ul>
          </div>
        </div>
      </ContentBlock>
    </div>
  );

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return renderHome();
      case 'gettingStarted':
        return <GettingStarted />;
      case 'repositories':
        return <Repositories />;
      case 'commits':
        return <Commits />;
      case 'branches':
        return <Branches />;
      case 'pullRequests':
        return <PullRequests />;
      case 'collaboration':
        return <Collaboration />;
      case 'issues':
        return <Issues />;
      case 'advanced':
        return <Advanced />;
      case 'faq':
        return <FAQ />;
      case 'glossary':
        return <Glossary />;
      default:
        return (
          <div className="space-y-6">
            <PageTitle>{navigation.find(item => item.id === currentPage)?.name || 'Coming Soon'}</PageTitle>
            <ContentBlock>
              <p>This section is under development.</p>
            </ContentBlock>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">GitHub Tutorial</h1>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-3">
            <div className="bg-white rounded-lg shadow">
              <nav className="space-y-1 p-4">
                {navigation.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setCurrentPage(item.id)}
                    className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                      currentPage === item.id
                        ? 'bg-blue-100 text-blue-600'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <item.icon className="mr-3 h-5 w-5" />
                    {item.name}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          <main className="col-span-12 md:col-span-9">
            <div className="bg-white rounded-lg shadow p-6">
              {renderContent()}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;