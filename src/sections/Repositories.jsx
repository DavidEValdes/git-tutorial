import React from 'react';

const CodeBlock = ({ children }) => (
  <code className="block p-4 bg-gray-100 rounded font-mono text-sm">{children}</code>
);

const Repositories = () => (
  <div className="space-y-8">
    <div>
      <h1 className="text-4xl font-bold mb-6">Working with Repositories</h1>
      <p className="text-xl text-gray-600">
        Repositories are the fundamental unit of GitHub, containing your project's files and each file's revision history.
      </p>
    </div>

    <div className="border-b pb-8">
      <h2 className="text-2xl font-bold mb-4">Creating Repositories</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-3">Via GitHub Web Interface</h3>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Click the '+' dropdown in the top-right corner</li>
            <li>Select "New repository"</li>
            <li>Choose an owner (your account or organization)</li>
            <li>Enter a repository name
              <ul className="list-disc pl-5 mt-1 text-sm">
                <li>Use lowercase letters, numbers, and hyphens</li>
                <li>Keep it short but descriptive</li>
                <li>Avoid special characters</li>
              </ul>
            </li>
            <li>Add a description (recommended)</li>
            <li>Choose public or private visibility</li>
            <li>Initialize with README if starting fresh</li>
            <li>Add .gitignore template if needed</li>
            <li>Choose a license</li>
          </ol>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Via Command Line</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <CodeBlock>
              # Create a new directory
              mkdir my-project
              cd my-project

              # Initialize git repository
              git init

              # Add README file
              echo "# My Project"  README.md

              # Make first commit
              git add README.md
              git commit -m "Initial commit"

              # Add remote repository
              git remote add origin https://github.com/username/repo.git

              # Push to GitHub
              git branch -M main
              git push -u origin main
            </CodeBlock>
          </div>
        </div>
      </div>
    </div>

    <div className="border-b pb-8">
      <h2 className="text-2xl font-bold mb-4">Repository Structure</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-3">Essential Files</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold mb-2">README.md</h4>
              <p className="text-gray-600 mb-4">Project documentation that GitHub displays on your repository's main page.</p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-medium mb-2">Should include:</p>
                <ul className="list-disc pl-5">
                  <li>Project name and description</li>
                  <li>Installation instructions</li>
                  <li>Usage examples</li>
                  <li>Contributing guidelines</li>
                  <li>License information</li>
                </ul>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-2">.gitignore</h4>
              <p className="text-gray-600 mb-4">Specifies which files Git should ignore.</p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <CodeBlock>
                  # Example .gitignore
                  node_modules/
                  .env
                  .DS_Store
                  *.log
                  dist/
                  coverage/
                </CodeBlock>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Common Directories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="list-disc pl-5 space-y-2">
              <li><span className="font-bold">src/</span> - Source code</li>
              <li><span className="font-bold">tests/</span> - Test files</li>
              <li><span className="font-bold">docs/</span> - Documentation</li>
              <li><span className="font-bold">scripts/</span> - Build/automation scripts</li>
            </ul>
            <ul className="list-disc pl-5 space-y-2">
              <li><span className="font-bold">.github/</span> - GitHub specific files</li>
              <li><span className="font-bold">assets/</span> - Images and other assets</li>
              <li><span className="font-bold">config/</span> - Configuration files</li>
              <li><span className="font-bold">examples/</span> - Example code</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="border-b pb-8">
      <h2 className="text-2xl font-bold mb-4">Repository Management</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-3">Settings and Configuration</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <ul className="list-disc pl-5 space-y-2">
              <li>Branch protection rules
                <ul className="list-disc pl-5 mt-1 text-sm">
                  <li>Require pull request reviews</li>
                  <li>Require status checks</li>
                  <li>Include administrators</li>
                </ul>
              </li>
              <li>Access management
                <ul className="list-disc pl-5 mt-1 text-sm">
                  <li>Add collaborators</li>
                  <li>Manage team access</li>
                  <li>Set up deploy keys</li>
                </ul>
              </li>
              <li>GitHub Pages configuration</li>
              <li>Webhooks and integrations</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Useful Commands</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <CodeBlock>
              # Clone repository
              git clone [url]

              # Update local repository
              git fetch
              git pull

              # View repository info
              git remote -v
              git branch -a
              git status

              # Create and switch branches
              git checkout -b feature-branch

              # Clean up
              git remote prune origin
              git gc
            </CodeBlock>
          </div>
        </div>
      </div>
    </div>

    <div>
      <h2 className="text-2xl font-bold mb-4">Best Practices</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Organization</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Use clear, descriptive repository names</li>
            <li>Maintain comprehensive documentation</li>
            <li>Keep repositories focused and modular</li>
            <li>Archive inactive repositories</li>
            <li>Use topics and tags for categorization</li>
          </ul>
        </div>

        <div className="bg-green-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Security</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Regular security updates</li>
            <li>Code scanning and analysis</li>
            <li>Dependency management</li>
            <li>Access control and review</li>
            <li>Secret scanning enabled</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Repositories;