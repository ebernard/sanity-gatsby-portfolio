export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6181ad8afad6f34160bcd54d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-xziihgeh',
                  apiId: '1f1cbb7c-bf85-4432-b0e8-4a34c9af428d'
                },
                {
                  buildHookId: '6181ad8a644e9d3e5b7d7812',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-7qe9z8ch',
                  apiId: '556108e6-765e-46d7-9e18-dd340369eefe'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ebernard/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-7qe9z8ch.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
