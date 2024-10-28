import React from 'react';

const CodeBlock = ({ children }) => (
  <code className="block p-4 bg-gray-100 rounded font-mono text-sm">{children}</code>
);

const Commits = () => (
  <div className="space-y-8">
    <div>
      <h1 className="text-4xl font-bold mb-6">Making and Managing Commits</h1>
      <p className="text-xl text-gray-600">
        Commits are the fundamental building blocks of Git history, representing snapshots of your project at specific points in time.
      </p>
    </div>

    <div className="border-b pb-8">
      <h2 className="text-2xl font-bold mb-4">Understanding Commits</h2>
      <div className="space-y-6">
        <p className="text-gray-600">
          A commit in Git represents a snapshot of your repository at a specific point in time. Each commit includes:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>A unique identifier (SHA-1 hash)</li>
          <li>The author's name and email</li>
          <li>The date and time</li>
          <li>A commit message describing the changes</li>
          <li>Reference to the parent commit(s)</li>
          <li>A snapshot of all tracked files</li>
        </ul>
      </div>
    </div>

    <div className="border-b pb-8">
      <h2 className="text-2xl font-bold mb-4">The Commit Workflow</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-3">1. Staging Changes</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <CodeBlock>
              # Check status of working directory
              git status

              # Stage specific file
              git add filename.txt

              # Stage multiple files
              git add file1.txt file2.txt

              # Stage all changes
              git add .

              # Stage parts of files interactively
              git add -p

              # Remove file from staging
              git reset filename.txt
            </CodeBlock>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">2. Creating Commits</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <CodeBlock>
              # Commit with message
              git commit -m "Add new feature"

              # Commit staged changes with detailed message
              git commit

              # Stage and commit tracked files
              git commit -am "Fix bug in login"

              # Amend last commit
              git commit --amend
            </CodeBlock>
          </div>
        </div>
      </div>
    </div>

    <div className="border-b pb-8">
      <h2 className="text-2xl font-bold mb-4">Commit Best Practices</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold mb-3">Writing Good Commit Messages</h3>
          <div className="bg-blue-50 p-4 rounded-lg">
            <ul className="list-disc pl-5 space-y-2">
              <li>Use the imperative mood ("Add" not "Added")</li>
              <li>Keep subject line under 50 characters</li>
              <li>Capitalize the subject line</li>
              <li>Don't end subject with a period</li>
              <li>Separate subject from body with blank line</li>
              <li>Wrap body text at 72 characters</li>
              <li>Use body to explain what and why</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Commit Structure Example</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <CodeBlock>
              feat: Add user authentication

              - Implement JWT token-based auth
              - Add login and register endpoints
              - Include password reset functionality

              Closes #123
            </CodeBlock>
          </div>
        </div>
      </div>
    </div>

    <div className="border-b pb-8">
      <h2 className="text-2xl font-bold mb-4">Managing History</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-3">Viewing History</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <CodeBlock>
              # View commit history
              git log

              # View compact history
              git log --oneline

              # View history with graph
              git log --graph --oneline

              # View changes in commit
              git show [commit-hash]

              # View file history
              git log -p filename

              # View who changed what
              git blame filename
            </CodeBlock>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Modifying History</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <CodeBlock>
              # Undo last commit but keep changes
              git reset HEAD~1

              # Completely undo last commit
              git reset --hard HEAD~1

              # Revert a commit
              git revert [commit-hash]

              # Interactive rebase
              git rebase -i HEAD~3
            </CodeBlock>
          </div>
        </div>
      </div>
    </div>

    <div>
      <h2 className="text-2xl font-bold mb-4">Advanced Commit Operations</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-3">Cherry Picking</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <CodeBlock>
              # Apply commit to current branch
              git cherry-pick [commit-hash]

              # Cherry pick without committing
              git cherry-pick -n [commit-hash]
            </CodeBlock>
            <p className="mt-2 text-gray-600">
              Useful for applying specific changes from one branch to another.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Searching History</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <CodeBlock>
              # Search commit messages
              git log --grep="bug"

              # Search for code changes
              git log -S"function_name"

              # Search by author
              git log --author="John"

              # Search by date
              git log --since="2 weeks ago"
            </CodeBlock>
          </div>
        </div>

        <div className="bg-yellow-50 p-6 rounded-lg mt-4">
          <h3 className="text-xl font-semibold mb-3">⚠️ Important Notes:</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Never rewrite history that's been pushed to shared branches</li>
            <li>Always create backups before major history modifications</li>
            <li>Use interactive rebase with caution</li>
            <li>Consider using git reflog to recover lost commits</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Commits;