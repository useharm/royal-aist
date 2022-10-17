const reqSvgs = require.context('./img', true, /\.(png|jpg|svg)$/ );
export const svgs = reqSvgs
    .keys ()
    .reduce ( ( images: any, path ) => {
    images[path] = reqSvgs ( path )
    return images
  }, {} );