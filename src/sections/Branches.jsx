import React from 'react';

const CodeBlock = ({ children }) => (
  <code className="block p-4 bg-gray-100 rounded font-mono text-sm">{children}</code>
);

const Branches = () => (
  <div className="space-y-8">
    <div>
      <h1 className="text-4xl font-bold mb-6">Working with Branches</h1>
      <p className="text-xl text-gray-600">
        Branches allow you to develop features, fix bugs, and experiment safely without affecting the main codebase.
      </p>
    </div>

    <div className="border-b pb-8">
      <h2 className="text-2xl font-bold mb-4">Basic Branch Operations</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-3">Creating and Switching Branches</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <CodeBlock>
              # List all branches
              git branch

              # Create new branch
              git branch feature-name

              # Switch to branch
              git checkout feature-name

              # Create and switch in one command
              git checkout -b feature-name

              # List remote branches
              git branch -r

              # List all branches (local and remote)
              git branch -a
            </CodeBlock>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Branch Management</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <CodeBlock>
              # Delete local branch
              git branch -d branch-name

              # Force delete unmerged branch
              git branch -D branch-name

              # Delete remote branch
              git push origin --delete branch-name

              # Rename branch
              git branch -m new-name

              # Track remote branch
              git checkout --track origin/feature-name
            </CodeBlock>
          </div>
        </div>
      </div>
    </div>

    <div className="border-b pb-8">
      <h2 className="text-2xl font-bold mb-4">Branching Strategies</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-3">Git Flow</h3>
          <div className="bg-blue-50 p-6 rounded-lg">
            <p className="mb-4">A robust framework for managing large projects.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><span className="font-bold">main/master:</span> Production code</li>
              <li><span className="font-bold">develop:</span> Latest development changes</li>
              <li><span className="font-bold">feature/*:</span> New features</li>
              <li><span className="font-bold">release/*:</span> Release preparation</li>
              <li><span className="font-bold">hotfix/*:</span> Urgent fixes</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">GitHub Flow</h3>
          <div className="bg-green-50 p-6 rounded-lg">
            <p className="mb-4">A simpler, more flexible workflow.</p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Create branch from main</li>
              <li>Add commits</li>
              <li>Open pull request</li>
              <li>Review and discuss</li>
              <li>Deploy and test</li>
              <li>Merge to main</li>
            </ol>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Trunk Based Development</h3>
          <div className="bg-purple-50 p-6 rounded-lg">
            <p className="mb-4">Focus on small, frequent updates to main branch.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Short-lived feature branches</li>
              <li>Frequent integration to main</li>
              <li>Feature flags for incomplete work</li>
              <li>Emphasis on automated testing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="border-b pb-8">
      <h2 className="text-2xl font-bold mb-4">Merging and Resolving Conflicts</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-3">Merging Branches</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <CodeBlock>
              # Switch to target branch
              git checkout main

              # Merge feature branch
              git merge feature-name

              # Merge with commit
              git merge --no-ff feature-name

              # Abort merge
              git merge --abort

              # Push merged changes
              git push origin main
            </CodeBlock>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Handling Merge Conflicts</h3>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Identify conflicting files</li>
            <li>Open files and locate conflict markers:
              <div className="bg-gray-50 p-4 rounded-lg mt-2">
                <code className="block font-mono text-sm whitespace-pre">
                  {`<<<<<<< HEAD
Your changes
=======
Their changes
>>>>>>> feature-branch`}
                </code>
              </div>
            </li>
            <li>Choose desired changes</li>
            <li>Remove conflict markers</li>
            <li>Stage resolved files</li>
            <li>Complete the merge with commit</li>
          </ol>
        </div>
      </div>
    </div>

    <div>
      <h2 className="text-2xl font-bold mb-4">Advanced Branch Operations</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-3">Rebasing</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <CodeBlock>
              # Rebase current branch onto main
              git rebase main

              # Interactive rebase
              git rebase -i HEAD~3

              # Continue after resolving conflicts
              git rebase --continue

              # Abort rebase
              git rebase --abort
            </CodeBlock>
            <div className="mt-4 bg-yellow-50 p-4 rounded">
              <p className="font-bold">⚠️ Warning:</p>
              <p>Never rebase branches that have been pushed to public repositories.</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Cherry Picking</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <CodeBlock>
              # Apply specific commit to current branch
              git cherry-pick commit-hash

              # Cherry pick without committing
              git cherry-pick -n commit-hash

              # Cherry pick multiple commits
              git cherry-pick commit1..commit2
            </CodeBlock>
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg mt-4">
          <h3 className="text-xl font-semibold mb-3">Best Practices:</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Keep branches focused and short-lived</li>
            <li>Use descriptive branch names</li>
            <li>Regularly sync with the main branch</li>
            <li>Delete merged branches</li>
            <li>Document branching strategy</li>
            <li>Enforce branch protection rules</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Branches;