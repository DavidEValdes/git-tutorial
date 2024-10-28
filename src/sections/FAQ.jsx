import React from 'react';

const CodeBlock = ({ children }) => (
  <div className="bg-gray-100 p-4 rounded font-mono text-sm">
    {children}
  </div>
);

const FAQ = () => (
  <div className="space-y-8">
    <div>
      <h1 className="text-4xl font-bold mb-6">Frequently Asked Questions</h1>
      <p className="text-xl text-gray-600">
        Common questions and answers about using Git and GitHub effectively.
      </p>
    </div>

    <div className="space-y-6">
      {/* Question 1 */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <h3 className="text-xl font-bold mb-4">How do I undo the last commit?</h3>
          <div className="space-y-4">
            <p>There are several ways to undo a commit, depending on your needs:</p>
            <CodeBlock>
              {'# Undo commit but keep changes staged\n'}
              {'git reset --soft HEAD~1\n\n'}
              {'# Undo commit and unstage changes\n'}
              {'git reset HEAD~1\n\n'}
              {'# Undo commit and discard changes\n'}
              {'git reset --hard HEAD~1\n\n'}
              {'# Create new commit that undoes previous commit\n'}
              {'git revert HEAD'}
            </CodeBlock>
            <p className="text-sm text-gray-600">
              Use --hard with caution as it permanently discards changes.
            </p>
          </div>
        </div>
      </div>

      {/* Question 2 */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <h3 className="text-xl font-bold mb-4">How do I resolve merge conflicts?</h3>
          <div className="space-y-4">
            <ol className="list-decimal pl-5 space-y-2">
              <li>First, identify conflicting files:
                <CodeBlock>
                  {'git status'}
                </CodeBlock>
              </li>
              <li>Open each conflicting file and look for conflict markers:
                <CodeBlock>
                  {'<<<<<<< HEAD\n'}
                  {'Your changes\n'}
                  {'=======\n'}
                  {'Their changes\n'}
                  {'>>>>>>> branch-name'}
                </CodeBlock>
              </li>
              <li>Resolve conflicts by choosing or combining changes</li>
              <li>Remove conflict markers</li>
              <li>Stage resolved files:
                <CodeBlock>
                  {'git add [resolved-file]'}
                </CodeBlock>
              </li>
              <li>Complete the merge:
                <CodeBlock>
                  {'git commit -m "Resolve merge conflicts"'}
                </CodeBlock>
              </li>
            </ol>
          </div>
        </div>
      </div>

      {/* Question 3 */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <h3 className="text-xl font-bold mb-4">How do I sync my fork with the original repository?</h3>
          <div className="space-y-4">
            <CodeBlock>
              {'# Add upstream remote (if not already added)\n'}
              {'git remote add upstream https://github.com/original/repo.git\n\n'}
              {'# Fetch upstream changes\n'}
              {'git fetch upstream\n\n'}
              {'# Checkout your main branch\n'}
              {'git checkout main\n\n'}
              {'# Merge upstream changes\n'}
              {'git merge upstream/main\n\n'}
              {'# Push updates to your fork\n'}
              {'git push origin main'}
            </CodeBlock>
          </div>
        </div>
      </div>

      {/* Question 4 */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <h3 className="text-xl font-bold mb-4">How do I squash commits?</h3>
          <div className="space-y-4">
            <p>To combine multiple commits into one:</p>
            <CodeBlock>
              {'# Interactive rebase for last 3 commits\n'}
              {'git rebase -i HEAD~3\n\n'}
              {'# In the editor, mark commits to squash:\n'}
              {'pick oldest_commit\n'}
              {'squash middle_commit\n'}
              {'squash newest_commit\n\n'}
              {'# Save and edit commit message\n'}
              {'# Force push if needed\n'}
              {'git push --force-with-lease origin branch-name'}
            </CodeBlock>
            <p className="text-sm text-gray-600">
              Note: Only squash commits that haven't been pushed or on feature branches.
            </p>
          </div>
        </div>
      </div>

      {/* Question 5 */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <h3 className="text-xl font-bold mb-4">How do I rename a branch?</h3>
          <div className="space-y-4">
            <CodeBlock>
              {'# Rename local branch\n'}
              {'git branch -m old-name new-name\n\n'}
              {'# If on the branch you want to rename\n'}
              {'git branch -m new-name\n\n'}
              {'# Delete old remote branch and push new one\n'}
              {'git push origin :old-name\n'}
              {'git push origin new-name'}
            </CodeBlock>
          </div>
        </div>
      </div>

      {/* Question 6 */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <h3 className="text-xl font-bold mb-4">How do I remove sensitive data from Git history?</h3>
          <div className="space-y-4">
            <p>Use git-filter-repo (recommended) or BFG Repo Cleaner:</p>
            <CodeBlock>
              {'# Using git-filter-repo\n'}
              {'pip install git-filter-repo\n'}
              {'git filter-repo --invert-paths --path path/to/sensitive/file\n\n'}
              {'# Force push to remote\n'}
              {'git push origin --force --all'}
            </CodeBlock>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="font-bold">⚠️ Important:</p>
              <ul className="list-disc pl-5 mt-2">
                <li>Make a backup before cleaning history</li>
                <li>All collaborators must re-clone after cleaning</li>
                <li>Consider sensitive data compromised</li>
                <li>Update any secrets that were exposed</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Question 7 */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <h3 className="text-xl font-bold mb-4">How do I automate releases?</h3>
          <div className="space-y-4">
            <p>Use GitHub Actions to automate releases:</p>
            <CodeBlock>
              {'name: Release\n\n'}
              {'on:\n'}
              {'  push:\n'}
              {'    tags:\n'}
              {'      - \'v*\'\n\n'}
              {'jobs:\n'}
              {'  release:\n'}
              {'    runs-on: ubuntu-latest\n'}
              {'    steps:\n'}
              {'      - uses: actions/checkout@v2\n'}
              {'      - name: Create Release\n'}
              {'        uses: actions/create-release@v1\n'}
              {'        env:\n'}
              {'          GITHUB_TOKEN: $' + '{' + '{ secrets.GITHUB_TOKEN }' + '}\n'}
              {'        with:\n'}
              {'          tag_name: $' + '{' + '{ github.ref }' + '}\n'}
              {'          release_name: Release $' + '{' + '{ github.ref }' + '}\n'}
              {'          draft: false\n'}
              {'          prerelease: false'}
            </CodeBlock>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default FAQ;