/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation
 The sidebars can be generated from the filesystem, or explicitly defined here.
 Create as many sidebars as you want.
 */

module.exports = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'overview',
      label: 'Project Portal',
    },
    {
      type: 'category',
      label: 'Scripting',
      items: [
      'Intro Scene',
      {
      type: 'category',
      label: 'Player Scripts',
      items: [
      'Player Controls',
    //  'Player Movement',
    //  'Player Shooting',
    //  'Player Physics',
    //  'Player Physics - Collision',
    //  'aid-player-to-enemy',
    //  'fire-player-weapon',
      ],
      },
     // {
     // type: 'category',
     // label: 'Enemy Movement',
     // items: [
     // 'Enemy Shooting',
     // 'Enemy Health',
     // 'Enemy Spawning',
     // 'Enemy Collision',
     // 'Enemy Death',
     // 'Enemy Respawn',
     // 'Enemy AI',
     // 'Enemy AI - Pathfinding',
     // 'Enemy AI - Pathing',
     // 'Enemy AI - Pathing - Pathfinding',
     // 'Enemy AI - Pathing - Pathfinding - Pathfinding',
     //   ],
     // },
      //'Scene Management',
      'Special Effects',
      //'Special Effects - Particle System',
      //'Special Effects - Aiming',
      //'Stage Management',
      //'Player Management',
      //'Player Physics',
      //'Player Physics - Collision',
      //'aid-player-to-enemy',
      //'fire-player-weapon',
      'Variabl Collections',
      ],
    },
    {
      type: 'category',
      label: 'Modeling Animation',
      items: [
      'Modeling Animation',
      //'customize-image',
      //'manage-airflow-versions',
      //'upgrade-to-airflow-2',
      //'access-airflow-database',
      //'airflow-api',
      //{
      //type: 'category',
      //label: 'Write DAGs',
      //items: [
      //'deferrable-operators',
      //'kubepodoperator-local',
      //'kubepodoperator',
      //'kubernetes-executor',
      //  ],
      //},
      //'cli-podman',
      //'upgrade-astro-cli',
    ],
    },
//    {
//      type: 'category',
//      label: 'Deploy',
//      items: [
//      //'deploy-cli',
//      //'ci-cd',
//      ],
//    },
//    {
//      type: 'category',
//      label: 'Administration',
//      items: [
//        {
//        type: 'category',
//        label: 'Install',
//        items: [
//        'install-aws',
//        'install-azure',
//        'install-gcp',
//        'install-airgapped',
//          ],
//        },
//        'upgrade-astronomer',
//        {
//        type: 'category',
//        label: 'Platform setup',
//        items: [
//        'integrate-auth-system',
//        'logs-to-s3',
//        'registry-backend',
//        'renew-tls-cert',
//        'namespace-pools',
//        'export-task-logs',
//        'third-party-ingress-controllers',
//        'custom-image-registry',
//          ],
//        },
//        {
//        type: 'category',
//        label: 'Platform management',
//        items: [
//        'apply-platform-config',
//        'houston-api',
//        'configure-platform-resources',
//          ],
//        },
//        {
//          type: 'category',
//          label: 'Deployment management',
//          items: [
//          'configure-deployment',
//          'secrets-backend',
//          'environment-variables',
//          'deploy-git-sync',
//          'deploy-nfs',
//          ],
//        },
//        {
//        type: 'category',
//        label: 'User access',
//        items: [
//        'manage-workspaces',
//        'import-idp-groups',
//        'workspace-permissions',
//        'manage-platform-users',
//        'integrate-iam',
//        ],
//        },
//      ],
//    },
//    {
//      type: 'category',
//      label: 'Observability',
//      items: [
//      'deployment-logs',
//      'grafana-metrics',
//      'kibana-logging',
//      'airflow-alerts',
//      'platform-alerts',
//      ],
//    },
//    {
//      type: 'category',
//      label: 'Astronomer Certified',
//      items: [
//      'image-architecture',
//      'single-node-install',
//      'install-packages',
//      'upgrade-ac',
//      'ac-cve',
//      'ac-support-policy',
//      ],
//    },
//    {
//      type: 'category',
//      label: 'Astro Runtime',
//      items: [
//      'runtime-image-architecture',
//      'migrate-to-runtime',
//      'runtime-version-lifecycle-policy',
//      ],
//    },
//    {
//      type: 'category',
//      label: 'Troubleshoot',
//      items: [
//      'kubectl',
//      'debug-install',
//      'disaster-recovery',
//      ],
//    },
//    {
//    type: 'category',
//    label: 'Release notes',
//    items: [
//      'release-notes',
//      'cli-release-notes',
//      'runtime-release-notes',
//    ],
//    },
//    {
//      type: 'category',
//      label: 'Reference',
//      items: [
//      'system-components',
//      'support',
//      'cli-reference',
//      'version-compatibility-reference',
//      'release-lifecycle-policy',
//      'documentation-archive',
//      ],
//    },
  ],
};
