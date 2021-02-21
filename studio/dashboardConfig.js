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
                  buildHookId: '60322e6f37d815bc3c2efe69',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-u4mkrzhd',
                  apiId: '926b8418-6bf6-4e8c-89e4-11bc99fa41f1'
                },
                {
                  buildHookId: '60322e6ff3ce852282a01b82',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-q5tx9shx',
                  apiId: '345ba22c-e448-4f6d-9c55-ff36e62e2917'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/guttenbergovitz/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-q5tx9shx.netlify.app',
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
