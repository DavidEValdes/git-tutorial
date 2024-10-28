import React from 'react';

const CodeBlock = ({ children }) => (
  <code className="block p-4 bg-gray-100 rounded font-mono text-sm">{children}</code>
);

const GettingStarted = () => (
  <div className="space-y-8">
    <div>
      <h1 className="text-4xl font-bold mb-6">Getting Started with GitHub</h1>
      <p className="text-xl text-gray-600">
        Learn the fundamentals of Git and GitHub to start your version control journey.
      </p>
    </div>

    <div className="border-b pb-8">
      <h2 className="text-2xl font-bold mb-4">1. Setting Up Your Environment</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-3">Installing Git</h3>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-bold mb-2">Windows:</p>
              <CodeBlock>
                # Download Git from git-scm.com and run installer
                # Or use Windows Package Manager
                winget install Git.Git
              </CodeBlock>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-bold mb-2">macOS:</p>
              <CodeBlock>
                # Using Homebrew
                brew install git

                # Or using MacPorts
                sudo port install git
              </CodeBlock>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-bold mb-2">Linux:</p>
              <CodeBlock>
                # Debian/Ubuntu
                sudo apt-get update
                sudo apt-get install git

                # Fedora
                sudo dnf install git
              </CodeBlock>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Initial Configuration</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <CodeBlock>
              # Set your identity
              git config --global user.name "Your Name"
              git config --global user.email "your.email@example.com"

              # Set default branch name
              git config --global init.defaultBranch main

              # Set default editor (optional)
              git config --global core.editor "code --wait"

              # Configure line endings
              git config --global core.autocrlf true  # Windows
              git config --global core.autocrlf input # Mac/Linux
            </CodeBlock>
          </div>
        </div>
      </div>
    </div>

    <div className="border-b pb-8">
      <h2 className="text-2xl font-bold mb-4">2. GitHub Account Setup</h2>
      <div className="space-y-6">
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Best Practices:</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Choose a professional username</li>
            <li>Use a business email address</li>
            <li>Enable two-factor authentication</li>
            <li>Add a profile picture</li>
            <li>Complete your bio</li>
            <li>Add your location and company</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">SSH Key Setup</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <CodeBlock>
              # Generate SSH key
              ssh-keygen -t ed25519 -C "your.email@example.com"

              # Start SSH agent
              eval "$(ssh-agent -s)"

              # Add SSH key to agent
              ssh-add ~/.ssh/id_ed25519

              # Copy public key to clipboard (then add to GitHub)
              cat ~/.ssh/id_ed25519.pub
            </CodeBlock>
          </div>
        </div>
      </div>
    </div>

    <div>
      <h2 className="text-2xl font-bold mb-4">3. Basic Git Commands</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold mb-3">Repository Commands</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <CodeBlock>
              # Initialize repository
              git init

              # Clone repository
              git clone [url]

              # Add remote
              git remote add origin [url]

              # View remotes
              git remote -v
            </CodeBlock>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Working with Changes</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <CodeBlock>
              # Check status
              git status

              # Stage changes
              git add [file]
              git add .

              # Commit changes
              git commit -m "message"

              # Push changes
              git push origin main
            </CodeBlock>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-yellow-50 p-6 rounded-lg mt-8">
      <h3 className="text-xl font-semibold mb-3">Next Steps:</h3>
      <ul className="list-disc pl-5 space-y-2">
        <li>Create your first repository</li>
        <li>Make your first commit</li>
        <li>Create your first branch</li>
        <li>Open your first pull request</li>
        <li>Collaborate on your first project</li>
      </ul>
    </div>
  </div>
);

export default GettingStarted;