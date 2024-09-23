module.exports = {
  branches: ['main'],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'conventionalcommits',
        releaseRules: [
          { type: 'docs', scope: 'readme', release: 'patch' },
          { type: 'refactor', release: 'patch' },
          { type: 'test', release: 'patch' },
          { type: 'ci', release: 'patch' },
        ],
      },
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'conventionalcommits',
        presetConfig: {
          types: [
            { type: 'docs', section: 'Docs' },
            { type: 'refactor', section: 'Refactor' },
            { type: 'test', section: 'Tests' },
            { type: 'ci', section: 'CI/CD' },
          ],
        },
      },
    ],
    '@semantic-release/changelog',
    [
      '@semantic-release/npm',
      {
        npmPublish: false,
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: ['package.json','CHANGELOG.md'],
        message:
          'chore(release): ${nextRelease.version}\n\n${nextRelease.notes} [skip ci]'
      },
    ],
  ],
};
