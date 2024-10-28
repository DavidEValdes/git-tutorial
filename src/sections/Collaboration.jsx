import React from 'react';

const CodeBlock = ({ children }) => (
  <code className="block p-4 bg-gray-100 rounded font-mono text-sm">{children}</code>
);

const Collaboration = () => (
  <div className="space-y-8">
    <div>
      <h1 className="text-4xl font-bold mb-6">Team Collaboration</h1>
      <p className="text-xl text-gray-600">
        Learn how to effectively collaborate with team members using GitHub's powerful features and best practices.
      </p>
    </div>

    <div className="border-b pb-8">
      <h2 className="text-2xl font-bold mb-4">Repository Access Management</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-3">Permission Levels</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Read</h4>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>Clone and pull</li>
                <li>Create issues</li>
                <li>Submit discussions</li>
                <li>Create pull requests</li>
                <li>Fork repository</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Write</h4>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>Push to branches</li>
                <li>Manage issues</li>
                <li>Review PRs</li>
                <li>Create labels</li>
                <li>Manage projects</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Admin</h4>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>Manage access</li>
                <li>Delete repository</li>
                <li>Transfer ownership</li>
                <li>Configure settings</li>
                <li>Set up webhooks</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Managing Collaborators</h3>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Go to repository settings</li>
            <li>Select "Collaborators & teams"</li>
            <li>Click "Add people" or "Add teams"</li>
            <li>Search for users/teams</li>
            <li>Select appropriate permission level</li>
            <li>Send invitation</li>
          </ol>
        </div>
      </div>
    </div>

    <div className="border-b pb-8">
      <h2 className="text-2xl font-bold mb-4">Project Management</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-3">GitHub Projects</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <ul className="list-disc pl-5 space-y-2">
              <li>Create project board
                <ul className="list-disc pl-5 mt-1 text-sm">
                  <li>Choose template (Basic kanban, Automated kanban, etc.)</li>
                  <li>Set up columns (To do, In progress, Done)</li>
                  <li>Configure automation rules</li>
                </ul>
              </li>
              <li>Add items to project
                <ul className="list-disc pl-5 mt-1 text-sm">
                  <li>Convert issues to cards</li>
                  <li>Add pull requests</li>
                  <li>Create note cards</li>
                </ul>
              </li>
              <li>Track progress
                <ul className="list-disc pl-5 mt-1 text-sm">
                  <li>Move cards between columns</li>
                  <li>Set milestone dates</li>
                  <li>Monitor automated updates</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Milestones and Labels</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Milestones</h4>
              <ul className="list-disc pl-5">
                <li>Group related issues/PRs</li>
                <li>Set due dates</li>
                <li>Track progress</li>
                <li>Plan releases</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Labels</h4>
              <ul className="list-disc pl-5">
                <li>Categorize issues/PRs</li>
                <li>Set priorities</li>
                <li>Mark types (bug, feature)</li>
                <li>Track status</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="border-b pb-8">
      <h2 className="text-2xl font-bold mb-4">Code Review Culture</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-3">Review Guidelines</h3>
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="space-y-4">
              <div>
                <h4 className="font-bold">For Reviewers:</h4>
                <ul className="list-disc pl-5">
                  <li>Be respectful and constructive</li>
                  <li>Focus on code, not the developer</li>
                  <li>Explain reasoning behind suggestions</li>
                  <li>Ask questions instead of making demands</li>
                  <li>Acknowledge good practices</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold">For Authors:</h4>
                <ul className="list-disc pl-5">
                  <li>Respond to all comments</li>
                  <li>Explain implementation decisions</li>
                  <li>Be open to feedback</li>
                  <li>Update code based on valid suggestions</li>
                  <li>Thank reviewers for their time</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Code Review Checklist</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Technical Aspects</h4>
              <ul className="list-disc pl-5">
                <li>Code correctness</li>
                <li>Test coverage</li>
                <li>Performance impact</li>
                <li>Security considerations</li>
                <li>Error handling</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Documentation</h4>
              <ul className="list-disc pl-5">
                <li>Code comments</li>
                <li>API documentation</li>
                <li>README updates</li>
                <li>Changelog entries</li>
                <li>Example usage</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <h2 className="text-2xl font-bold mb-4">Communication Tools</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-3">GitHub Discussions</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <ul className="list-disc pl-5 space-y-2">
              <li>Create discussion categories
                <ul className="list-disc pl-5 mt-1 text-sm">
                  <li>Announcements</li>
                  <li>Ideas</li>
                  <li>Q&A</li>
                  <li>Show and tell</li>
                </ul>
              </li>
              <li>Engage with community
                <ul className="list-disc pl-5 mt-1 text-sm">
                  <li>Answer questions</li>
                  <li>Share updates</li>
                  <li>Gather feedback</li>
                  <li>Build community</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-50 p-6 rounded-lg mt-4">
          <h3 className="text-xl font-semibold mb-3">Best Practices for Collaboration</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Document processes and guidelines</li>
            <li>Maintain consistent coding standards</li>
            <li>Keep communication open and transparent</li>
            <li>Regular sync-ups and status updates</li>
            <li>Foster a positive team culture</li>
            <li>Celebrate team achievements</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Collaboration;