export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5eea095d141d27fe0e671afe',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-quest-studio',
                  apiId: 'ce0ea0dc-b409-4a96-8a84-3b2305c86dc3'
                },
                {
                  buildHookId: '5eea095de1c93a91171829a7',
                  title: 'Blog Website',
                  name: 'sanity-sapper-quest',
                  apiId: 'c124a252-0488-4d6d-beb7-546a0a8977f7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mike-arbuzov/sanity-sapper-quest',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-quest.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
