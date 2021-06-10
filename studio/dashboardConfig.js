export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '60c187d74c455489415c814b',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-gy3baxq9',
                  apiId: '2a90f372-bb4e-4e33-9497-17d0e08617a9'
                },
                {
                  buildHookId: '60c187d7014b178f4a054027',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-sja1ag3t',
                  apiId: '52446395-405a-4c48-8db7-b5101a868be6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ajatula/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-sja1ag3t.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
