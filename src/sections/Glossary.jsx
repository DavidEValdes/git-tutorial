import React from 'react';

const GlossaryTerm = ({ term, children }) => (
  <div className="bg-white rounded-lg shadow p-6 space-y-2">
    <h3 className="text-xl font-bold text-blue-600">{term}</h3>
    <div className="text-gray-600">{children}</div>
  </div>
);

const Glossary = () => (
  <div className="space-y-8">
    <div>
      <h1 className="text-4xl font-bold mb-6">Git and GitHub Glossary</h1>
      <p className="text-xl text-gray-600">
        A comprehensive guide to common terms and concepts used in Git and GitHub.
      </p>
    </div>

    <div className="grid grid-cols-1 gap-4">
      <GlossaryTerm term="Repository (Repo)">
        <p>A storage location containing your project's files and their complete version history. It can be either local (on your computer) or remote (on GitHub).</p>
        <p className="mt-2 text-sm">Example: A GitHub repository contains all your project files, documentation, and the entire history of changes.</p>
      </GlossaryTerm>

      <GlossaryTerm term="Clone">
        <p>The process of creating a local copy of a remote repository on your computer. This includes all files, branches, and version history.</p>
        <p className="mt-2 text-sm">Command: <code>git clone https://github.com/username/repository.git</code></p>
      </GlossaryTerm>

      <GlossaryTerm term="Commit">
        <p>A snapshot of changes made to files in your repository. Each commit has a unique identifier and includes metadata about who made the changes and when.</p>
        <p className="mt-2 text-sm">Command: <code>git commit -m "Add new feature"</code></p>
      </GlossaryTerm>

      <GlossaryTerm term="Branch">
        <p>A parallel version of your repository that allows you to work on different parts of your project without affecting the main codebase.</p>
        <p className="mt-2 text-sm">Command: <code>git checkout -b feature-branch</code></p>
      </GlossaryTerm>

      <GlossaryTerm term="Merge">
        <p>The process of combining changes from one branch into another. This typically happens when a feature or fix is complete and ready to be integrated.</p>
        <p className="mt-2 text-sm">Command: <code>git merge feature-branch</code></p>
      </GlossaryTerm>

      <GlossaryTerm term="Pull Request (PR)">
        <p>A request to merge changes from one branch into another, typically used for code review and discussion before integration.</p>
        <p className="mt-2 text-sm">Created via GitHub's web interface or GitHub CLI.</p>
      </GlossaryTerm>

      <GlossaryTerm term="Fork">
        <p>A personal copy of another user's repository. Allows you to freely experiment with changes without affecting the original project.</p>
        <p className="mt-2 text-sm">Created using the "Fork" button on GitHub.</p>
      </GlossaryTerm>

      <GlossaryTerm term="Remote">
        <p>A version of your repository hosted on the internet or network. Can be connected to local repositories to share changes.</p>
        <p className="mt-2 text-sm">Command: <code>git remote add origin [url]</code></p>
      </GlossaryTerm>

      <GlossaryTerm term="Fetch">
        <p>Downloads changes from a remote repository to your local machine, but doesn't integrate them into your working files.</p>
        <p className="mt-2 text-sm">Command: <code>git fetch origin</code></p>
      </GlossaryTerm>

      <GlossaryTerm term="Pull">
        <p>Fetches changes from a remote repository and automatically merges them into your current branch.</p>
        <p className="mt-2 text-sm">Command: <code>git pull origin main</code></p>
      </GlossaryTerm>

      <GlossaryTerm term="Push">
        <p>Uploads your local repository changes to a remote repository.</p>
        <p className="mt-2 text-sm">Command: <code>git push origin main</code></p>
      </GlossaryTerm>

      <GlossaryTerm term="Stage">
        <p>Marking changed files to be included in the next commit. Also known as "adding" files.</p>
        <p className="mt-2 text-sm">Command: <code>git add filename</code></p>
      </GlossaryTerm>

      <GlossaryTerm term="Stash">
        <p>Temporarily stores modified, tracked files to clean your working directory.</p>
        <p className="mt-2 text-sm">Command: <code>git stash save "work in progress"</code></p>
      </GlossaryTerm>

      <GlossaryTerm term="Tag">
        <p>A reference to a specific point in Git history, typically used for marking release versions.</p>
        <p className="mt-2 text-sm">Command: <code>git tag -a v1.0 -m "Release version 1.0"</code></p>
      </GlossaryTerm>

      <GlossaryTerm term="Rebase">
        <p>Reapplies commits on top of another base commit, creating a linear history.</p>
        <p className="mt-2 text-sm">Command: <code>git rebase main</code></p>
      </GlossaryTerm>

      <GlossaryTerm term="Cherry-pick">
        <p>Applies the changes from a specific commit to your current working branch.</p>
        <p className="mt-2 text-sm">Command: <code>git cherry-pick commit-hash</code></p>
      </GlossaryTerm>

      <GlossaryTerm term="Workflow">
        <p>A configurable automated process that can run one or more jobs, typically used for CI/CD.</p>
        <p className="mt-2 text-sm">Defined in <code>.github/workflows/</code> directory.</p>
      </GlossaryTerm>

      <GlossaryTerm term="Issue">
        <p>A way to track tasks, enhancements, bugs, and other project-related topics on GitHub.</p>
        <p className="mt-2 text-sm">Created and managed through GitHub's web interface.</p>
      </GlossaryTerm>

      <GlossaryTerm term="Action">
        <p>A custom application on GitHub's workflow automation platform that can perform complex tasks.</p>
        <p className="mt-2 text-sm">Used in workflow files with <code>uses: action/name@version</code></p>
      </GlossaryTerm>
    </div>
  </div>
);

export default Glossary;