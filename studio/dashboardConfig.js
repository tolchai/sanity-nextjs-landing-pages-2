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
                  buildHookId: '5edf954f19e09357da7ac15e',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-2-studio-47iwo96q',
                  apiId: 'ae62f86c-3ce7-4196-b48f-594958aa3ebd'
                },
                {
                  buildHookId: '5edf954f3d2c6d7e08312808',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-2-web-7r9ghz7e',
                  apiId: '9044c630-53a0-4c84-9d41-fc6b262d6234'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tolchai/sanity-nextjs-landing-pages-2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-2-web-7r9ghz7e.netlify.app', category: 'apps'}
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
