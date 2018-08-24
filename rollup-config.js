export default {
    plugins: [
        nodeResolve({jsnext: true, module: true}),
        commonjs({
          include: [
          'node_modules/@cloudinary/angular/**',
          'node_modules/cloudinary-core/**',
          ],
          namedExports: {
            'cloudinary-core/cloudinary-core-shrinkwrap': [ 'Cloudinary' ],
            '@cloudinary/angular': [ 'CloudinaryModule', 'Cloudinary' ],
          }
        }),
    ]
   }