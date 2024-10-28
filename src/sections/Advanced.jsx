import React from 'react';

const CodeBlock = ({ children }) => (
  <code className="block p-4 bg-gray-100 rounded font-mono text-sm">{children}</code>
);

const Advanced = () => (
  <div className="space-y-8">
    <div>
      <h1 className="text-4xl font-bold mb-6">Advanced GitHub Features</h1>
      <p className="text-xl text-gray-600">
        Explore advanced GitHub features to enhance your workflow, automate tasks, and improve security.
      </p>
    </div>

    <div className="border-b pb-8">
      <h2 className="text-2xl font-bold mb-4">GitHub Actions</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-3">Basic Workflow Example</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <CodeBlock>
              name: CI/CD Pipeline

              on:
                push:
                  branches: [ main ]
                pull_request:
                  branches: [ main ]

              jobs:
                build:
                  runs-on: ubuntu-latest
                  
                  steps:
                  - uses: actions/checkout@v3
                  
                  - name: Setup Node.js
                    uses: actions/setup-node@v3
                    with:
                      node-version: '18'
                      
                  - name: Install dependencies
                    run: npm ci
                    
                  - name: Run tests
                    run: npm test
                    
                  - name: Build
                    run: npm run build
            </CodeBlock>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Common Use Cases</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="list-disc pl-5 space-y-2">
              <li>Continuous Integration
                <ul className="list-disc pl-5 mt-1 text-sm">
                  <li>Run tests</li>
                  <li>Code linting</li>
                  <li>Build verification</li>
                </ul>
              </li>
              <li>Continuous Deployment
                <ul className="list-disc pl-5 mt-1 text-sm">
                  <li>Automated releases</li>
                  <li>Deploy to staging/production</li>
                  <li>Version management</li>
                </ul>
              </li>
            </ul>
            <ul className="list-disc pl-5 space-y-2">
              <li>Automation
                <ul className="list-disc pl-5 mt-1 text-sm">
                  <li>Issue management</li>
                  <li>PR validation</li>
                  <li>Documentation updates</li>
                </ul>
              </li>
              <li>Quality Checks
                <ul className="list-disc pl-5 mt-1 text-sm">
                  <li>Security scanning</li>
                  <li>Performance testing</li>
                  <li>Code coverage</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="border-b pb-8">
      <h2 className="text-2xl font-bold mb-4">Security Features</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-3">Code Scanning</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="mb-4">Set up CodeQL analysis:</p>
            <CodeBlock>
              name: "CodeQL"

              on:
                push:
                  branches: [ main ]
                pull_request:
                  branches: [ main ]
                schedule:
                  - cron: '0 0 * * 0'

              jobs:
                analyze:
                  runs-on: ubuntu-latest
                  
                  steps:
                  - uses: actions/checkout@v3
                  - uses: github/codeql-action/init@v2
                  - uses: github/codeql-action/analyze@v2
            </CodeBlock>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Security Best Practices</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Repository Security</h4>
              <ul className="list-disc pl-5">
                <li>Enable dependency alerts</li>
                <li>Use secret scanning</li>
                <li>Implement branch protection</li>
                <li>Regular security updates</li>
                <li>Access control review</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Code Security</h4>
              <ul className="list-disc pl-5">
                <li>SAST implementation</li>
                <li>Dependency scanning</li>
                <li>Security policy</li>
                <li>Vulnerability reporting</li>
                <li>Regular audits</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="border-b pb-8">
      <h2 className="text-2xl font-bold mb-4">GitHub Pages</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-3">Setting Up GitHub Pages</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <ol className="list-decimal pl-5 space-y-2">
              <li>Go to repository settings</li>
              <li>Navigate to Pages section</li>
              <li>Select branch and folder
                <ul className="list-disc pl-5 mt-1 text-sm">
                  <li>main branch</li>
                  <li>docs folder or root</li>
                  <li>Custom domain (optional)</li>
                </ul>
              </li>
              <li>Configure build settings
                <ul className="list-disc pl-5 mt-1 text-sm">
                  <li>Jekyll</li>
                  <li>Static HTML</li>
                  <li>Custom actions</li>
                </ul>
              </li>
            </ol>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Custom Domain Setup</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <CodeBlock>
              # CNAME file content
              example.com

              # DNS Records
              CNAME www - username.github.io
              A @ - 185.199.108.153
              A @ - 185.199.109.153
              A @ - 185.199.110.153
              A @ - 185.199.111.153
            </CodeBlock>
          </div>
        </div>
      </div>
    </div>

    <div>
      <h2 className="text-2xl font-bold mb-4">Advanced Git Operations</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-3">Submodules</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <CodeBlock>
              # Add submodule
              git submodule add https://github.com/user/repo

              # Initialize submodules
              git submodule init
              git submodule update

              # Update all submodules
              git submodule update --remote

              # Clone with submodules
              git clone --recursive [url]
            </CodeBlock>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Git LFS</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <CodeBlock>
              # Install Git LFS
              git lfs install

              # Track large files
              git lfs track "*.psd"
              git lfs track "*.zip"

              # Verify tracked files
              git lfs ls-files

              # Push including LFS objects
              git push origin main
            </CodeBlock>
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg mt-4">
          <h3 className="text-xl font-semibold mb-3">Advanced Features Tips</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Use GitHub Actions for automated workflows</li>
            <li>Implement comprehensive security scanning</li>
            <li>Leverage GitHub Pages for documentation</li>
            <li>Utilize Git LFS for large files</li>
            <li>Consider using submodules for complex projects</li>
            <li>Enable all relevant security features</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Advanced;