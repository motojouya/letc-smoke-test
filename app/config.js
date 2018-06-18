/*
 * {
 *   port: 'option',
 *   dbDriver: 'required letc-pg etc',
 *   static: 'option string directory',
 *   topLevelCatch: 'option function',
 *   logger: 'option object',
 *   logFormat: 'option string',
 *   requestParser: 'option array[object]',
 *   htmlTemplateRoot: 'string directory required if use',
 *   sqlTemplateRoot: 'string directory required if use',
 *   session: { option
 *     sessionSecret: 'required',
 *     ..parameterForSession,
 *   },
 *   auth: { option
 *     check : 'function',
 *     router: 'if authorized path, here',
 *     authInfoObjectType: {
 *       name: Type,
 *     }
 *     roleName: 'default role',
 *     loadAuthFunction: procedure object,
 *   },
 *   routers [
 *     {
 *        path: 'string required (express path)',
 *        transaction: '(PARALLEL|SERIAL|TRANSACTION) default SERIAL',
 *        roles: ['any but diff in shallow']
 *        loadAuth: boolean default false,
 *        procedures: [
 *          {
 *            name: 'string required',
 *            func: 'function func > file templateの順に強い',
 *            file: 'string directry',
 *            template: 'string',
 *            type: '(QUERY|COMMAND) required if file or template',
 *            anotherCommandFunc: 'if COMMAND failed',
 *            anotherCommandFile: 'if COMMAND failed',
 *            anotherCommandTemplate: 'if COMMAND failed',
 *          },
 *        ]
 *        routers: ROUTERS,
 *     },
 *   ]
 *   noRoute: funtion,
 *   whenError: function,
 * }
 */


module.export = {


};
