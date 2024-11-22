import React, { useState } from 'react';
import { Book, GitBranch, GitCommit, GitMerge, Home, Plus, MessageSquare, Settings, Users, Search, HelpCircle, FileText, Github, Rocket, Shield } from 'lucide-react';
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

const ContentBlock = ({ children, gradient }) => (
  <div className={`p-6 rounded-lg shadow ${gradient ? gradient : 'bg-white'}`}>{children}</div>
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
      <ContentBlock gradient="bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="text-center">
          <Github className="w-16 h-16 text-white mx-auto mb-4" />
          <PageTitle><span className="text-white">Learn Git & GitHub</span></PageTitle>
          <p className="text-xl text-blue-100 mt-4">Your comprehensive guide to version control and collaborative development.</p>
          <div className="mt-8 flex justify-center space-x-4">
            <button 
              onClick={() => setCurrentPage('gettingStarted')}
              className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all"
            >
              Get Started
            </button>
            
          </div>
        </div>
      </ContentBlock>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ContentBlock>
          <div className="border-l-4 border-blue-600 pl-6">
            <div className="flex items-center mb-4">
              <GitBranch className="w-6 h-6 text-blue-600 mr-2" />
              <h2 className="text-xl font-bold">What is Git?</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Git is a distributed version control system that tracks changes in your code. Think of it as a time machine for your project:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Track changes in your code over time
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Collaborate with others without conflicts
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Experiment with new features safely
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Revert to previous versions when needed
              </li>
            </ul>
          </div>
        </ContentBlock>

        <ContentBlock>
          <div className="border-l-4 border-blue-600 pl-6">
            <div className="flex items-center mb-4">
              <Github className="w-6 h-6 text-blue-600 mr-2" />
              <h2 className="text-xl font-bold">What is GitHub?</h2>
            </div>
            <p className="text-gray-600 mb-4">
              GitHub is a cloud platform that hosts Git repositories. It adds powerful collaboration and project management features:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Host and share your code online
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Collaborate with developers worldwide
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Manage projects with issues and boards
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Automate workflows with Actions
              </li>
            </ul>
          </div>
        </ContentBlock>
      </div>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="px-3 bg-white text-sm text-gray-500"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ContentBlock>
          <div className="flex items-center mb-4">
            <Rocket className="w-6 h-6 text-blue-600 mr-2" />
            <h2 className="text-xl font-bold">For Beginners</h2>
          </div>
          <p className="mb-4 text-gray-600">Start your journey with Git and GitHub basics.</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Basic Git commands</li>
            <li>Creating repositories</li>
            <li>Making commits</li>
            <li>Working with branches</li>
          </ul>
        </ContentBlock>
        <ContentBlock>
          <div className="flex items-center mb-4">
            <Users className="w-6 h-6 text-blue-600 mr-2" />
            <h2 className="text-xl font-bold">For Teams</h2>
          </div>
          <p className="mb-4 text-gray-600">Learn collaborative development workflows.</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Branch strategies</li>
            <li>Code reviews</li>
            <li>Project management</li>
            <li>Team permissions</li>
          </ul>
        </ContentBlock>
        <ContentBlock>
          <div className="flex items-center mb-4">
            <Shield className="w-6 h-6 text-blue-600 mr-2" />
            <h2 className="text-xl font-bold">For Enterprises</h2>
          </div>
          <p className="mb-4 text-gray-600">Discover enterprise-grade features.</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Security practices</li>
            <li>Large-scale management</li>
            <li>Compliance tools</li>
            <li>Enterprise solutions</li>
          </ul>
        </ContentBlock>
      </div>

      <ContentBlock>
        <div className="flex items-center mb-6">
          <Book className="w-8 h-8 text-blue-600 mr-3" />
          <h2 className="text-2xl font-bold">Learning Path</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-3">Essential Skills</h3>
            <ol className="list-decimal pl-5 space-y-3 text-gray-700">
              <li>Understanding Git basics</li>
              <li>Working with repositories</li>
              <li>Managing branches</li>
              <li>Collaborating with teams</li>
              <li>Handling pull requests</li>
            </ol>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-3">Advanced Topics</h3>
            <ul className="list-disc pl-5 space-y-3 text-gray-700">
              <li>GitHub Actions and CI/CD</li>
              <li>Repository management</li>
              <li>Security best practices</li>
              <li>Team workflows</li>
              <li>Project organization</li>
            </ul>
          </div>
        </div>
      </ContentBlock>

      <ContentBlock gradient="bg-gray-900">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Start?</h2>
          <p className="text-gray-300 mb-6">Begin your journey to mastering Git and GitHub today.</p>
          <button 
            onClick={() => setCurrentPage('gettingStarted')}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all"
          >
            Start Learning Now
          </button>
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
      <div className="flex items-center space-x-2">
        <Github className="h-6 w-6 text-blue-600" />
        <h1 className="text-xl font-bold text-gray-900">Git & GitHub Tutorial</h1>
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