export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'ubutt088/sanity-angular-website'
      }
    },
    { name: 'structure-menu' },
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
                  buildHookId: '63404156c292180e2aa5fd8c',
                  title: 'Sanity Studio',
                  name: 'sanity-angular-website-studio-8vc1ehga',
                  apiId: '694d8513-bc0b-49e0-bd01-a9cdd1d451aa'
                },
                {
                  buildHookId: '63404157bcda5009b533283f',
                  title: 'Website',
                  name: 'sanity-angular-website-web-ht9549dt',
                  apiId: '8dfe8a53-a920-40f1-80d6-b17c47a15bfd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ubutt088/sanity-angular-website',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-angular-website-web-ht9549dt.netlify.app', category: 'apps'}
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
