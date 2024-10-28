import React from 'react';

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
            <div className="bg-gray-100 p-4 rounded font-mono text-sm" style={{ whiteSpace: 'pre-wrap' }}>
              {`# Undo commit but keep changes staged
git reset --soft HEAD~1

# Undo commit and unstage changes
git reset HEAD~1

# Undo commit and discard changes
git reset --hard HEAD~1

# Create new commit that undoes previous commit
git revert HEAD`}
            </div>
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
                <div className="bg-gray-100 p-4 rounded font-mono text-sm" style={{ whiteSpace: 'pre-wrap' }}>
                  {`git status`}
                </div>
              </li>
              <li>Open each conflicting file and look for conflict markers:
                <div className="bg-gray-100 p-4 rounded font-mono text-sm" style={{ whiteSpace: 'pre-wrap' }}>
                  {`<<<<<<< HEAD
Your changes
=======
Their changes
>>>>>>> branch-name`}
                </div>
              </li>
              <li>Resolve conflicts by choosing or combining changes</li>
              <li>Remove conflict markers</li>
              <li>Stage resolved files:
                <div className="bg-gray-100 p-4 rounded font-mono text-sm" style={{ whiteSpace: 'pre-wrap' }}>
                  {`git add [resolved-file]`}
                </div>
              </li>
              <li>Complete the merge:
                <div className="bg-gray-100 p-4 rounded font-mono text-sm" style={{ whiteSpace: 'pre-wrap' }}>
                  {`git commit -m "Resolve merge conflicts"`}
                </div>
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
            <div className="bg-gray-100 p-4 rounded font-mono text-sm" style={{ whiteSpace: 'pre-wrap' }}>
              {`# Add upstream remote (if not already added)
git remote add upstream https://github.com/original/repo.git

# Fetch upstream changes
git fetch upstream

# Checkout your main branch
git checkout main

# Merge upstream changes
git merge upstream/main

# Push updates to your fork
git push origin main`}
            </div>
          </div>
        </div>
      </div>

      {/* Question 4 */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <h3 className="text-xl font-bold mb-4">How do I squash commits?</h3>
          <div className="space-y-4">
            <p>To combine multiple commits into one:</p>
            <div className="bg-gray-100 p-4 rounded font-mono text-sm" style={{ whiteSpace: 'pre-wrap' }}>
              {`# Interactive rebase for last 3 commits
git rebase -i HEAD~3

# In the editor, mark commits to squash:
pick oldest_commit
squash middle_commit
squash newest_commit

# Save and edit commit message
# Force push if needed
git push --force-with-lease origin branch-name`}
            </div>
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
            <div className="bg-gray-100 p-4 rounded font-mono text-sm" style={{ whiteSpace: 'pre-wrap' }}>
              {`# Rename local branch
git branch -m old-name new-name

# If on the branch you want to rename
git branch -m new-name

# Delete old remote branch and push new one
git push origin :old-name
git push origin new-name`}
            </div>
          </div>
        </div>
      </div>

      {/* Question 6 */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <h3 className="text-xl font-bold mb-4">How do I remove sensitive data from Git history?</h3>
          <div className="space-y-4">
            <p>Use git-filter-repo (recommended) or BFG Repo Cleaner:</p>
            <div className="bg-gray-100 p-4 rounded font-mono text-sm" style={{ whiteSpace: 'pre-wrap' }}>
              {`# Using git-filter-repo
pip install git-filter-repo
git filter-repo --invert-paths --path path/to/sensitive/file

# Force push to remote
git push origin --force --all`}
            </div>
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
            <div className="bg-gray-100 p-4 rounded font-mono text-sm" style={{ whiteSpace: 'pre-wrap' }}>
  {`name: Release

on:
  push:
    tags:
      - 'v*'

jobs:
  release:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Create Release
        uses: actions/create-release@v1
        env:
          GITHUB_TOKEN: \${{ secrets.GITHUB_TOKEN }}
        with:
          tag_name: \${{ github.ref }}
          release_name: Release \${{ github.ref }}
          draft: false
          prerelease: false`}
</div>

          </div>
        </div>
      </div>
    </div>
  </div>
);

export default FAQ;
