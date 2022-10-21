import path from 'path';


const routesApi = path.join(__dirname, './api/**/*.routes.ts');
const routesApi2 = path.join(__dirname, './api/auth/local/local.routes.ts');

export const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: '4iDigital API',
      version: '1.0.0',
      contact: {
        name: 'David Pineda',
        email: 'dspinedao@gmail.com',
      },


    },
    servers : [
      {
        url: 'http://localhost:8080/api-docs',
        escription: 'Local server',
      },
    ],
    components: {
			securitySchemes: {
				bearerAuth: {
					type: 'http',
					scheme: 'bearer',
					bearerFormat: 'JWT',
				},
			},
		},
    security: [
			{
				bearerAuth: [],
			},
		],
  },
  apis: [routesApi, routesApi2],
};

