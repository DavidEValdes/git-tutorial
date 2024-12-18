import React from 'react';

const PullRequests = () => (
  <div className="space-y-8">
    <div>
      <h1 className="text-4xl font-bold mb-6">Managing Pull Requests</h1>
      <p className="text-xl text-gray-600">
        Pull requests let you tell others about changes you've pushed and request their review before merging into the main branch.
      </p>
    </div>

    <div className="border-b pb-8">
      <h2 className="text-2xl font-bold mb-4">Creating Pull Requests</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-3">Basic Steps</h3>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Push your branch to GitHub:
              <div className="bg-gray-100 p-4 rounded font-mono text-sm whitespace-pre">
                git push origin feature-branch
              </div>
            </li>
            <li>Visit your repository on GitHub</li>
            <li>Click "Compare & pull request"</li>
            <li>Fill in PR details:
              <ul className="list-disc pl-5 mt-1">
                <li>Clear, descriptive title</li>
                <li>Detailed description</li>
                <li>Link related issues</li>
                <li>Request reviewers</li>
                <li>Assign labels</li>
              </ul>
            </li>
            <li>Create pull request</li>
          </ol>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">PR Description Template</h3>
          <div className="bg-gray-100 p-4 rounded font-mono text-sm whitespace-pre">
            ## Changes Made{'\n'}
            - Detailed list of changes{'\n'}
            - Impact on existing functionality{'\n'}
            {'\n'}
            ## Testing Done{'\n'}
            - Tests added/modified{'\n'}
            - Manual testing steps{'\n'}
            {'\n'}
            ## Screenshots{'\n'}
            (if applicable){'\n'}
            {'\n'}
            ## Related Issues{'\n'}
            Closes #123{'\n'}
            {'\n'}
            ## Checklist{'\n'}
            - [ ] Tests added{'\n'}
            - [ ] Documentation updated{'\n'}
            - [ ] CI checks pass
          </div>
        </div>
      </div>
    </div>

    <div className="border-b pb-8">
      <h2 className="text-2xl font-bold mb-4">Reviewing Pull Requests</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-3">Review Checklist</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Code Quality</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Code style and standards</li>
                <li>Logic and efficiency</li>
                <li>Error handling</li>
                <li>Security concerns</li>
                <li>Performance implications</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Documentation</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Code comments</li>
                <li>API documentation</li>
                <li>README updates</li>
                <li>Changelog entries</li>
                <li>Migration guides</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Review Actions</h3>
          <div className="space-y-4">
            <p><span className="font-bold">Comment:</span> Submit general feedback without explicit approval</p>
            <p><span className="font-bold">Approve:</span> Submit feedback and approve merging changes</p>
            <p><span className="font-bold">Request changes:</span> Submit feedback that must be addressed before merging</p>
          </div>
        </div>
      </div>
    </div>

    <div className="border-b pb-8">
      <h2 className="text-2xl font-bold mb-4">Maintaining Pull Requests</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-3">Updating Pull Requests</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="bg-gray-100 p-4 rounded font-mono text-sm whitespace-pre">
              # Update your feature branch with main{'\n'}
              git checkout feature-branch{'\n'}
              git fetch origin{'\n'}
              git merge origin/main{'\n'}
              {'\n'}
              # Push updates{'\n'}
              git push origin feature-branch{'\n'}
              {'\n'}
              # Force push if needed (use with caution){'\n'}
              git push --force-with-lease origin feature-branch
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Resolving Review Comments</h3>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Address each comment systematically</li>
            <li>Mark discussions as resolved</li>
            <li>Push additional commits</li>
            <li>Request re-review if needed</li>
            <li>Update PR description if necessary</li>
          </ol>
        </div>
      </div>
    </div>

    <div className="border-b pb-8">
      <h2 className="text-2xl font-bold mb-4">Merging Strategies</h2>
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-bold mb-2">Create a merge commit</h3>
            <p className="text-sm">Preserves all commits history</p>
            <div className="bg-gray-100 p-4 rounded font-mono text-sm whitespace-pre">
              git merge --no-ff
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-bold mb-2">Squash and merge</h3>
            <p className="text-sm">Combines all commits into one</p>
            <div className="bg-gray-100 p-4 rounded font-mono text-sm whitespace-pre">
              git merge --squash
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-bold mb-2">Rebase and merge</h3>
            <p className="text-sm">Creates linear history</p>
            <div className="bg-gray-100 p-4 rounded font-mono text-sm whitespace-pre">
              git rebase main
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <h2 className="text-2xl font-bold mb-4">Best Practices</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">For Authors</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Keep PRs focused and small</li>
            <li>Write clear descriptions</li>
            <li>Add tests and documentation</li>
            <li>Respond promptly to feedback</li>
            <li>Keep commit history clean</li>
            <li>Update branch with main regularly</li>
          </ul>
        </div>

        <div className="bg-green-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">For Reviewers</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Review promptly</li>
            <li>Be constructive and clear</li>
            <li>Consider context and scope</li>
            <li>Suggest specific improvements</li>
            <li>Approve once satisfied</li>
            <li>Follow up on changes</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default PullRequests;
