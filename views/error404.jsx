const React = require('react')
const Def = require('./default')

function error404 () {
    return(
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p> 
                <div>
                    <img src="/images/alexander-london-mJaD10XeD7w-unsplash.jpg" alt="404 Image"/>
                    <div>
                         Photo by <a href="AUTHOR_LINK">Lily Banse</a> on <a href="UNSPLASH_Link">Unsplash</a>
                    </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = error404