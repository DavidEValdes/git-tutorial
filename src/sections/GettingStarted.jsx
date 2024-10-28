import React from 'react';

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
              <div className="bg-gray-100 p-4 rounded font-mono text-sm">
                # Download Git from git-scm.com and run installer <br />
                # Or use Windows Package Manager <br />
                winget install Git.Git
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-bold mb-2">macOS:</p>
              <div className="bg-gray-100 p-4 rounded font-mono text-sm">
                # Using Homebrew <br />
                brew install git <br /><br />
                # Or using MacPorts <br />
                sudo port install git
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-bold mb-2">Linux:</p>
              <div className="bg-gray-100 p-4 rounded font-mono text-sm">
                # Debian/Ubuntu <br />
                sudo apt-get update <br />
                sudo apt-get install git <br /><br />
                # Fedora <br />
                sudo dnf install git
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Initial Configuration</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="bg-gray-100 p-4 rounded font-mono text-sm">
              # Set your identity <br />
              git config --global user.name "Your Name" <br />
              git config --global user.email "your.email@example.com" <br /><br />
              # Set default branch name <br />
              git config --global init.defaultBranch main <br /><br />
              # Set default editor (optional) <br />
              git config --global core.editor "code --wait" <br /><br />
              # Configure line endings <br />
              git config --global core.autocrlf true  # Windows <br />
              git config --global core.autocrlf input # Mac/Linux
            </div>
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
            <div className="bg-gray-100 p-4 rounded font-mono text-sm">
              # Generate SSH key <br />
              ssh-keygen -t ed25519 -C "your.email@example.com" <br /><br />
              # Start SSH agent <br />
              eval "$(ssh-agent -s)" <br /><br />
              # Add SSH key to agent <br />
              ssh-add ~/.ssh/id_ed25519 <br /><br />
              # Copy public key to clipboard (then add to GitHub) <br />
              cat ~/.ssh/id_ed25519.pub
            </div>
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
            <div className="bg-gray-100 p-4 rounded font-mono text-sm">
              # Initialize repository <br />
              git init <br /><br />
              # Clone repository <br />
              git clone [url] <br /><br />
              # Add remote <br />
              git remote add origin [url] <br /><br />
              # View remotes <br />
              git remote -v
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Working with Changes</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="bg-gray-100 p-4 rounded font-mono text-sm">
              # Check status <br />
              git status <br /><br />
              # Stage changes <br />
              git add [file] <br />
              git add . <br /><br />
              # Commit changes <br />
              git commit -m "message" <br /><br />
              # Push changes <br />
              git push origin main
            </div>
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
