module.exports = {
    siteMetadata: {
        title: 'Frontend Masters Gatsby Workshop',
        description: 'This site was built as a follow along class on gatsby intro at the Frontend Masters Gatsby workshop',
    },
    plugins: [
        'gatsby-plugin-emotion', 
        'gatsby-plugin-react-helmet',
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-plugin-mdx',
            options: {
                defaultLayouts: {
                    default: require.resolve('./src/components/layouts'),
                },
                gatsbyRemarkPlugins: [
                    {resolve: 'gatsby-remark-images'}
                ]
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options:{
                name: 'posts',
                path: './src/posts',
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options:{
                name: 'images',
                path: './static/images',
            }
        },
        {
            resolve: 'gatsby-source-instagram',
            options:{
                username: `1937072921`,
            },
        },
        {
            resolve: 'gatsby-plugin-webpack-bundle-analyzer',
            options:{
                production: true,
                disable: !process.env.ANALYZE_BUNDLE_SIZE,
                generateStatsFile: true,
                analyzerMode: 'static',
            },
        },
    ],
};