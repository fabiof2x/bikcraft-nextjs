module.exports = function (plop) {

  plop.setGenerator('component', {
    description: 'application component (ex.: button)',

    prompts: [{
      type: 'input',
      name: 'name',
      message: "What's the new component name?"
    }],

    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/component/index.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.module.scss',
        templateFile: 'templates/component/component.module.scss.hbs',
      }
    ]
  });

  plop.setGenerator('pattern component', {
    description: 'ex.: footer, header',

    prompts: [{
      type: 'input',
      name: 'name',
      message: "What's the new component name?"
    }],

    actions: [
      {
        type: 'add',
        path: '../src/components/patterns/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/component/index.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/patterns/{{pascalCase name}}/{{pascalCase name}}.module.scss',
        templateFile: 'templates/component/pattern.component.module.scss.hbs',
      }
    ]
  });

  plop.setGenerator('page', {
    description: 'new page',

    prompts: [
      {
        type: 'input',
        name: 'name',
        message: "What's the new page name? (in english)"
      },
      {
        type: 'input',
        name: 'fileName',
        message: "What's the new page file name? (in portuguese)"
      }
    ],

    actions: [
      {
        type: 'add',
        path: '../src/pages/{{lowerCase fileName}}.tsx',
        templateFile: 'templates/page/page.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/styles/{{pascalCase name}}.module.scss',
        templateFile: 'templates/page/Page.module.scss.hbs',
      }
    ]
  });
};