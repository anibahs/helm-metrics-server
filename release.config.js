const config = {
    branches: ['main'],
    repositoryUrl: "https://github.com/cyse7125-su24-team11/helm-metrics-server.git",
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        ["@semantic-release/git", {
            assets: ["dist/*.js","dist/*.js.map"],
            message: "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
        }],
        "@semantic-release/github"
    ],
    preset: 'angular',
    releaseRules: [
        { type: 'docs', release: 'patch' },
        { type: 'docs', scope: 'README', release: 'patch' }
    ]
};
 
module.exports = config;