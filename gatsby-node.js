exports.createPages = ({ actions: { createPage } }) => {
    const config = require('./data/contents.json');
    const photos = config[0].photos

    for (var i = 0; i < photos.length; i++) {
        photos[i].img.forEach(photo => {
            createPage({
                path: `/img/${photo.src}`,
                component: require.resolve("./src/templates/photoLrg.js"),
                context: {
                    photo : JSON.stringify(photo)
                },
            })
        })
   
    }


    photos.forEach(item => {
        createPage({
            path : `/photos/${item.name}`,
            component : require.resolve("./src/templates/photosByCountry.js"),
            context : {
                photos : JSON.stringify(item.img)
            }
        })

    })
    
}

