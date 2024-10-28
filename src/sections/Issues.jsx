import React from 'react';

const CodeBlock = ({ children }) => (
  <code className="block p-4 bg-gray-100 rounded font-mono text-sm">{children}</code>
);

const Issues = () => (
  <div className="space-y-8">
    <div>
      <h1 className="text-4xl font-bold mb-6">Working with Issues</h1>
      <p className="text-xl text-gray-600">
        Issues are used to track ideas, enhancements, tasks, bugs, and other work in your GitHub repository.
      </p>
    </div>

    <div className="border-b pb-8">
      <h2 className="text-2xl font-bold mb-4">Issue Templates</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-3">Creating Issue Templates</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="mb-4">Create templates in <code>.github/ISSUE_TEMPLATE/</code> directory:</p>
            <CodeBlock>
              name: Bug Report
              about: Create a report to help us improve
              title: "[BUG] "
              labels: bug
              assignees: ""

              body:
              - type: markdown
                attributes:
                  value: Thanks for taking the time to fill out this bug report!

              - type: input
                attributes:
                  label: What version are you using?
                  required: true

              - type: textarea
                attributes:
                  label: Describe the bug
                  placeholder: A clear description of what the bug is...
                  required: true

              - type: textarea
                attributes:
                  label: Steps to reproduce
                  value: |
                    1. Go to '...'
                    2. Click on '...'
                    3. See error
            </CodeBlock>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Template Types</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Bug Report Template</h4>
              <ul className="list-disc pl-5">
                <li>Description of the issue</li>
                <li>Steps to reproduce</li>
                <li>Expected behavior</li>
                <li>Actual behavior</li>
                <li>System information</li>
                <li>Screenshots</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Feature Request Template</h4>
              <ul className="list-disc pl-5">
                <li>Problem description</li>
                <li>Proposed solution</li>
                <li>Alternative solutions</li>
                <li>Additional context</li>
                <li>User impact</li>
                <li>Implementation suggestions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="border-b pb-8">
      <h2 className="text-2xl font-bold mb-4">Managing Issues</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-3">Labels and Organization</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold mb-2">Common Labels:</h4>
              <div className="space-y-2">
                <p><span className="bg-red-100 px-2 py-1 rounded">bug</span> - Something isn't working</p>
                <p><span className="bg-green-100 px-2 py-1 rounded">enhancement</span> - New feature requests</p>
                <p><span className="bg-blue-100 px-2 py-1 rounded">documentation</span> - Documentation updates</p>
                <p><span className="bg-yellow-100 px-2 py-1 rounded">help wanted</span> - Extra attention needed</p>
                <p><span className="bg-purple-100 px-2 py-1 rounded">good first issue</span> - Good for newcomers</p>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Issue Organization:</h4>
              <ul className="list-disc pl-5">
                <li>Use clear titles</li>
                <li>Apply relevant labels</li>
                <li>Assign to team members</li>
                <li>Link related PRs</li>
                <li>Set milestones</li>
                <li>Use projects for tracking</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Issue Workflow</h3>
          <div className="bg-blue-50 p-6 rounded-lg">
            <ol className="list-decimal pl-5 space-y-2">
              <li>Triage new issues
                <ul className="list-disc pl-5 mt-1 text-sm">
                  <li>Verify issue content</li>
                  <li>Add labels</li>
                  <li>Request more information if needed</li>
                </ul>
              </li>
              <li>Assignment and Planning
                <ul className="list-disc pl-5 mt-1 text-sm">
                  <li>Assign to team members</li>
                  <li>Set priority</li>
                  <li>Add to project board</li>
                </ul>
              </li>
              <li>Work and Updates
                <ul className="list-disc pl-5 mt-1 text-sm">
                  <li>Regular status updates</li>
                  <li>Link related work</li>
                  <li>Document decisions</li>
                </ul>
              </li>
              <li>Resolution
                <ul className="list-disc pl-5 mt-1 text-sm">
                  <li>Verify fix/implementation</li>
                  <li>Update documentation</li>
                  <li>Close with reference to fix</li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>

    <div className="border-b pb-8">
      <h2 className="text-2xl font-bold mb-4">Issue Search and Filtering</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-3">Search Qualifiers</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <CodeBlock>
              # Common search examples
              is:issue is:open label:bug             # Open bug issues
              is:issue author:username               # Issues created by user
              is:issue assignee:username             # Issues assigned to user
              is:issue milestone:"Release 1.0"       # Issues in milestone
              is:issue created:2023-01-01          # Issues created after date
              is:issue label:enhancement state:open  # Open feature requests
            </CodeBlock>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Filter Views</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="list-disc pl-5">
              <li>Created by you</li>
              <li>Assigned to you</li>
              <li>Mentioning you</li>
              <li>Recent activity</li>
              <li>Saved custom filters</li>
            </ul>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-bold mb-2">Pro Tip:</p>
              <p>Save commonly used filters for quick access to important views.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <h2 className="text-2xl font-bold mb-4">Best Practices</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-green-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Creating Issues</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Use descriptive titles</li>
            <li>Provide complete information</li>
            <li>Include reproduction steps</li>
            <li>Add relevant labels</li>
            <li>Link related issues/PRs</li>
            <li>Include system details</li>
          </ul>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Managing Issues</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Regular triage sessions</li>
            <li>Keep status updated</li>
            <li>Use templates consistently</li>
            <li>Document decisions</li>
            <li>Close resolved issues</li>
            <li>Archive when needed</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Issues;